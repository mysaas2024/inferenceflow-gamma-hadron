import json
import math
import os
import threading
from time import time
from typing import Any

import pika
from fastapi import FastAPI, HTTPException, status
from fastapi.responses import JSONResponse, Response
from prometheus_client import CONTENT_TYPE_LATEST, Counter, Histogram, generate_latest

app = FastAPI(title="InferenceFlow Python Worker")

RABBITMQ_URL = os.getenv("RABBITMQ_URL", "amqp://guest:guest@localhost:5672")
JOB_QUEUE = "inference_jobs"
RESULT_QUEUE = "inference_results"

REQUEST_COUNT = Counter("inferenceflow_python_requests_total", "Total requests handled by the Python worker")
INFERENCE_LATENCY = Histogram("inferenceflow_python_inference_latency_seconds", "Latency for inference requests in seconds")


def simple_rule_based_inference(features: list[float]) -> dict[str, Any]:
    values = [float(value) for value in features]
    if not values:
        raise ValueError("At least one feature is required")

    mean_value = sum(values) / len(values)
    gamma_score = 1 / (1 + math.exp(-(mean_value - 5.5)))
    hadron_score = 1.0 - gamma_score
    predicted_class = "GAMMA" if gamma_score >= 0.5 else "HADRON"

    return {
        "predictedClass": predicted_class,
        "gammaProbability": round(float(gamma_score), 6),
        "hadronProbability": round(float(hadron_score), 6),
        "confidence": round(max(gamma_score, hadron_score), 6),
        "featureMean": round(float(mean_value), 6),
    }


def publish_result(channel: pika.adapters.blocking_connection.BlockingChannel, payload: dict[str, Any]) -> None:
    channel.basic_publish(
        exchange="",
        routing_key=RESULT_QUEUE,
        body=json.dumps(payload).encode("utf-8"),
        properties=pika.BasicProperties(delivery_mode=2),
    )


def consume_jobs() -> None:
    try:
        connection = pika.BlockingConnection(
            pika.ConnectionParameters(
                host="localhost",
                port=5672,
                credentials=pika.PlainCredentials("guest", "guest"),
                heartbeat=600,
                blocked_connection_timeout=300,
            )
        )
        channel = connection.channel()
        channel.queue_declare(queue=JOB_QUEUE, durable=True)
        channel.queue_declare(queue=RESULT_QUEUE, durable=True)
        channel.basic_qos(prefetch_count=1)

        def callback(ch, method, properties, body):
            try:
                payload = json.loads(body.decode("utf-8"))
                features = payload.get("features", [])
                result = simple_rule_based_inference(features)
                result["requestId"] = payload.get("requestId")
                result["inferenceRequestId"] = payload.get("inferenceRequestId")
                result["userId"] = payload.get("userId")
                publish_result(ch, result)
                ch.basic_ack(delivery_tag=method.delivery_tag)
            except Exception as exc:  # pragma: no cover - queue safety path
                print(f"RabbitMQ worker error: {exc}")
                ch.basic_nack(delivery_tag=method.delivery_tag, requeue=False)

        channel.basic_consume(queue=JOB_QUEUE, on_message_callback=callback)
        print("FastAPI worker listening for RabbitMQ jobs...")
        channel.start_consuming()
    except Exception as exc:  # pragma: no cover - startup safety path
        print(f"RabbitMQ consumer startup failed: {exc}")


@app.on_event("startup")
def start_worker():
    consumer_thread = threading.Thread(target=consume_jobs, daemon=True)
    consumer_thread.start()


@app.get("/")
async def health():
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "success": True,
            "message": "Python FastAPI RabbitMQ worker is running",
            "rabbitmq": RABBITMQ_URL,
        },
    )


@app.get("/health")
async def health_check():
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={"success": True, "status": "ok"},
    )


@app.get("/metrics")
async def metrics():
    return Response(content=generate_latest(), media_type=CONTENT_TYPE_LATEST)


@app.post("/predict")
async def predict(payload: dict[str, Any]):
    REQUEST_COUNT.inc()
    start = time()
    try:
        features = payload.get("features", [])
        result = simple_rule_based_inference(features)
        INFERENCE_LATENCY.observe(time() - start)
        return JSONResponse(status_code=status.HTTP_200_OK, content={"success": True, "result": result})
    except ValueError as exc:
        INFERENCE_LATENCY.observe(time() - start)
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    except Exception as exc:  # pragma: no cover - safety path
        INFERENCE_LATENCY.observe(time() - start)
        raise HTTPException(status_code=500, detail=str(exc)) from exc


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("python_backend.main:app", host="0.0.0.0", port=8000, reload=False)

