import classes from "./YoutubeDescriptionSearch.module.css";
import { sumarizeDescription } from "../../../../helpers/formatDescription";

const YoutubeDescriptionSearch: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <p className={classes.description}>{sumarizeDescription(description)}</p>
  );
};

export default YoutubeDescriptionSearch;
