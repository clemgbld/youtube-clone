import { useState, useEffect } from "react";
import classes from "./YoutubeChannelVideos.module.css";
import { KEY } from "../../../api/YoutubeApi/apiYoutube";
import { useYoutube } from "../../../hooks/use-youtube";
import YoutubeItemSearch from "../YoutubeItemSearch/YoutubeItemSearch";
import { ItemSearch } from "../../../interface/youtubeItemInterface";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../UI/Spinner/Spinner";
import { loadMoreYoutubePages } from "../../../api/YoutubeApi/loadMoreYoutubePages";

const YoutubeChannelVideos: React.FC<{
  playlistId: string;
}> = ({ playlistId }) => {
  const [items, setItems] = useState<ItemSearch[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string>("");

  const params = {
    params: {
      part: "snippet,contentDetails",
      playlistId: playlistId,
      pageToken: "",
      maxResults: 30,
      key: KEY,
    },
  };

  const { data } = useYoutube("/playlistItems", params, playlistId);

  useEffect(() => {
    setNextPageToken(data?.nextPageToken);

    if (playlistId) {
      setItems(data?.items);
    }
  }, [data, playlistId]);

  const paramsNext = {
    params: {
      part: "snippet,contentDetails",
      playlistId: playlistId,
      pageToken: nextPageToken,
      maxResults: 30,
      key: KEY,
    },
  };

  const totalResults = data?.pageInfo.totalResults;
  const isStillVideosToLoad = items?.length !== totalResults;

  const nextPageHandler = () => {
    if (isStillVideosToLoad) {
      loadMoreYoutubePages(
        paramsNext,
        "/playlistItems",
        setItems,
        setNextPageToken
      );
    }
  };

  return (
    <>
      {items && items.length > 0 ? (
        <InfiniteScroll
          className={classes.grid}
          dataLength={items.length}
          next={nextPageHandler}
          hasMore={true}
          loader={isStillVideosToLoad ? <Spinner /> : <div></div>}
        >
          {items.map((item: any) => (
            <YoutubeItemSearch key={item.id} item={item} type={"channel"} />
          ))}
        </InfiniteScroll>
      ) : (
        <div className={classes.container}>
          <p className={classes["no-videos"]}>
            this channel doesn't posted any videos yet
          </p>
        </div>
      )}
    </>
  );
};

export default YoutubeChannelVideos;
