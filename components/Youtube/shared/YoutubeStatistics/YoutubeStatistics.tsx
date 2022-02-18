import classes from "./YoutubeStatistics.module.css";
import {
  formatViews,
  formatPublishedAt,
} from "../../../../helpers/formatStats";

const YoutubeStatistics: React.FC<{
  views: string | undefined;
  publishedAt: string;
  size: string;
}> = ({ views, publishedAt, size }) => {
  const classStats = `${
    size === "small"
      ? classes["statistics-small"]
      : size === "large"
      ? classes["statistics-large"]
      : classes.statistics
  }`;

  return (
    <p className={classStats}>{`${formatViews(views, size)} ${formatPublishedAt(
      publishedAt,
      size
    )}`}</p>
  );
};

export default YoutubeStatistics;
