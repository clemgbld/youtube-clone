import classes from "./YoutubeItemSearch.module.css";
import { useYoutube } from "../../../hooks/use-youtube";
import { KEY } from "../../../api/YoutubeApi/apiYoutube";
import YoutubeImage from "../shared/YoutubeImage/YoutubeImage";
import { useRouter } from "next/router";
import YoutubeTitle from "../shared/YoutubeTitle/YoutubeTitle";
import YoutubeChanelTitle from "../shared/YoutubeChanelTitle/YoutubeChanelTitle";
import YoutubeStatistics from "../shared/YoutubeStatistics/YoutubeStatistics";
import YoutubeLive from "../shared/YoutubeLive/YoutubeLive";
import SkeletonImage from "../Skeletons/SkeletonImage/SkeletonImage";
import SkeletonTitle from "../Skeletons/SkeletonTitle/SkeletonTitle";
import SkeletonChannelTitle from "../Skeletons/SkeletonChannelTitle/SkeletonChannelTitle";
import SkeletonStatistics from "../Skeletons/SkeletonStatistics/SkeletonStatistics";

const YoutubeItemSearch: React.FC<{ item: any; type: string }> = ({
  item,
  type,
}) => {
  const router = useRouter();

  const videoId =
    type === "channel" ? item.snippet.resourceId.videoId : item.id.videoId;

  const classlayout = type === "channel" ? classes.channel : classes.flex;

  const goToVideoPage = () => {
    router.push(`/watch/${videoId}`);
  };

  const size = "small";

  const params = {
    params: {
      part: "snippet,statistics,contentDetails",
      id: videoId,
      key: KEY,
    },
  };

  const { data, error, isLoading } = useYoutube("/videos", params, videoId);

  const views = data?.items[0].statistics.viewCount;
  const publishedAt = data?.items[0].snippet.publishedAt;
  const duration = data?.items[0].contentDetails.duration;
  const image = item.snippet.thumbnails.medium.url;
  const title = data?.items[0].snippet.localized.title;
  const channelId = item.snippet.channelId;
  const liveBroadcastContent = item.snippet.liveBroadcastContent;

  const isLive = liveBroadcastContent === "live";

  const { channelTitle } = item.snippet;

  const obj = {
    id: videoId,
    cId: channelId,
    image: image,
    duration: duration,
    title: title,
    cTitle: channelTitle,
  };

  return (
    <>
      {error && <p>{error}</p>}
      {data && !isLoading ? (
        <div className={classlayout} onClick={goToVideoPage}>
          <YoutubeImage
            image={image}
            size={size}
            duration={duration}
            type={type}
            isLive={isLive}
            obj={obj}
          />
          <div>
            <YoutubeTitle title={title} size={size} />
            <YoutubeChanelTitle
              title={channelTitle}
              size={size}
              channelId={channelId}
            />
            <YoutubeStatistics
              views={views}
              publishedAt={publishedAt}
              size={size}
            />
            {isLive && <YoutubeLive />}
          </div>
        </div>
      ) : (
        <div className={classlayout}>
          <SkeletonImage size={size} type={type} />
          <div>
            <SkeletonTitle size={size} />
            <SkeletonChannelTitle />
            <SkeletonStatistics />
          </div>
        </div>
      )}
    </>
  );
};

export default YoutubeItemSearch;
