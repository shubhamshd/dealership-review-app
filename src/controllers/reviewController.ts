import { Request, Response } from 'express';
import reviewService from '../services/reviewService';

const createReview = async (req: Request, res: Response) => {
  try {
    const savedReview = await reviewService.createReview(req.body);
    return res.status(201).json(savedReview);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export default { createReview };
