import classes from "./YoutubeCommentCount.module.css";
import { KEY } from "../../../../api/YoutubeApi/apiYoutube";
import { useYoutube } from "../../../../hooks/use-youtube";
import { formatCommentCount } from "../../../../helpers/formatComment";

const YoutubeCommentCount: React.FC<{ commentCount: string }> = ({
  commentCount,
}) => {
  return (
    <p className={classes["comment-count"]}>
      {formatCommentCount(commentCount)}
    </p>
  );
};

export default YoutubeCommentCount;
