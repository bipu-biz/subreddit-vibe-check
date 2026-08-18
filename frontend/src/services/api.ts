import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getHotPosts = async (subreddit: string) => {
  const response = await api.get(`/reddit/${subreddit}/hot`);

  return response.data;
};