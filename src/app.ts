// src/app.ts
import express, { Express, Request, Response } from 'express';
import reviewRoutes from './routes/reviewRoutes';
import connectDB from './utils/connectDB';

const app: Express = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.use('/reviews', reviewRoutes);

// Establish the MongoDB connection
connectDB();

// Start the server
app.listen(5000, () => {
  console.log('Server is running...');
});

export default app;
