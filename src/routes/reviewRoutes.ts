import express from 'express';
import reviewController from '../controllers/reviewController';
import validate from '../middlewares/validationMiddleware';
import reviewValidation from '../validation/reviewValidation';
import { mediaHandler } from '../middlewares/mediaMiddleware';

const router = express.Router();

router.post('/createReview', validate(reviewValidation.create), mediaHandler, reviewController.createReview);
router.post('/updateReviewComment', validate(reviewValidation.updateReviewComment), mediaHandler, reviewController.updateReviewComment);

export default router;
