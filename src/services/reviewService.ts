import IReview from '../interfaces/IReview';
import ReviewModel from '../models/reviewModel';

const createReview = async (reviewData: IReview): Promise<IReview> => {
  try {
    const newReview = new ReviewModel(reviewData);
    const savedReview = await newReview.save();
    return savedReview;
  } catch (err) {
    console.log('Error creating review:', err);
    throw new Error('Failed to create review');
  }
};

const updateReviewComment = async (reviewData: IReview): Promise<IReview | null> => {
  try {
    const filter = {
      'dealershipName': reviewData.dealershipName,
      'productDetails.make': reviewData.productDetails.make,
      'productDetails.model': reviewData.productDetails.model,
      'productDetails.variant': reviewData.productDetails.variant,
      'user': reviewData.user
    };

    const update = {
      $push: { comments: reviewData.comments },
    };

    const updatedReview = await ReviewModel.findOneAndUpdate(filter, update, { new: true });
    return updatedReview;
  } catch (err) {
    console.log('Error updating review comment:', err);
    throw new Error('Failed to update review comment');
  }
};

const getAllComments = async (reviewData: IReview): Promise<IReview | null> => {
  try {

    const filter = {
      'dealershipName': reviewData.dealershipName,
      'productDetails.make': reviewData.productDetails.make,
      'productDetails.model': reviewData.productDetails.model,
      'productDetails.variant': reviewData.productDetails.variant,
    };
    const review = await ReviewModel.findOne(filter);
    return review;
  } catch (err) {
    console.log('Error fetching review:', err);
    throw new Error('Failed to fetch review');
  }
};

export default { createReview, updateReviewComment, getAllComments };
