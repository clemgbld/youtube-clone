import classes from "./YoutubeSideBar.module.css";
import ProfilePicture from "../../UI/ProfilePicture/ProfilePicture";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useAuth } from "../../../store/auth";

const YoutubeSideBar: React.FC<{
  img: string | undefined;
  title: string | undefined;
  videosLength: number | undefined;
}> = ({ img, title, videosLength }) => {
  const { user } = useAuth();

  const profileName = user?.displayName;

  const videoSingOrPlu = videosLength && videosLength < 2 ? "video" : "videos";

  const isImage = img === "" ? false : true;

  return (
    <div className={classes.container}>
      <div>
        {isImage && (
          <div className={classes["img-container"]}>
            <LazyLoadImage
              src={img}
              alt="Youtube's video thumbnail"
              className={classes.img}
              effect="blur"
            />
            <span className={classes.watch}>WATCH LATER PLAYLIST</span>
          </div>
        )}
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.videos}>{`${videosLength} ${videoSingOrPlu}`}</p>
      </div>
      {user && (
        <div className={classes.flex}>
          <ProfilePicture size="big" />
          <p className={classes.name}>{profileName}</p>
        </div>
      )}
    </div>
  );
};

export default YoutubeSideBar;
