import { useState, useEffect } from "react";
import classes from "../../styles/ExplorerPage.module.css";
import YoutubeContainerExplorer from "../../components/Youtube/YoutubeContainerExplorer/YoutubeContainerExplorer";
import { useExplorer } from "../../store/explorer";
import { useYoutube } from "../../hooks/use-youtube";
import { loadMoreYoutubePages } from "../../api/YoutubeApi/loadMoreYoutubePages";
import { KEY } from "../../api/YoutubeApi/apiYoutube";
import YoutubeItemSearchPage from "../../components/Youtube/YoutubeItemSearchPage/YoutubeItemSearchPage";
import { ItemSearch } from "../../interface/youtubeItemInterface";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../components/UI/Spinner/Spinner";
const ExplorerPage = () => {
  const { searchTerm } = useExplorer();

  const [items, setItems] = useState<ItemSearch[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string>("");

  const params = {
    params: {
      part: "snippet",
      pageToken: "",
      maxResults: 20,
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
      maxResults: 20,
      q: searchTerm,
      key: KEY,
      type: "video",
    },
  };

  return (
    <div className={classes.container}>
      {error && !data && <p>{error}</p>}
      <YoutubeContainerExplorer />
      <h3 className={classes.related}>{`Videos related to ${searchTerm}`}</h3>
      {data && items && items.length > 0 && (
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
          {items.map((item: ItemSearch, index: number) => (
            <YoutubeItemSearchPage key={index} item={item} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default ExplorerPage;
