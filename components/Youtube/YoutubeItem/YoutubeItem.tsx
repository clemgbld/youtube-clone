import classes from "./YoutubeItem.module.css";
import { Item } from "../../../interface/youtubeItemInterface";
import YoutubeImage from "../shared/YoutubeImage/YoutubeImage";
import YoutubeTitle from "../shared/YoutubeTitle/YoutubeTitle";
import YoutubeChanelTitle from "../shared/YoutubeChanelTitle/YoutubeChanelTitle";
import YoutubeStatistics from "../shared/YoutubeStatistics/YoutubeStatistics";
import YoutubeChannelIcon from "../shared/YoutubeChannelIcon/YoutubeChannelIcon";
import YoutubeLive from "../shared/YoutubeLive/YoutubeLive";
import { useRouter } from "next/router";
import { KEY } from "../../../api/YoutubeApi/apiYoutube";
import { useYoutube } from "../../../hooks/use-youtube";
import SkeletonImage from "../Skeletons/SkeletonImage/SkeletonImage";
import SkeletonChannelIcon from "../Skeletons/SkeletonChannelIcon/SkeletonChannelIcon";
import SkeletonTitle from "../Skeletons/SkeletonTitle/SkeletonTitle";
import SkeletonChannelTitle from "../Skeletons/SkeletonChannelTitle/SkeletonChannelTitle";
import SkeletonStatistics from "../Skeletons/SkeletonStatistics/SkeletonStatistics";

const YoutubeItem: React.FC<{ item: Item }> = ({ item }) => {
  const params = {
    params: {
      part: "snippet",
      id: item.snippet.channelId,
      key: KEY,
    },
  };

  const { data, error, isLoading } = useYoutube(
    "/channels",
    params,
    item.snippet.channelId
  );

  const thumbnail = data?.items
    ? data?.items[0].snippet?.thumbnails?.default?.url
    : "/fallback.PNG";

  const liveBroadcastContent = item.snippet.liveBroadcastContent;

  const isLive = liveBroadcastContent === "live";

  const router = useRouter();

  const goToTheVideoPage = () => {
    router.push(`/watch/${item.id}`);
  };

  const size = "medium";

  const obj = {
    id: item.id,
    cId: item.snippet.channelId,
    image: item.snippet.thumbnails.medium.url,
    duration: item.contentDetails.duration,
    title: item.snippet.localized.title,
    cTitle: item.snippet.channelTitle,
  };

  return (
    <>
      {error && !data && <p>{error}</p>}
      {data && !isLoading ? (
        <div className={classes.container} onClick={goToTheVideoPage}>
          <YoutubeImage
            image={item.snippet.thumbnails.medium.url}
            duration={item.contentDetails.duration}
            size={size}
            type={"home"}
            isLive={isLive}
            obj={obj}
            
          />
          <div className={classes.flex}>
            <YoutubeChannelIcon
              thumbnail={thumbnail}
              size={size}
              channelId={item.snippet.channelId}
            />

            <div>
              <YoutubeTitle size={size} title={item.snippet.localized.title} />
              <YoutubeChanelTitle
                title={item.snippet.channelTitle}
                size={size}
                channelId={item.snippet.channelId}
              />
              <YoutubeStatistics
                views={item.statistics.viewCount}
                publishedAt={item.snippet.publishedAt}
                size={size}
              />
              {isLive && <YoutubeLive />}
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.container}>
          <SkeletonImage size={size} type={"home"} />
          <div className={classes.flex}>
            <SkeletonChannelIcon size={size} />
            <div>
              <SkeletonTitle size={size} />
              <SkeletonChannelTitle />
              <SkeletonStatistics />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default YoutubeItem;
