import IReview from '../interfaces/IReview';
import ReviewModel from '../models/Review';

const createReview = async (reviewData: IReview): Promise<IReview> => {
  try {
    const newReview = new ReviewModel(reviewData);
    const savedReview = await newReview.save();
    return savedReview;
  } catch (err) {
    console.log('Error creating review:');
    throw new Error('Failed to create review');
  }
};

export default { createReview };
