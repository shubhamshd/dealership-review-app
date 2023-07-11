import { Schema, model } from 'mongoose';
import IReview from '../interfaces/IReview';

const ReviewSchema = new Schema({
  dealershipName: { type: String, required: true },
  productDetails: [
    {
      make: { type: String, required: true },
      model: { type: String, required: true },
      variant: { type: String, required: true },
    },
  ],
  rating: { type: Number, required: true },
  comments: [
    {
      text: { type: String, required: true },
      date: { type: Date, default: Date.now },
      user: { type: String, required: true },
    },
  ],
  media: [
    {
      url: { type: String, required: true },
      type: { type: String, required: true },
    },
  ],
});

const ReviewModel = model<IReview>('Review', ReviewSchema);

export default ReviewModel;
