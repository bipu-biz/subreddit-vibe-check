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

export interface RedditListing {
  data: {
    children: Array<{
      kind: string;
      data: {
        id: string;
        title: string;
        author: string | null;
        score: number;
        num_comments: number;
        url: string;
        permalink: string;
        created_utc: number;
        subreddit: string;
      };
    }>;
  };
}