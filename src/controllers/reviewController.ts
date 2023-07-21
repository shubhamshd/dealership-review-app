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

const updateReviewComment = async (req: MulterRequest, res: Response) => {
  try {
    const { comment, ...rest } = req.body;
    req.body = {
      comments: comment,
      ...rest
    }
    const savedReview = await reviewService.updateReviewComment(req.body);
    return res.status(201).json(savedReview);
  } catch (err) {
    console.log('error in controller : ', err)
    res.status(500).json({ error: err });
  }
};

const getAllComments = async (req: MulterRequest, res: Response) => {
  try {
    const allComments = await reviewService.getAllComments(req.body);
    return res.status(201).json(allComments);
  } catch (err) {
    console.log('error in controller : ', err)
    res.status(500).json({ error: err });
  }
};

export default { createReview, updateReviewComment, getAllComments };