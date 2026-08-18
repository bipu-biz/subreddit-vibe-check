import { Router } from "express";
import { fetchHotPosts } from "../controller/redditcontroller";

const router = Router();

router.get("/:subreddit/hot", fetchHotPosts);

export default router;