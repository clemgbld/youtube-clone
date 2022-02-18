import classes from "./YoutubeSubscribers.module.css";
import { formatSubscribers } from "../../../../helpers/formatStats";

const YoutubeSubscribers: React.FC<{ subscribers: string }> = ({
  subscribers,
}) => {
  return (
    <p className={classes.subscribers}>{formatSubscribers(subscribers)}</p>
  );
};

export default YoutubeSubscribers;
