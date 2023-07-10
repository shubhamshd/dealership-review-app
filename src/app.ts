// src/app.ts
import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Dealership Review Website API!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
