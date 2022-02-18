import classes from "./YoutubeItemTag.module.css";
import { ItemSearch } from "../../../interface/youtubeItemInterface";
import YoutubeImage from "../shared/YoutubeImage/YoutubeImage";
import YoutubeTitle from "../shared/YoutubeTitle/YoutubeTitle";
import YoutubeChanelTitle from "../shared/YoutubeChanelTitle/YoutubeChanelTitle";
import YoutubeStatistics from "../shared/YoutubeStatistics/YoutubeStatistics";
import YoutubeChannelIcon from "../shared/YoutubeChannelIcon/YoutubeChannelIcon";
import { useRouter } from "next/router";
import { KEY } from "../../../api/YoutubeApi/apiYoutube";
import { useYoutube } from "../../../hooks/use-youtube";
import YoutubeLive from "../shared/YoutubeLive/YoutubeLive";
import SkeletonImage from "../Skeletons/SkeletonImage/SkeletonImage";
import SkeletonChannelIcon from "../Skeletons/SkeletonChannelIcon/SkeletonChannelIcon";
import SkeletonTitle from "../Skeletons/SkeletonTitle/SkeletonTitle";
import SkeletonChannelTitle from "../Skeletons/SkeletonChannelTitle/SkeletonChannelTitle";
import SkeletonStatistics from "../Skeletons/SkeletonStatistics/SkeletonStatistics";

const YoutubeItemTag: React.FC<{ item: ItemSearch }> = ({ item }) => {
  const paramsChannel = {
    params: {
      part: "snippet",
      id: item.snippet.channelId,
      key: KEY,
    },
  };

  const {
    data: dataChannel,
    error: errorChannel,
    isLoading: isLoadingChannel,
  } = useYoutube("/channels", paramsChannel, item.snippet.channelId);

  const videoId = item.id.videoId;

  const paramsVideos = {
    params: {
      part: "snippet,statistics,contentDetails",
      id: videoId,
      key: KEY,
    },
  };

  const {
    data: dataStats,
    error: errorStats,
    isLoading: isLoadingStats,
  } = useYoutube("/videos", paramsVideos, videoId);

  console.log(dataStats);

  const thumbnail = dataChannel?.items
    ? dataChannel?.items[0].snippet?.thumbnails?.default?.url
    : "/fallback.PNG";

  const liveBroadcastContent = item.snippet.liveBroadcastContent;

  const isLive = liveBroadcastContent === "live";

  const router = useRouter();

  const goToTheVideoPage = () => {
    router.push(`/watch/${videoId}`);
  };

  const size = "medium";

  const obj = {
    id: videoId,
    cId: item.snippet.channelId,
    image: item.snippet.thumbnails.medium.url,
    duration: dataStats?.items[0].contentDetails.duration,
    title: item.snippet.title,
    cTitle: item.snippet.channelTitle,
  };

  return (
    <>
      {errorChannel && !dataChannel && <p>{errorChannel}</p>}
      {errorStats && !dataStats && <p>{errorStats}</p>}
      {dataStats && dataChannel && !isLoadingStats && !isLoadingChannel ? (
        <div className={classes.container} onClick={goToTheVideoPage}>
          <YoutubeImage
            image={item.snippet.thumbnails.medium.url}
            duration={dataStats.items[0].contentDetails.duration}
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
              <YoutubeTitle size={size} title={item.snippet.title} />
              <YoutubeChanelTitle
                title={item.snippet.channelTitle}
                size={size}
                channelId={item.snippet.channelId}
              />
              <YoutubeStatistics
                views={dataStats.items[0].statistics.viewCount}
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

export default YoutubeItemTag;
