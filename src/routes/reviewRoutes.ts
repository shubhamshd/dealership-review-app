import express from 'express';
import reviewController from '../controllers/reviewController';
import validate from '../middlewares/validationHandler';
import reviewSchema from '../validation/reviewValidation';
import { mediaHandler } from '../middlewares/mediaHandler';

const router = express.Router();

router.post('/create', validate(reviewSchema.create), mediaHandler, reviewController.createReview);

export default router;
