import { useState } from "react";
import { getHotPosts } from "./services/api";
import { analyzePosts } from "./services/sentiment";
import type { AnalyzedPost } from "./types/sentiment";

import Summary from "./components/summary";
import PostCard from "./components/postcard";
import SentimentChart from "./components/sentimentchart";

function App() {
  const [subreddit, setSubreddit] = useState("");
  const [posts, setPosts] = useState<AnalyzedPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const name = subreddit.trim().replace(/^r\//, "");

    if (!name) {
      setError("Please enter a subreddit.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getHotPosts(name);
      const analyzedPosts = analyzePosts(data.posts);

      setPosts(analyzedPosts);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to fetch posts. Please check the subreddit name and try again."
      );

      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app">
      <div className="container">
        <header className="hero">
          <span className="badge">COMMUNITY SENTIMENT</span>

          <h1>The Subreddit Vibe Check</h1>

          <p>
            Discover the mood of a community through its hottest posts.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Enter subreddit e.g. programming"
              value={subreddit}
              onChange={(e) => setSubreddit(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <button onClick={handleSearch} disabled={loading}>
              {loading ? "Analyzing..." : "Check Vibe"}
            </button>
          </div>
        </header>

        {error && <div className="error">{error}</div>}

        {posts.length > 0 && (
          <>
            <Summary posts={posts} />

            <SentimentChart posts={posts} />

            <section>
              <div className="posts-header">
                <h2>
                  Hot posts from r/{subreddit.replace(/^r\//, "")}
                </h2>

                <span className="post-meta">
                  {posts.length} posts
                </span>
              </div>

              <div className="post-list">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

export default App;