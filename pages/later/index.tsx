import { useEffect, useState } from "react";
import classes from "../../styles/WatchLaterPage.module.css";
import { LaterTransformed } from "../../interface/laterInterface";
import { useFireBase } from "../../hooks/use-firebase";
import { useAuth } from "../../store/auth";
import { useRouter } from "next/router";
import YoutubeSideBar from "../../components/Youtube/YoutubeSideBar/YoutubeSideBar";
import YoutubeItemPlaylist from "../../components/Youtube/YoutubeItemPlaylist/YoutubeItemPlaylist";
import SpinnerBig from "../../components/UI/Spinner/SpinnerBig/SpinnerBig";
import Head from "next/head";

const WatchLaterPage: React.FC = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user, router]);

  const uid = user?.uid;

  const [dependancy, setDependancy] = useState("");

  const { data, error, isLoading } = useFireBase(dependancy, uid);

  const thumbnail = data ? data[0]?.img : "";
  const videosLength = data?.length;
  const watchLater = "Watch Later";

  const classContainer =
    data?.length > 0 ? classes.container : classes["container-center"];

  return (
    <div className={classContainer}>
      <Head>
        <title>Watch Later - Youtube-Clone</title>
        <meta
          name="description"
          content="Enjoy videos and music that you like, and share it with your family, friends and the world thanks to this youtube clone."
        />
      </Head>
      {error && !data && <p>{error}</p>}

      {data?.length < 1 && (
        <p className={classes["no-videos"]}>
          no videos added to the playlist yet.
        </p>
      )}
      {data?.length > 0 && (
        <YoutubeSideBar
          img={thumbnail}
          title={watchLater}
          videosLength={videosLength}
        />
      )}
      {data?.length > 0 &&
        data.map((item: LaterTransformed) => (
          <YoutubeItemPlaylist
            key={item.id}
            obj={item}
            setDependancy={setDependancy}
          />
        ))}
      {isLoading && (
        <div className={classes["no-videos"]}>
          <SpinnerBig />
        </div>
      )}
    </div>
  );
};

export default WatchLaterPage;
