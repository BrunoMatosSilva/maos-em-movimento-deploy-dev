import "express-async-errors";
import rateLimit from 'express-rate-limit'
import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { routes } from './app/routes';
import { AppError } from "./errors/appError";

dotenv.config();
const app = express();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	message: "Too many requests, please try again later."
})

app.use(limiter);

app.use(cors({
  origin: true,
}));
app.use(express.json());


const PORT = process.env.PORT;

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError){
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  })
})

app.listen(PORT, () => {
  console.log(
  `🚀 Express server listening on http://localhost:${PORT}`);
});
