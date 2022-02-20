import { useState } from "react";
import { useAuth } from "../../../../store/auth";
import { formatDuration } from "../../../../helpers/formatStats";
import classes from "./YoutubeImage.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Later } from "../../../../interface/laterInterface";
import YoutubeWatchLater from "../YoutubeWatchLater/YoutubeWatchLater";

const YoutubeImage: React.FC<{
  image: string;
  duration: string;
  size: string;
  type: string;
  isLive: boolean;
  obj?: Later;
}> = ({ image, duration, size, type, isLive, obj }) => {
  const classImg = `${
    size === "small" && type !== "channel" && type !== "playlist"
      ? classes["img-small"]
      : type === "channel"
      ? classes["img-channel"]
      : type === "playlist"
      ? classes["img-playlist"]
      : classes.img
  }`;
  const classDuration = `${
    size === "small" && type !== "channel"
      ? classes["duration-small"]
      : type === "search"
      ? classes["duration-search"]
      : type === "channel"
      ? classes["duration-channel"]
      : classes.duration
  }`;

  const { user } = useAuth();

  const [showIcon, setShowIcon] = useState(false);

  const showIconHandler = () => {
    setShowIcon(true);
  };

  const hideIconHandler = () => {
    setShowIcon(false);
  };

  return (
    <div
      onMouseEnter={showIconHandler}
      onMouseLeave={hideIconHandler}
      className={classes.container}
    >
      {obj && user && (
        <YoutubeWatchLater obj={obj} isImage={true} showIcon={showIcon} />
      )}
      <LazyLoadImage
        className={classImg}
        src={image}
        alt="thumbnail of a youtube video"
        effect="blur"
      />

      {!isLive && (
        <span className={classDuration}>{formatDuration(duration)}</span>
      )}
    </div>
  );
};

export default YoutubeImage;
