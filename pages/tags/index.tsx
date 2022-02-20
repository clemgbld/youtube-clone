import { useState, useEffect } from "react";
import classes from "../../styles/TagsPage.module.css";
import { useTags } from "../../store/tags";
import { useBigNav } from "../../store/nav";
import { KEY } from "../../api/YoutubeApi/apiYoutube";
import { useYoutube } from "../../hooks/use-youtube";
import YoutubeItemTag from "../../components/Youtube/YoutubeItemTag/YoutubeItemTag";
import { ItemSearch } from "../../interface/youtubeItemInterface";
import { loadMoreYoutubePages } from "../../api/YoutubeApi/loadMoreYoutubePages";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../components/UI/Spinner/Spinner";
import Head from "next/head";

const TagsPage: React.FC = () => {
  const [items, setItems] = useState<ItemSearch[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string>("");

  const { activeTag } = useTags();
  const { isBigNavOpen } = useBigNav();

  const classContainer = isBigNavOpen
    ? classes["container-bignav"]
    : classes.container;

  const params = {
    params: {
      part: "snippet",
      pageToken: "",
      maxResults: 50,
      q: activeTag,
      key: KEY,
      type: "video",
    },
  };
  const { data, error } = useYoutube("/search", params, activeTag);

  useEffect(() => {
    setNextPageToken(data?.nextPageToken);

    if (activeTag) {
      setItems(data?.items);
    }
  }, [data, activeTag]);

  const paramsNext = {
    params: {
      part: "snippet",
      pageToken: nextPageToken,
      maxResults: 50,
      q: activeTag,
      key: KEY,
      type: "video",
    },
  };

  return (
    <>
      <Head>
        <title>Youtube-Clone</title>
        <meta
          name="description"
          content="Enjoy videos and music that you like, and share it with your family, friends and the world thanks to this youtube clone."
        />
      </Head>
      <InfiniteScroll
        dataLength={items?.length}
        next={() =>
          loadMoreYoutubePages(paramsNext, "search", setItems, setNextPageToken)
        }
        hasMore={true}
        loader={<Spinner />}
        className={classContainer}
      >
        {error && !data && <p>{error}</p>}
        {items &&
          items.length > 0 &&
          items.map((item: ItemSearch, index: number) => (
            <YoutubeItemTag key={index} item={item} />
          ))}
      </InfiniteScroll>
    </>
  );
};

export default TagsPage;
