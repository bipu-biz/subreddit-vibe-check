import Sentiment from "sentiment";
import type { RedditPost } from "../types/post";
import type { AnalyzedPost, SentimentLabel } from "../types/sentiment";

const sentiment = new Sentiment();

export const analyzePosts = (posts: RedditPost[]): AnalyzedPost[] => {
  return posts.map((post) => {
    const result = sentiment.analyze(post.title);

    let label: SentimentLabel;

    if (result.score > 0) {
      label = "positive";
    } else if (result.score < 0) {
      label = "negative";
    } else {
      label = "neutral";
    }

    return {
      ...post,
      sentiment: label,
      sentimentScore: result.score,
    };
  });
};