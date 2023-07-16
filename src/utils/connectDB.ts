// src/utils/connectDB.ts
import mongoose, { ConnectOptions } from 'mongoose';
import { configDotenv } from 'dotenv';

configDotenv();
const connectionURL = process.env.MONGO_URL || 'default-mongo-url'; // Replace with your MongoDB URL

const connectDB = async () => {
  try {
    await mongoose.connect(connectionURL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

export default connectDB;
