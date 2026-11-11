import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from "../../lib/prisma.js";
import redis from "../../config/redis.config.js";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            console.log('Invalid data fields');
            return res.status(400).json({
                success: false,
                message: 'Email and password are required',
            });
        }

        const normalizedEmail = String(email).trim().toLowerCase();

        try {
            const cachedUser = await redis.get(`loguser:${normalizedEmail}`);
            if (cachedUser) {
                console.log('Cached User Found', cachedUser);
                return res.status(401).json({
                    success: false,
                    message: 'Invalid email or password',
                });
            }
        } catch (error) {
            console.log('Redis cache lookup failed during login:', error.message);
        }

        const user = await prisma.user.findUnique({
            where: { email: normalizedEmail },
        });

        if (!user) {
            console.log('User not found');
            try {
                await redis.set(`loguser:${normalizedEmail}`, 'User not found', { EX: 260 });
            } catch (error) {
                console.log('Redis cache write failed during failed login:', error.message);
            }
            return res.status(404).json({
                success: false,
                message: 'Invalid email or password',
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log('Invalid Password');
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password',
            });
        }

        const token = jwt.sign(
            { email: user.email, role: user.role },
            process.env.JWT_SECRET || 'development-secret',
            { expiresIn: '1h' }
        );

        console.log('Token Generated', token);

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.log('Login Controller Error');
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};