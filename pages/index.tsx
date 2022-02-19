import { useState } from "react";
import apiYoutube, { KEY } from "../api/YoutubeApi/apiYoutube";
import { loadMoreYoutubePages } from "../api/YoutubeApi/loadMoreYoutubePages";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import YoutubeItem from "../components/Youtube/YoutubeItem/YoutubeItem";
import { Item } from "../interface/youtubeItemInterface";
import classes from "../styles/Home.module.css";
import { useBigNav } from "../store/nav";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/UI/Spinner/Spinner";
import Head from "next/head";

const HomePage: React.FC<{
  youtube: InferGetStaticPropsType<typeof getStaticProps>;
  pageToken: string;
}> = ({ youtube, pageToken }) => {
  const [items, setItems] = useState(youtube);
  const [nextPageToken, setNextPageToken] = useState(pageToken);
  const paramsNext = {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      regionCode: "US",
      maxResults: 20,
      pageToken: nextPageToken,
      type: "video",
      key: KEY,
    },
  };

  console.log(pageToken);

  const nextPageHandler = () => {
    loadMoreYoutubePages(paramsNext, "/videos", setItems, setNextPageToken);
  };

  const { isBigNavOpen } = useBigNav();

  const classContainer = isBigNavOpen
    ? classes["container-bignav"]
    : classes.container;

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
        className={classContainer}
        dataLength={items.length}
        next={nextPageHandler}
        hasMore={true}
        loader={<Spinner />}
      >
        {items.map((item: Item) => (
          <YoutubeItem key={item.id} item={item} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await apiYoutube.get("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      regionCode: "US",
      maxResults: 20,
      pageToken: "",
      type: "video",
      key: KEY,
    },
  });

  return {
    props: {
      youtube: res.data.items,
      pageToken: res.data.nextPageToken,
    },
    revalidate: 3600,
  };
};

export default HomePage;
