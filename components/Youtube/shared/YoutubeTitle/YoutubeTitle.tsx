import classes from "./YoutubeTitle.module.css";
import { transfromTitle } from "../../../../helpers/transformTitle";

const YoutubeTitle: React.FC<{ title: string; size: string }> = ({
  title,
  size,
}) => {
  const transformedTitle = transfromTitle(title, size);
  const display = ["playlist", "large"].includes(size)
    ? title
    : transformedTitle;
  const classTitle = `${
    size === "large"
      ? classes["title-large"]
      : size === "small"
      ? classes["title-small"]
      : size === "search"
      ? classes["title-search"]
      : size === "playlist"
      ? classes["title-playlist"]
      : classes.title
  }`;

  return <h3 className={classTitle}>{display}</h3>;
};

export default YoutubeTitle;
