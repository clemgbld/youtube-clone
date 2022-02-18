import classes from "./YoutubeCommentContent.module.css";
import { formatComment } from "../../../../../helpers/formatComment";

const YoutubeCommentContent: React.FC<{ comment: string }> = ({ comment }) => {
  const CommentArr = formatComment(comment);
  return (
    <div className={classes.comment}>
      {CommentArr.map((line) => (
        <div key={line}>
          <p>{line}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default YoutubeCommentContent;
