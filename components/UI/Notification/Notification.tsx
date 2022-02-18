import classes from "./Notification.module.css";
import ReactDOM from "react-dom";

const Notification: React.FC<{ text: string | null}> = ({ text }) => {
  return ReactDOM.createPortal(
    <div className={classes.notification}>
      <p className={classes.text}>{text}</p>
    </div>,
    document.getElementById("modal")!
  );
};

export default Notification;
