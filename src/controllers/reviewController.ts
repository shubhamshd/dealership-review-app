import { Request as MulterRequest, Response } from 'express';
import reviewService from '../services/reviewService';
import IReview from '../interfaces/IReview';

const createReview = async (req: MulterRequest, res: Response) => {
  try {
    const savedReview = await reviewService.createReview(req.body);
    return res.status(201).json(savedReview);
  } catch (err) {
    console.log('error in controller : ', err)
    res.status(500).json({ error: err });
  }
};

export default { createReview };