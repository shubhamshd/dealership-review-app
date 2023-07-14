import { Document, ObjectId } from 'mongoose';

interface IReview extends Document {
  dealershipName: string;
  productDetails: {
    make: string;
    model: string;
    variant: string;
  };
  rating: number;
  comments: {
    text: string;
    timestamp: Date;
    user: string;
    media?: Array<{
      type: 'image' | 'video' | 'external';
      imageData?: Buffer;
      mediaId?: ObjectId;
      url?: string;
    }>;
  }[];
}

export default IReview;
