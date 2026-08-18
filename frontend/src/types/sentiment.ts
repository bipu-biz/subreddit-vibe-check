import type { RedditPost } from "./post";

export type SentimentLabel = "positive" | "neutral" | "negative";

export interface AnalyzedPost extends RedditPost {
  sentiment: SentimentLabel;
  sentimentScore: number;
}