import classes from "../../../styles/ChannelPage.module.css";
import { KEY } from "../../../api/YoutubeApi/apiYoutube";
import { useYoutube } from "../../../hooks/use-youtube";
import { useRouter } from "next/router";
import YoutubeChannelBanner from "../../../components/Youtube/YoutubeChannelBanner/YoutubeChannelBanner";
import YoutubeChannelVideos from "../../../components/Youtube/YoutubeChannelVideos/YoutubeChannelVideos";
import Head from "next/head";

const ChannelPage: React.FC = () => {
  const router = useRouter();
  const channelId = router.query.channelID;

  const params = {
    params: {
      part: "snippet,statistics,contentDetails",
      id: channelId,
      key: KEY,
    },
  };

  const { data, error } = useYoutube("/channels", params, channelId);

  const title = data?.items[0].snippet.title;
  const thumbnail = data?.items[0].snippet.thumbnails.medium.url;
  const subscribers = data?.items[0].statistics.subscriberCount;
  const playlistId = data?.items[0].contentDetails.relatedPlaylists.uploads;
  const description = data?.items[0].snippet.description;

  //   const thumbnail = data?.items[0].snippet.thumbnails.default.url;

  return (
    <div className={classes.container}>
      <Head>
        <title>{`${title} - Youtube - Clone`}</title>
        <meta name="description" content={description} />
      </Head>

      {error && !data && <p>{error}</p>}
      {data && (
        <YoutubeChannelBanner
          title={title}
          subscribers={subscribers}
          thumbnail={thumbnail}
          channelId={channelId}
        />
      )}
      {data && <YoutubeChannelVideos playlistId={playlistId} />}
    </div>
  );
};

export default ChannelPage;
