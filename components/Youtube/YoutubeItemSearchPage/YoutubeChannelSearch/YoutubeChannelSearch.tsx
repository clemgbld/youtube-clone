import classes from "./YoutubeChannelSearch.module.css";
import { KEY } from "../../../../api/YoutubeApi/apiYoutube";
import { useYoutube } from "../../../../hooks/use-youtube";
import YoutubeChanelTitle from "../../shared/YoutubeChanelTitle/YoutubeChanelTitle";
import YoutubeChannelIcon from "../../shared/YoutubeChannelIcon/YoutubeChannelIcon";

const YoutubeChannelSearch: React.FC<{
  channelId: string;
  channelTitle: string;
}> = ({ channelId, channelTitle }) => {
  const params = {
    params: {
      part: "snippet",
      id: channelId,
      key: KEY,
      videoSyndicated: true,
    },
  };

  const { data, error } = useYoutube("/channels", params, channelId);

  const thumbnail = data?.items
    ? data?.items[0].snippet?.thumbnails?.default?.url
    : "/fallback.PNG";

  return (
    <>
      {error && !data && <p>{error}</p>}
      {data && (
        <div className={classes.flex}>
          {thumbnail && (
            <YoutubeChannelIcon
              thumbnail={thumbnail}
              size="small"
              channelId={channelId}
            />
          )}
          <YoutubeChanelTitle
            title={channelTitle}
            size="small"
            channelId={channelId}
          />
        </div>
      )}
    </>
  );
};

export default YoutubeChannelSearch;
