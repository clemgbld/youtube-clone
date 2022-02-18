import classes from "./YoutubeChannelBanner.module.css";
import YoutubeChanelTitle from "../shared/YoutubeChanelTitle/YoutubeChanelTitle";
import YoutubeSubscribers from "../shared/YoutubeSubscribers/YoutubeSubscribers";
import YoutubeChannelIcon from "../shared/YoutubeChannelIcon/YoutubeChannelIcon";

const YoutubeChannelBanner: React.FC<{
  channelId: string | string[] | undefined;
  thumbnail: string;
  title: string;
  subscribers: string;
}> = ({ thumbnail, title, subscribers, channelId }) => {
  return (
    <div className={classes.container}>
      <YoutubeChannelIcon
        thumbnail={thumbnail}
        size={"extra-large"}
        channelId={channelId}
      />
      <div>
        <YoutubeChanelTitle
          title={title}
          size={"extra-large"}
          channelId={channelId}
        />
        <YoutubeSubscribers subscribers={subscribers} />
      </div>
    </div>
  );
};

export default YoutubeChannelBanner;
