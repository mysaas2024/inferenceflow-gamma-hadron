import express from 'express';
import { RegisterationAuth } from '../controller/authcontroller/register.controller.js';
import { Login } from '../controller/authcontroller/login.controller.js';
import { authMiddleware } from '../middlewares/authMiddelware.js';

const route = express.Router();

route.get('/health', async (req, res) => {
    try {
        console.log('Auth controller API health checking..');
        return res.status(200).json({
            success: true,
            message: 'Auth API is working',
        });
    } catch (error) {
        console.log('Auth controller Health Error');
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
});

route.get('/me', authMiddleware, async (req, res) => {
    return res.status(200).json({
        success: true,
        user: req.user,
    });
});

route.post('/register', RegisterationAuth);
route.post('/login', Login);

export default route;