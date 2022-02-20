import { useState, useEffect } from "react";
import classes from "../../../styles/SearchPage.module.css";
import { useRouter } from "next/router";
import { KEY } from "../../../api/YoutubeApi/apiYoutube";
import { useYoutube } from "../../../hooks/use-youtube";
import YoutubeItemSearchPage from "../../../components/Youtube/YoutubeItemSearchPage/YoutubeItemSearchPage";
import { ItemSearch } from "../../../interface/youtubeItemInterface";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { loadMoreYoutubePages } from "../../../api/YoutubeApi/loadMoreYoutubePages";
import Head from "next/head";

const SearchPage: React.FC = () => {
  const [items, setItems] = useState<ItemSearch[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string>("");
  const router = useRouter();
  const searchTerm = router.query.searchID;

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
    <>
      <Head>
        <title>{`${searchTerm} - Youtube-Clone`}</title>
      </Head>
      {error && !data && <p>{error}</p>}
      {items?.length > 0 && data && (
        <div className={classes.container}>
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
        </div>
      )}
    </>
  );
};
export default SearchPage;
