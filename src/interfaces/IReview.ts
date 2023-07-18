import { Document, ObjectId } from 'mongoose';

interface IReview extends Document {
  dealershipName: string;
  productDetails: {
    make: string;
    model: string;
    variant: string;
  };
  user: string;
  rating: number;
  comments: {
    text: string;
    timestamp: Date;
    media?: Array<{
      type: 'image' | 'video' | 'external';
      imageData?: Buffer;
      mediaId?: ObjectId;
      url?: string;
    }>;
  }[];
}

export default IReview;
