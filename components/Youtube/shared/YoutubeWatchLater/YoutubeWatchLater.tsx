import React, { useState, useEffect } from "react";
import classes from "./YoutubeWatchLater.module.css";
import { RiPlayListAddLine } from "react-icons/ri";
import { TiInputChecked } from "react-icons/ti";
import { AiOutlineClockCircle, AiOutlineCheck } from "react-icons/ai";
import Notification from "../../../UI/Notification/Notification";
import { Later, LaterTransformed } from "../../../../interface/laterInterface";
import { postFirebase } from "../../../../api/FirebaseApi/postFirebase";
import { deleteFirebase } from "../../../../api/FirebaseApi/deleteFirebase";
import { useFireBase } from "../../../../hooks/use-firebase";
import { resetNotificationState } from "../../../../helpers/resetNotificationState";
import { useRouter } from "next/router";

const textAdd = "video added to playlist 'Watch later";
const textDelete = "video deleted from playlist 'Watch later";

const YoutubeWatchLater: React.FC<{
  obj: Later;
  isImage: boolean;
  showIcon?: boolean;
}> = ({ obj, isImage, showIcon }) => {
  const router = useRouter();
  const videoID = router.query.videoID;

  const [isSaved, setIsSaved] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [isNotificationAdd, setIsNotificationAdd] = useState(false);
  const [isNotificationDelete, setIsNotificationDelete] = useState(false);
  const [isNotificationError, setIsNotificationError] = useState(false);

  const { data, error } = useFireBase(videoID);

  console.log(data);

  useEffect(() => {
    if (error) {
      resetNotificationState(setIsNotificationError);
    }
  }, [error]);

  useEffect(() => {
    if (videoID) {
      setIsSaved(false);
    }
    if (data) {
      data.forEach((item: LaterTransformed) => {
        if (item.videoId === obj.id) {
          setIsSaved(true);
          setCurrentId(item.id);
        }
      });
    }
  }, [data, videoID, obj.id]);

  const sendData = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    postFirebase(obj);
    setIsSaved(true);
    resetNotificationState(setIsNotificationAdd);
  };

  const deleteData = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    deleteFirebase(currentId);
    setIsSaved(false);
    resetNotificationState(setIsNotificationDelete);
  };

  return (
    <>
      {isNotificationError && <Notification text={error} />}
      {isNotificationAdd && <Notification text={textAdd} />}
      {isNotificationDelete && <Notification text={textDelete} />}
      {!isImage ? (
        <>
          {!isSaved ? (
            <div onClick={sendData} className={classes.flex}>
              <RiPlayListAddLine className={classes.icon} />
              <p>REGISTER</p>
            </div>
          ) : (
            <div onClick={deleteData} className={classes.flex}>
              <TiInputChecked className={classes.icon} />
              <p>SAVED</p>
            </div>
          )}
        </>
      ) : (
        <>
          {!isSaved ? (
            <>
              {showIcon && (
                <div
                  onClick={sendData}
                  className={classes["icon-container-small"]}
                >
                  <AiOutlineClockCircle />
                </div>
              )}
            </>
          ) : (
            <>
              {showIcon && (
                <div
                  onClick={deleteData}
                  className={classes["icon-container-small-saved"]}
                >
                  <AiOutlineCheck />
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default YoutubeWatchLater;
