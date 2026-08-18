import axios from "axios";

export const getHotPosts = async (subreddit: string) => {
  const response = await axios.get(
    `https://www.reddit.com/r/${subreddit}/hot.json`,
    {
      params: {
        limit: 50,
      },
      headers: {
        "User-Agent": "VibeCheck/1.0",
        Accept: "application/json",
      },
    }
  );

  return response.data.data.children.map((child: any) => {
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
  });
};