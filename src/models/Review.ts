import { Schema, model } from 'mongoose';
import IReview from '../interfaces/IReview';

const ReviewSchema = new Schema({
  dealershipName: { type: String, required: true },
  productDetails: {
    type: {
      make: { type: String, required: true },
      model: { type: String, required: true },
      variant: { type: String, required: true },
    },
    required: true,
  },
  rating: { type: Number, required: true },
  comments: [
    {
      text: { type: String, required: true },
      date: { type: Date, default: Date.now },
      user: { type: String, required: true },
      media: [
        {
          type: {
            type: String,
            enum: ['image', 'video', 'external'],
            required: true,
          },
          imageData: {
            type: Buffer,
          },
          mediaId: {
            type: String,
          },
          url: {
            type: String,
          },
          required: false,
        }
      ],
    },
  ],
});

const ReviewModel = model<IReview>('Review', ReviewSchema, 'reviews');

export default ReviewModel;
