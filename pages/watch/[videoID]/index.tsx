import classes from "../../../styles/WatchPage.module.css";
import { useRouter } from "next/router";
import { KEY } from "../../../api/YoutubeApi/apiYoutube";
import { useYoutube } from "../../../hooks/use-youtube";
import YoutubeItemLarge from "../../../components/Youtube/YoutubeItemLarge/YoutubeItemLarge";
import YoutubeSideList from "../../../components/Youtube/YoutubeSideList/YoutubeSideList";
import { transformTitleInSearchTerm } from "../../../helpers/transformTitleInSearchTerm";
import YoutubeComments from "../../../components/Youtube/YoutubeComments/YoutubeComments";
import Head from "next/head";

const WatchPage: React.FC = () => {
  const router = useRouter();
  const videoId = router.query.videoID;

  const params = {
    params: {
      part: "snippet,statistics,contentDetails",
      id: videoId,
      key: KEY,
    },
  };

  const { data, error } = useYoutube("/videos", params, videoId);

  const title = data?.items[0].snippet.title;

  const searchTerm = transformTitleInSearchTerm(title);

  const id = data?.items[0].id;

  const commentCount = data?.items[0].statistics.commentCount;

  const liveBroadcastContent = data?.items[0].snippet.liveBroadcastContent;

  const isLive = liveBroadcastContent === "live";

  return (
    <div className={classes.container}>
      <Head>
        <title>{`${title} - Youtube-Clone`}</title>
      </Head>
      {error && !data && <p>{error}</p>}
      <div>
        {videoId && (
          <iframe
            className={classes.video}
            src={`https://www.youtube.com/embed/${videoId}`}
          />
        )}

        {data && (
          <>
            <YoutubeItemLarge data={data.items[0]} />
            {!isLive && (
              <YoutubeComments videoId={videoId} commentCount={commentCount} />
            )}
          </>
        )}
      </div>
      {searchTerm && (
        <div className={classes["videos-container"]}>
          <YoutubeSideList searchTerm={searchTerm} id={id} />
        </div>
      )}
    </div>
  );
};

export default WatchPage;
