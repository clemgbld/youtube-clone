import classes from "./YoutubeRepliesItem.module.css";
import { Comment } from "../../../../../interface/youtubeItemInterface";
import YoutubeChannelIcon from "../../../shared/YoutubeChannelIcon/YoutubeChannelIcon";
import YoutubeChanelTitle from "../../../shared/YoutubeChanelTitle/YoutubeChanelTitle";
import YoutubeCommentDate from "../YoutubeCommentDate/YoutubeCommentDate";
import YoutubeCommentContent from "../YoutubeCommentContent/YoutubeCommentContent";
import YoutubeLike from "../../../shared/YoutubeLike/YoutubeLike";
import YoutubeDislike from "../../../shared/YoutubeDislike/YoutubeDislike";

const YoutubeRepliesItem: React.FC<{ item: Comment }> = ({ item }) => {
  const thumbnail = item.snippet.authorProfileImageUrl;
  const channelId = item.snippet.authorChannelId.value;
  const channelTitle = item.snippet.authorDisplayName;
  const likeCount = item.snippet.likeCount;
  const publishedAt = item.snippet.publishedAt;
  const comment = item.snippet.textOriginal;

  const type = "comment";

  return (
    <div className={classes.flex}>
      <YoutubeChannelIcon
        thumbnail={thumbnail}
        channelId={channelId}
        size={"small"}
      />
      <div>
        <div className={classes["flex-small"]}>
          <YoutubeChanelTitle
            channelId={channelId}
            title={channelTitle}
            size={"comment"}
          />
          <YoutubeCommentDate publishedAt={publishedAt} />
        </div>
        <YoutubeCommentContent comment={comment} />
        <div className={classes["flex-like"]}>
          <YoutubeLike likeCount={likeCount} type={type} />
          <YoutubeDislike type={type} />
        </div>
      </div>
    </div>
  );
};

export default YoutubeRepliesItem;
