import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("ERROR:", error);

  const status = error.response?.status || 500;

  res.status(status).json({
    message: error.message || "Internal server error",
    status,
    redditResponse: error.response?.data || null,
  });
};