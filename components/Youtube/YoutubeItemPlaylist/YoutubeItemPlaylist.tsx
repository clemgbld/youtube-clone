import { useState } from "react";
import classes from "./YoutubeItemPlaylist.module.css";
import YoutubeImage from "../shared/YoutubeImage/YoutubeImage";
import YoutubeTitle from "../shared/YoutubeTitle/YoutubeTitle";
import YoutubeChanelTitle from "../shared/YoutubeChanelTitle/YoutubeChanelTitle";
import YoutubeLive from "../shared/YoutubeLive/YoutubeLive";
import Notification from "../../UI/Notification/Notification";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { LaterTransformed } from "../../../interface/laterInterface";
import { useRouter } from "next/router";
import { deleteFirebase } from "../../../api/FirebaseApi/deleteFirebase";
import { resetNotificationState } from "../../../helpers/resetNotificationState";

const YoutubeItemPlaylist: React.FC<{
  obj: LaterTransformed;
  setDependancy: React.Dispatch<React.SetStateAction<string>>;
}> = ({ obj, setDependancy }) => {
  const TextDeleted = `video from ${obj.channeltitle} removed`;

  const [showBin, setShowBin] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const isLive = obj.duration === "P0D" ? true : false;

  const router = useRouter();

  const goToTheVideoPage = () => {
    router.push(`/watch/${obj.videoId}`);
  };

  const revealBin = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowBin(true);
  };

  const hideBin = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowBin(false);
  };

  const deleteItem = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    resetNotificationState(setIsNotification);
    setIsDeleted(true);
    await deleteFirebase(obj.id);
    setDependancy(obj.videoId);
  };

  return (
    <>
      {isNotification && <Notification text={TextDeleted} />}
      {!isDeleted && (
        <div
          onMouseEnter={revealBin}
          onMouseLeave={hideBin}
          onClick={goToTheVideoPage}
          className={classes["flex-big"]}
        >
          <div className={classes.flex}>
            <HiOutlineMenuAlt4 className={classes.icon} />
            <YoutubeImage
              image={obj.img}
              duration={obj.duration}
              size={"small"}
              type={"playlist"}
              isLive={isLive}
            />

            <div>
              <YoutubeTitle title={obj.title} size={"playlist"} />
              <YoutubeChanelTitle
                title={obj.channeltitle}
                size={"small"}
                channelId={obj.channelId}
              />
              {isLive && <YoutubeLive />}
            </div>
          </div>
          {showBin && (
            <div onClick={deleteItem} className={classes["icon-container"]}>
              <AiOutlineDelete className={classes.icon} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default YoutubeItemPlaylist;
