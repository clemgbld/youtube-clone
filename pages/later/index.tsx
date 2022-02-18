import { useState } from "react";
import classes from "../../styles/WatchLaterPage.module.css";
import { LaterTransformed } from "../../interface/laterInterface";
import { useFireBase } from "../../hooks/use-firebase";
import YoutubeSideBar from "../../components/Youtube/YoutubeSideBar/YoutubeSideBar";
import YoutubeItemPlaylist from "../../components/Youtube/YoutubeItemPlaylist/YoutubeItemPlaylist";

const WatchLaterPage: React.FC = () => {
  const [dependancy, setDependancy] = useState("");

  const { data, error } = useFireBase(dependancy);

  const thumbnail = data ? data[0]?.img : "";
  const videosLength = data?.length;
  const watchLater = "Watch Later";

  const classContainer =
    data?.length > 0 ? classes.container : classes["container-center"];

  return (
    <div className={classContainer}>
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
    </div>
  );
};

export default WatchLaterPage;
