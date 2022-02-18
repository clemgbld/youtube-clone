import classes from "./YoutubeItemLarge.module.css";
import YoutubeTagTitles from "../shared/YoutubeTagTitles/YoutubeTagTitles";
import YoutubeTitle from "../shared/YoutubeTitle/YoutubeTitle";
import YoutubeStatistics from "../shared/YoutubeStatistics/YoutubeStatistics";
import { Item } from "../../../interface/youtubeItemInterface";
import YoutubeChannelLarge from "./YoutubeChannelLarge/YoutubeChannelLarge";
import YoutubeLike from "../shared/YoutubeLike/YoutubeLike";
import YoutubeDislike from "../shared/YoutubeDislike/YoutubeDislike";
import YoutubeShare from "./YoutubeShare/YoutubeShare";
import YoutubeWatchLater from "../shared/YoutubeWatchLater/YoutubeWatchLater";

const YoutubeItemLarge: React.FC<{ data: Item }> = ({ data }) => {
  const size = "large";
  const tags = data?.snippet.tags;
  const likeCount = data?.statistics.likeCount;
  const thumbnail = data?.snippet.thumbnails.high.url;
  const duration = data?.contentDetails.duration;
  const title = data?.snippet.localized.title;
  const channelTitle = data?.snippet.channelTitle;
  const videoId = data?.id;
  const channelId = data?.snippet.channelId;

  const obj = {
    id: videoId,
    cId: channelId,
    image: thumbnail,
    duration: duration,
    title: title,
    cTitle: channelTitle,
  };

  return (
    <div className={classes["big-container"]}>
      {tags && <YoutubeTagTitles tags={tags} />}
      {data && <YoutubeTitle size={size} title={title} />}
      <div className={classes.container}>
        <div>
          {data && (
            <YoutubeStatistics
              views={data.statistics?.viewCount}
              publishedAt={data.snippet.publishedAt}
              size={size}
            />
          )}
        </div>
        {data && (
          <div className={classes["flex-child"]}>
            <YoutubeLike likeCount={likeCount} type={size} />
            <YoutubeDislike type={size} />
            <YoutubeShare />
            <YoutubeWatchLater obj={obj} isImage={false} />
          </div>
        )}
      </div>
      <YoutubeChannelLarge channelId={channelId} size={size} />
    </div>
  );
};

export default YoutubeItemLarge;
