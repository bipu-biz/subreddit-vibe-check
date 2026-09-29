import axios from "axios";

const REDDIT_LIMIT = 50;

const formatPost = (child: any) => {
  const post = child.data;

  return {
    id: post.id,
    title: post.title,
    author: post.author,
    score: post.score,
    numComments: post.num_comments,
    url: post.url,
    permalink: post.permalink,
    createdUtc: post.created_utc,
    subreddit: post.subreddit,
  };
};

const buildRedditUrl = (subreddit: string) => {
  return `https://www.reddit.com/r/${subreddit}/hot.json`;
};

export const getHotPosts = async (subreddit: string) => {
  const response = await axios.get(buildRedditUrl(subreddit), {
    params: {
      limit: REDDIT_LIMIT,
    },
    headers: {
      "User-Agent": "VibeCheck/1.0",
      Accept: "application/json",
    },
  });

  return response.data.data.children.map(formatPost);
};
