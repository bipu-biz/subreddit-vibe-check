import axios from "axios";

export const getHotPosts = async (subreddit: string) => {
  const response = await axios.get(
    `https://www.reddit.com/r/${subreddit}/hot.json`,
    {
      params: {
        limit: 50,
      },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
        "Accept": "application/json",
      },
    }
  );

  console.log("Reddit response:", response.data);

  return response.data;
};