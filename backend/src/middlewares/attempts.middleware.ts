import rateLimit from "express-rate-limit";

export const ApiRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // 5 requests
  message: "Too many attempts, please try again later.",
});