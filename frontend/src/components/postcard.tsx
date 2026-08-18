import type { AnalyzedPost } from "../types/sentiment";

interface PostCardProps {
  post: AnalyzedPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>

      <p className="post-meta">
        u/{post.author ?? "deleted"} · {post.score} points ·{" "}
        {post.numComments} comments
      </p>

      <div className="post-bottom">
        <span className={`sentiment sentiment-${post.sentiment}`}>
          {post.sentiment}
        </span>

        <a
          className="view-post"
          href={`https://www.reddit.com${post.permalink}`}
          target="_blank"
          rel="noreferrer"
        >
          View post ↗
        </a>
      </div>
    </article>
  );
};

export default PostCard;