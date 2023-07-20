import express from 'express';
import reviewController from '../controllers/reviewController';
import validate from '../middlewares/validationMiddleware';
import reviewValidation from '../validation/reviewValidation';
import { mediaHandler } from '../middlewares/mediaMiddleware';
import multer from 'multer';

// Configure multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage }).any();

const router = express.Router();

router.post('/createReview', validate(reviewValidation.create), mediaHandler, reviewController.createReview);
router.post('/updateReviewComment', upload, validate(reviewValidation.updateReviewComment), mediaHandler, validate(reviewValidation.updateReviewComment), reviewController.updateReviewComment);

export default router;
