import express from 'express';
import {
    createPredictionRequest,
    getPredictionRequest,
    listPredictionRequests,
} from '../controllers/prediction.controller.js';

const router = express.Router();

router.get('/', listPredictionRequests);
router.get('/:id', getPredictionRequest);
router.post('/', createPredictionRequest);

export default router;
