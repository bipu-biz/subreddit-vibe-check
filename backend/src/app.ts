import express from "express";
import cors from "cors";

import redditRoute from "./routes/redditRoutes";
import { errorHandler } from "./middleware/errorhandler";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Subreddit Vibe Check API is running",
  });
});

app.use("/api/reddit", redditRoute);

app.use(errorHandler);

export default app;