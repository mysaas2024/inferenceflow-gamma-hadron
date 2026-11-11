import amqp from 'amqplib';

const DEFAULT_URL = process.env.RABBITMQ_URL || 'amqp://guest:guest@localhost:5672';
const JOB_QUEUE = 'inference_jobs';
const RESULT_QUEUE = 'inference_results';

export async function publishPredictionJob(payload) {
    const connection = await amqp.connect(DEFAULT_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue(JOB_QUEUE, { durable: true });
    await channel.assertQueue(RESULT_QUEUE, { durable: true });

    channel.sendToQueue(JOB_QUEUE, Buffer.from(JSON.stringify(payload)), {
        persistent: true,
    });

    await new Promise((resolve) => setTimeout(resolve, 250));
    await channel.close();
    await connection.close();

    return payload;
}

export async function consumePredictionResult(handler) {
    const connection = await amqp.connect(DEFAULT_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue(RESULT_QUEUE, { durable: true });

    channel.consume(RESULT_QUEUE, async (message) => {
        if (!message) {
            return;
        }

        try {
            const payload = JSON.parse(message.content.toString());
            await handler(payload);
            channel.ack(message);
        } catch (error) {
            console.error('Prediction result consume error:', error.message);
            channel.nack(message, false, false);
        }
    }, { noAck: false });

    return { connection, channel };
}
