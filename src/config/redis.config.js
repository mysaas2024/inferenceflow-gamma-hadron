import { createClient } from "redis";

const redis = createClient({
    url: process.env.REDIS_URL || "redis://localhost:6379",
    socket: {
        reconnectStrategy: (retries) => Math.min(retries * 250, 5000),
    },
});

redis.on("error", (error) => {
    console.log("Redis Connection Error:", error.message);
});

redis.on("ready", () => {
    console.log("Redis connection Ready");
});

redis.on("reconnecting", () => {
    console.log("Redis reconeecting");
});

export async function connectRedis() {
    try {
        if (!redis.isOpen) {
            await redis.connect();
        }
    } catch (error) {
        console.log("Redis connect skipped:", error.message);
    }
}

export async function closeRedis() {
    try {
        if (redis.isOpen) {
            await redis.quit();
        }
    } catch (error) {
        console.log("Redis close error:", error.message);
    }
}

export default redis;