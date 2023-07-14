import express from 'express';
import reviewController from '../controllers/reviewController';
import validate from '../middlewares/validation';
import reviewSchema from '../validationSchemas/reviewSchema';
import { mediaHandler } from '../middlewares/mediaHandler';

const router = express.Router();

router.post('/', validate(reviewSchema.create), mediaHandler, reviewController.createReview);

export default router;
