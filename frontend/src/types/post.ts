export interface RedditPost {
  id: string;
  title: string;
  author: string | null;
  score: number;
  numComments: number;
  url: string;
  permalink: string;
  createdUtc: number;
  subreddit: string;
}