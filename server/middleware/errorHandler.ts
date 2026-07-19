import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error("🔥 Error caught by global error middleware:", err);

  const status = err.status || err.statusCode || 500;
  const message = err.message || "An unexpected error occurred on the server.";

  res.status(status).json({
    success: false,
    error: message,
  });
}
