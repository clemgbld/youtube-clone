import classes from "./YoutubeDislike.module.css";
import { BiDislike } from "react-icons/bi";

const YoutubeDislike: React.FC<{ type: string }> = ({ type }) => {
  const classIcon = type === "comment" ? classes["icon-comment"] : classes.icon;
  const classCount =
    type === "comment" ? classes["count-comment"] : classes.count;

  return (
    <div className={classes.flex}>
      <BiDislike className={classIcon} />
      <p className={classCount}>DISLIKE</p>
    </div>
  );
};
export default YoutubeDislike;
