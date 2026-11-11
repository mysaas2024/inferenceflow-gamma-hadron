import express from "express";
import client from "prom-client";
import authroutes from "./routes/authroutes.js";
import { authMiddleware } from "./middlewares/authMiddelware.js";
import predictionRoutes from "./routes/prediction.routes.js";
import { connectRedis } from "./config/redis.config.js";

const PORT = process.env.PORT || 7000;
const app = express();
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ prefix: "inferenceflow_node_" });

const httpRequestsTotal = new client.Counter({
    name: "inferenceflow_http_requests_total",
    help: "Total HTTP requests received by the Node API",
    labelNames: ["method", "route", "status"],
});

app.use((req, res, next) => {
    res.on("finish", () => {
        httpRequestsTotal.inc({
            method: req.method,
            route: req.route ? req.route.path : req.path,
            status: String(res.statusCode),
        });
    });
    next();
});

app.use(express.json({ limit: "1mb" }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

connectRedis().catch((error) => {
    console.log("Redis startup skipped:", error.message);
});

app.use('/auth', authroutes);
app.use('/api/v1/auth', authroutes);
app.use('/api/v1/predictions', authMiddleware, predictionRoutes);

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

app.get("/", async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "The API is working",
            docs: "/api/v1/auth",
        });
    } catch (error) {
        console.log("Main Server Error");
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});

if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log("The Server is running on PORT:", PORT);
    });
}

export default app;