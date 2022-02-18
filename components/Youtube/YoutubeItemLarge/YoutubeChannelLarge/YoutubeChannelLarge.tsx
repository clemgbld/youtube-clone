import classes from "./YoutubeChannelLarge.module.css";
import YoutubeChannelIcon from "../../shared/YoutubeChannelIcon/YoutubeChannelIcon";
import { useYoutube } from "../../../../hooks/use-youtube";
import { KEY } from "../../../../api/YoutubeApi/apiYoutube";
import YoutubeChanelTitle from "../../shared/YoutubeChanelTitle/YoutubeChanelTitle";
import YoutubeSubscribers from "../../shared/YoutubeSubscribers/YoutubeSubscribers";
import YoutubeDescription from "./YoutubeDescription/YoutubeDescription";

const YoutubeChannelLarge: React.FC<{ channelId: string; size: string }> = ({
  channelId,
  size,
}) => {
  const params = {
    params: {
      part: "snippet,statistics",
      id: channelId,
      key: KEY,
    },
  };

  const { data, error } = useYoutube("/channels", params, channelId);

  const thumbnail = data?.items
    ? data?.items[0].snippet?.thumbnails?.default?.url
    : "/fallback.PNG";
  const title = data?.items[0].snippet.title;
  const description = data?.items[0].snippet.description;
  const subscribers = data?.items[0].statistics.subscriberCount;

  const renderData = () => {
    return (
      <>
        {data && (
          <>
            <YoutubeChannelIcon
              thumbnail={thumbnail}
              size={size}
              channelId={channelId}
            />
            <div>
              <YoutubeChanelTitle
                title={title}
                size={size}
                channelId={channelId}
              />
              <YoutubeSubscribers subscribers={subscribers} />
              <YoutubeDescription description={description} />
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <div className={classes.flex}>{!error ? renderData() : <p>{error}</p>}</div>
  );
};

export default YoutubeChannelLarge;
