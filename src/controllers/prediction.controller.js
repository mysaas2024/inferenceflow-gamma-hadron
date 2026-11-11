import crypto from 'crypto';
import { prisma } from '../lib/prisma.js';
import { publishPredictionJob } from '../services/rabbitmq.js';

const FEATURE_KEYS = [
    'fLength',
    'fWidth',
    'fSize',
    'fConc',
    'fConc1',
    'fAsym',
    'fM3Long',
    'fM3Trans',
    'fAlpha',
    'fDist',
];

export function validateFeatureVector(input) {
    if (!Array.isArray(input) || input.length !== FEATURE_KEYS.length) {
        return false;
    }

    return input.every((value) => typeof value === 'number' && Number.isFinite(value));
}

export const listPredictionRequests = async (req, res) => {
    try {
        const requests = await prisma.inferenceRequest.findMany({
            where: { userId: req.user.id },
            orderBy: { createdAt: 'desc' },
            include: { results: true },
        });

        return res.status(200).json({
            success: true,
            data: requests,
        });
    } catch (error) {
        console.log('List predictions error', error.message);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};

export const getPredictionRequest = async (req, res) => {
    try {
        const prediction = await prisma.inferenceRequest.findFirst({
            where: {
                id: req.params.id,
                userId: req.user.id,
            },
            include: { results: true },
        });

        if (!prediction) {
            return res.status(404).json({
                success: false,
                message: 'Prediction request not found',
            });
        }

        return res.status(200).json({
            success: true,
            data: prediction,
        });
    } catch (error) {
        console.log('Get prediction error', error.message);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};

export const createPredictionRequest = async (req, res) => {
    try {
        const inputFeatures = Array.isArray(req.body?.features) ? req.body.features : null;

        if (!validateFeatureVector(inputFeatures)) {
            return res.status(400).json({
                success: false,
                message: `Expected an array of 10 numeric features in this order: ${FEATURE_KEYS.join(', ')}`,
            });
        }

        const request = await prisma.inferenceRequest.create({
            data: {
                requestId: crypto.randomUUID(),
                userId: req.user.id,
                type: 'SINGLE',
                status: 'QUEUED',
                inputFeatures: {
                    features: inputFeatures,
                    featureNames: FEATURE_KEYS,
                },
                observationCount: 1,
            },
        });

        try {
            await publishPredictionJob({
                requestId: request.requestId,
                inferenceRequestId: request.id,
                userId: req.user.id,
                features: inputFeatures,
                featureNames: FEATURE_KEYS,
            });
        } catch (queueError) {
            console.error('RabbitMQ publish failed:', queueError.message);
            await prisma.inferenceRequest.update({
                where: { id: request.id },
                data: {
                    status: 'FAILED',
                    errorCode: 'QUEUE_ERROR',
                    errorMessage: 'RabbitMQ job queue is unavailable.',
                    completedAt: new Date(),
                },
            });

            return res.status(503).json({
                success: false,
                message: 'RabbitMQ queue is unavailable. The job was not accepted by the worker.',
                requestId: request.id,
            });
        }

        return res.status(202).json({
            success: true,
            message: 'Prediction request accepted and queued for the FastAPI RabbitMQ worker.',
            requestId: request.id,
            request: {
                id: request.id,
                status: request.status,
                inputFeatures: { features: inputFeatures, featureNames: FEATURE_KEYS },
            },
        });
    } catch (error) {
        console.log('Create prediction error', error.message);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};
