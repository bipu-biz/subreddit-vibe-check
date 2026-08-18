import { Request, Response, NextFunction } from "express";
import { getHotPosts } from "../services/redditService";

export const fetchHotPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { subreddit } = req.params;

    if (!subreddit) {
      return res.status(400).json({
        message: "Subreddit is required",
      });
    }

    const data = await getHotPosts(subreddit as string);

    return res.status(200).json({
      subreddit,
      posts: data,
    });
  } catch (error) {
    next(error);
  }
};