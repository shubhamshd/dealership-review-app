import { Schema, model, SchemaTypes } from 'mongoose';
import IReview from '../interfaces/IReview';


const mediaSchema = new Schema({
  type: {
    type: String,
    enum: ['image', 'video', 'external'],
    required: true,
  },
  imageData: Buffer,
  mediaId: { 
    type: SchemaTypes.ObjectId, 
    ref: 'Media',
  },
  url: String,
});

const commentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  media: [mediaSchema],
});

const reviewSchema = new Schema({
  dealershipName: {
    type: String,
    required: true,
  },
  productDetails: {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      required: true,
    },
  },
  user: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comments: [commentSchema],
});

const ReviewModel = model<IReview>('Review', reviewSchema, 'reviews');

export default ReviewModel;
