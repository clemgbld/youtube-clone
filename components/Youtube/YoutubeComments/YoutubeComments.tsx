import { useState, useEffect } from "react";
import classes from "./YoutubeComments.module.css";
import { useYoutube } from "../../../hooks/use-youtube";
import { KEY } from "../../../api/YoutubeApi/apiYoutube";
import YoutubeCommentItem from "./YoutubeCommentItem/YoutubeCommentItem";
import { ItemComment } from "../../../interface/youtubeItemInterface";
import YoutubeCommentCount from "./YoutubeCommentsCount/YoutubeCommentCount";
import { loadMoreYoutubePages } from "../../../api/YoutubeApi/loadMoreYoutubePages";
import SpinnerBig from "../../UI/Spinner/SpinnerBig/SpinnerBig";

const YoutubeComments: React.FC<{
  videoId: string | string[] | undefined;
  commentCount: string;
}> = ({ videoId, commentCount }) => {
  const [items, setItems] = useState<ItemComment[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const params = {
    params: {
      part: "snippet,replies,id",
      videoId: videoId,
      key: KEY,
      pageToken: "",
      order: "relevance",
    },
  };

  const { data, error } = useYoutube("/commentThreads", params, videoId);

  useEffect(() => {
    setNextPageToken(data?.nextPageToken);

    if (videoId) {
      setItems(data?.items);
    }
  }, [data, videoId]);

  const paramsNext = {
    params: {
      part: "snippet,replies,id",
      videoId: videoId,
      pageToken: nextPageToken,
      order: "relevance",
      key: KEY,
    },
  };

  const totalResults = +commentCount;
  const isStillVideosToLoad = items?.length !== totalResults;

  const nextPageHandler = () => {
    if (isStillVideosToLoad) {
      setIsLoading(true);
      loadMoreYoutubePages(
        paramsNext,
        "/commentThreads",
        setItems,
        setNextPageToken
      );
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && !data && <p>{error}</p>}
      <YoutubeCommentCount commentCount={commentCount} />
      {data &&
        items?.length > 0 &&
        items.map((item: ItemComment) => (
          <YoutubeCommentItem item={item} key={item.id} />
        ))}
      {isLoading && (
        <div className={classes["spinner-container"]}>
          <SpinnerBig />
        </div>
      )}
      {isStillVideosToLoad && (
        <button onClick={nextPageHandler} className={classes.btn}>
          LOAD MORE COMMENTS
        </button>
      )}
    </div>
  );
};

export default YoutubeComments;
