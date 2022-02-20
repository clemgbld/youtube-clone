import { useEffect, useState } from "react";
import classes from "./YoutubeSideList.module.css";
import { useYoutube } from "../../../hooks/use-youtube";
import { KEY } from "../../../api/YoutubeApi/apiYoutube";
import { loadMoreYoutubePages } from "../../../api/YoutubeApi/loadMoreYoutubePages";
import YoutubeItemSearch from "../YoutubeItemSearch/YoutubeItemSearch";
import { ItemSearch } from "../../../interface/youtubeItemInterface";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../UI/Spinner/Spinner";

const YoutubeSideList: React.FC<{ searchTerm: string; id: string }> = ({
  searchTerm,
  id,
}) => {
  const [items, setItems] = useState<ItemSearch[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string>("");

  const params = {
    params: {
      part: "snippet",
      pageToken: "",
      maxResults: 50,
      q: searchTerm,
      key: KEY,
      type: "video",
    },
  };

  const { data, error } = useYoutube("/search", params, searchTerm);

  useEffect(() => {
    setNextPageToken(data?.nextPageToken);

    if (searchTerm) {
      setItems(data?.items);
    }
  }, [data, searchTerm]);

  const paramsNext = {
    params: {
      part: "snippet",
      pageToken: nextPageToken,
      maxResults: 50,
      q: searchTerm,
      key: KEY,
      type: "video",
    },
  };

  return (
    <div>
      {error && !data && <p>{error}</p>}
      {data && items && (
        <InfiniteScroll
          dataLength={items.length}
          next={() =>
            loadMoreYoutubePages(
              paramsNext,
              "search",
              setItems,
              setNextPageToken
            )
          }
          hasMore={true}
          loader={<Spinner />}
        >
          {items?.length > 0 &&
            items
              .filter((item) => item.id.videoId !== id)
              .map((item: ItemSearch, index) => (
                <YoutubeItemSearch key={index} item={item} type={"side"} />
              ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default YoutubeSideList;
