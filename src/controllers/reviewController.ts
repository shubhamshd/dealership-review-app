import { Request as MulterRequest, Response } from 'express';
import reviewService from '../services/reviewService';

const createReview = async (req: MulterRequest, res: Response) => {
  try {
    const { dealershipName, productDetails, rating, commentWithMedia } = req.body;
    const newReviewData = {
      dealershipName,
      productDetails,
      rating,
      commentWithMedia,
    };
    const savedReview = await reviewService.createReview(newReviewData);
    return res.status(201).json(savedReview);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export default { createReview };
