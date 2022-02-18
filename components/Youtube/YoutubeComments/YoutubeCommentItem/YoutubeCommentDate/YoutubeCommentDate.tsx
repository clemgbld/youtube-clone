import classes from "./YoutubeCommentDate.module.css";
import { formatPublishedAt } from "../../../../../helpers/formatStats";

const YoutubeCommentDate: React.FC<{ publishedAt: string }> = ({
  publishedAt,
}) => {
  const size = "medium";

  return <p className={classes.date}>{formatPublishedAt(publishedAt, size)}</p>;
};
export default YoutubeCommentDate;
