import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

export const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            console.log("No Auth Headers");
            return res.status(401).json({
                success: false,
                message: "No auth token provided",
            });
        }

        const [scheme, token] = authHeader.split(" ");

        if (scheme !== "Bearer" || !token) {
            console.log("Invalid Auth Headers");
            return res.status(401).json({
                success: false,
                message: "Invalid auth headers",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || "development-secret");

        if (!decoded || !decoded.email) {
            return res.status(401).json({
                success: false,
                message: "Invalid token",
            });
        }

        const user = await prisma.user.findUnique({
            where: {
                email: decoded.email,
            },
            select: {
                id: true,
                email: true,
                role: true,
                name: true,
            },
        });

        if (!user) {
            console.log("User not found in auth middleware");
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        req.user = user;
        return next();
    } catch (error) {
        console.log("Auth Middleware Error");
        console.log(error.message);
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};