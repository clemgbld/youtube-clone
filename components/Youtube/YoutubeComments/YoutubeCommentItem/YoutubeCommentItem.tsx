import { useState } from "react";
import classes from "./YoutubeCommentItem.module.css";
import {
  ItemComment,
  Comment,
} from "../../../../interface/youtubeItemInterface";
import YoutubeChannelIcon from "../../shared/YoutubeChannelIcon/YoutubeChannelIcon";
import YoutubeChanelTitle from "../../shared/YoutubeChanelTitle/YoutubeChanelTitle";
import YoutubeCommentDate from "./YoutubeCommentDate/YoutubeCommentDate";
import YoutubeCommentContent from "./YoutubeCommentContent/YoutubeCommentContent";
import YoutubeLike from "../../shared/YoutubeLike/YoutubeLike";
import YoutubeDislike from "../../shared/YoutubeDislike/YoutubeDislike";
import YoutubeRepliesItem from "./YoutubeRepliesItem/YoutubeRepliesItem";
import {
  formatCommentButtonHidden,
  formatCommentButtonShow,
} from "../../../../helpers/formatCommentButton";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const YoutubeCommentItem: React.FC<{ item: ItemComment }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const thumbnail = item.snippet.topLevelComment.snippet.authorProfileImageUrl;
  const channelId = item.snippet.topLevelComment.snippet.authorChannelId.value;
  const channelTitle = item.snippet.topLevelComment.snippet.authorDisplayName;
  const likeCount = item.snippet.topLevelComment.snippet.likeCount;
  const publishedAt = item.snippet.topLevelComment.snippet.publishedAt;
  const comment = item.snippet.topLevelComment.snippet.textOriginal;
  const replies = item.replies?.comments;

  console.log(replies);

  const type = "comment";

  const toggleBtnHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={classes.flex}>
      <YoutubeChannelIcon
        thumbnail={thumbnail}
        channelId={channelId}
        size={"large"}
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
        {replies && (
          <button className={classes.btn} onClick={toggleBtnHandler}>
            {isOpen ? (
              <div className={classes["flex-btn"]}>
                <GoTriangleUp />
                <p>{formatCommentButtonShow(replies.length)}</p>
              </div>
            ) : (
              <div className={classes["flex-btn"]}>
                <GoTriangleDown />
                <p>{formatCommentButtonHidden(replies.length)}</p>
              </div>
            )}
          </button>
        )}
        {isOpen &&
          replies &&
          replies.map((item: Comment) => (
            <YoutubeRepliesItem item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default YoutubeCommentItem;
