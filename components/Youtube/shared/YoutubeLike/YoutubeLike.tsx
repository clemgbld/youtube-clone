import classes from "./YoutubeLike.module.css";
import { BiLike } from "react-icons/bi";
import { formatLike } from "../../../../helpers/formatLike";

const YoutubeLike: React.FC<{ likeCount: string; type: string }> = ({
  likeCount,
  type,
}) => {
  const classIcon = type === "comment" ? classes["icon-comment"] : classes.icon;
  const classCount =
    type === "comment" ? classes["count-comment"] : classes.count;

  return (
    <div className={classes.flex}>
      <BiLike className={classIcon} />
      <p className={classCount}>{formatLike(likeCount, type)}</p>
    </div>
  );
};
export default YoutubeLike;
