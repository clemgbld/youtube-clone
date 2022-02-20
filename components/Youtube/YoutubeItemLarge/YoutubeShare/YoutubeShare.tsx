import { useState } from "react";
import classes from "./YoutubeShare.module.css";
import { RiShareForwardLine } from "react-icons/ri";
import Modal from "../../../UI/Modal/Modal";
import { useRouter } from "next/router";
import Notification from "../../../UI/Notification/Notification";
import { resetNotificationState } from "../../../../helpers/resetNotificationState";

const YoutubeShare: React.FC = () => {
  const router = useRouter();

  const { pathname } = router;
  const { videoID } = router.query;

  const path = `${pathname.replace("[videoID]", "")}${videoID}`;

  const fullPath = `https://youtube-clone-vert.vercel.app${path}`;

  const text = "Link copied in the clipboard";

  const [isOpen, setIsOpen] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(fullPath);
    resetNotificationState(setIsNotification);
  };

  return (
    <>
      {isNotification && <Notification text={text} />}
      {isOpen && (
        <Modal onClose={closeModalHandler}>
          <h3 className={classes.title}>Share</h3>
          <div className={classes.container}>
            <div className={classes["copy-container"]}>
              <input
                className={classes.input}
                type="text"
                value={fullPath}
                readOnly
              />
              <button onClick={copyToClipBoard} className={classes.copy}>
                COPY
              </button>
            </div>
          </div>
        </Modal>
      )}
      <div onClick={openModalHandler} className={classes.flex}>
        <RiShareForwardLine className={classes.icon} />
        <p className={classes.share}>SHARE</p>
      </div>
    </>
  );
};

export default YoutubeShare;
