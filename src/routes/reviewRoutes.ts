import express from 'express';
import reviewController from '../controllers/reviewController';
import validate from '../middlewares/validation';
import reviewSchema from '../validationSchemas/reviewSchema';

const router = express.Router();

router.post('/', validate(reviewSchema.create), reviewController.createReview);

export default router;
