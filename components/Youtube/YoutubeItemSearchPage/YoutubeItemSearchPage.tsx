import classes from "./YoutubeItemSearchPage.module.css";
import { ItemSearch } from "../../../interface/youtubeItemInterface";
import YoutubeImage from "../shared/YoutubeImage/YoutubeImage";
import { useYoutube } from "../../../hooks/use-youtube";
import { KEY } from "../../../api/YoutubeApi/apiYoutube";
import YoutubeTitle from "../shared/YoutubeTitle/YoutubeTitle";
import YoutubeStatistics from "../shared/YoutubeStatistics/YoutubeStatistics";
import YoutubeChannelSearch from "./YoutubeChannelSearch/YoutubeChannelSearch";
import { useRouter } from "next/router";
import YoutubeDescriptionSearch from "./YoutubeDescriptionSearch/YoutubeDescriptionSearch";
import YoutubeLive from "../shared/YoutubeLive/YoutubeLive";
import SkeletonImage from "../Skeletons/SkeletonImage/SkeletonImage";
import SkeletonTitle from "../Skeletons/SkeletonTitle/SkeletonTitle";
import SkeletonStatistics from "../Skeletons/SkeletonStatistics/SkeletonStatistics";
import SkeletonChannelIcon from "../Skeletons/SkeletonChannelIcon/SkeletonChannelIcon";
import SkeletonChannelTitle from "../Skeletons/SkeletonChannelTitle/SkeletonChannelTitle";
import SkeletonDescription from "../Skeletons/SkeletonDescription/SkeletonDescription";

const YoutubeItemSearchPage: React.FC<{ item: ItemSearch }> = ({ item }) => {
  const router = useRouter();
  const { videoId } = item.id;

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
  const description = item.snippet.description;

  const liveBroadcastContent = item.snippet.liveBroadcastContent;

  const isLive = liveBroadcastContent === "live";

  const { channelTitle } = item.snippet;
  const channelId = data?.items[0].snippet.channelId;

  const goToWacthScreen = () => {
    router.push(`/watch/${videoId}`);
  };

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
      {error && !data && <p>{error}</p>}
      {data && !isLoading ? (
        <div onClick={goToWacthScreen} className={classes.flex}>
          <YoutubeImage
            image={image}
            duration={duration}
            size={"medium"}
            type={"search"}
            isLive={isLive}
            obj={obj}
          />
          <div>
            <YoutubeTitle title={title} size={"search"} />
            <YoutubeStatistics
              views={views}
              publishedAt={publishedAt}
              size={"small"}
            />
            <YoutubeChannelSearch
              channelId={channelId}
              channelTitle={channelTitle}
            />
            <YoutubeDescriptionSearch description={description} />
            {isLive && <YoutubeLive />}
          </div>
        </div>
      ) : (
        <div className={classes.flex}>
          <SkeletonImage size="medium" type="search" />
          <div>
            <SkeletonTitle size="search" />
            <SkeletonStatistics />
            <div className={classes["flex-channel"]}>
              <SkeletonChannelIcon size="small" />
              <SkeletonChannelTitle />
            </div>

            <SkeletonDescription />
          </div>
        </div>
      )}
    </>
  );
};

export default YoutubeItemSearchPage;
