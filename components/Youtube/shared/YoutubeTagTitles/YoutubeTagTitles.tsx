import { formatTags } from "../../../../helpers/formatTags";
import classes from "./YoutubeTagTitles.module.css";

const YoutubeTagTitles: React.FC<{ tags: string[] }> = ({ tags }) => {
  return <p className={classes.tags}>{formatTags(tags)}</p>;
};

export default YoutubeTagTitles;
