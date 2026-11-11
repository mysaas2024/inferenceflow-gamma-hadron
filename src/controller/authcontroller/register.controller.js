import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma.js";
import redis from "../../config/redis.config.js";

export const RegisterationAuth = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            console.log("Invalid Data Fields");
            return res.status(400).json({
                success: false,
                message: "Please provide name, email, and password",
            });
        }

        const normalizedEmail = String(email).trim().toLowerCase();

        try {
            const cachedUser = await redis.get(`registerUser:${normalizedEmail}`);
            if (cachedUser) {
                console.log("Cached User Found", cachedUser);
                return res.status(409).json({
                    success: false,
                    message: "Email already exists",
                });
            }
        } catch (error) {
            console.log("Redis cache lookup failed during registration:", error.message);
        }

        const existingUser = await prisma.user.findUnique({
            where: { email: normalizedEmail },
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email: normalizedEmail,
                password: hashedPassword,
            },
        });

        const token = jwt.sign(
            { email: newUser.email, role: newUser.role },
            process.env.JWT_SECRET || "development-secret",
            { expiresIn: "1h" }
        );

        try {
            await redis.set(`registerUser:${normalizedEmail}`, JSON.stringify(newUser), { EX: 260 });
        } catch (error) {
            console.log("Redis cache write failed during registration:", error.message);
        }

        return res.status(201).json({
            success: true,
            message: "Registration successful",
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
            },
            token,
        });
    } catch (error) {
        console.log("Registration Controller Service Failed");
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};