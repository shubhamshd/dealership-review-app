// src/app.ts
import express, { Express, Request, Response } from 'express';
import reviewRoutes from './routes/reviewRoutes';

const app: Express = express();
const port: number = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.post('/reviews', reviewRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
