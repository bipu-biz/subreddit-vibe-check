import type { AnalyzedPost } from "../types/sentiment";

interface SummaryProps {
  posts: AnalyzedPost[];
}

const Summary = ({ posts }: SummaryProps) => {
  const positive = posts.filter(
    (post) => post.sentiment === "positive"
  ).length;

  const neutral = posts.filter(
    (post) => post.sentiment === "neutral"
  ).length;

  const negative = posts.filter(
    (post) => post.sentiment === "negative"
  ).length;

  const total = posts.length;

  const percentage = (value: number) =>
    total === 0 ? 0 : Math.round((value / total) * 100);

  return (
    <section className="summary">
      <div className="summary-card">
        <span>Total Posts</span>
        <strong>{total}</strong>
      </div>

      <div className="summary-card">
        <span>Positive</span>
        <strong>
          {positive} <small>({percentage(positive)}%)</small>
        </strong>
      </div>

      <div className="summary-card">
        <span>Neutral</span>
        <strong>
          {neutral} <small>({percentage(neutral)}%)</small>
        </strong>
      </div>

      <div className="summary-card">
        <span>Negative</span>
        <strong>
          {negative} <small>({percentage(negative)}%)</small>
        </strong>
      </div>
    </section>
  );
};

export default Summary;