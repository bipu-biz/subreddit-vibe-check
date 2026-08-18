import type { AnalyzedPost } from "../types/sentiment";

interface SentimentChartProps {
  posts: AnalyzedPost[];
}

const SentimentChart = ({ posts }: SentimentChartProps) => {
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

  if (total === 0) return null;

  const positiveWidth = (positive / total) * 100;
  const neutralWidth = (neutral / total) * 100;
  const negativeWidth = (negative / total) * 100;

  return (
    <section className="sentiment-chart">
      <div className="chart-header">
        <div>
          <h2>Community Vibe</h2>
          <p>Sentiment across the top {total} hot posts</p>
        </div>
      </div>

      <div className="sentiment-bar">
        {positive > 0 && (
          <div
            className="bar-positive"
            style={{ width: `${positiveWidth}%` }}
          />
        )}

        {neutral > 0 && (
          <div
            className="bar-neutral"
            style={{ width: `${neutralWidth}%` }}
          />
        )}

        {negative > 0 && (
          <div
            className="bar-negative"
            style={{ width: `${negativeWidth}%` }}
          />
        )}
      </div>

      <div className="chart-legend">
        <span>
          <i className="legend-dot positive-dot" />
          Positive {Math.round(positiveWidth)}%
        </span>

        <span>
          <i className="legend-dot neutral-dot" />
          Neutral {Math.round(neutralWidth)}%
        </span>

        <span>
          <i className="legend-dot negative-dot" />
          Negative {Math.round(negativeWidth)}%
        </span>
      </div>
    </section>
  );
};

export default SentimentChart;