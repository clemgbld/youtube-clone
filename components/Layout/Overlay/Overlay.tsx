import classes from "./Overlay.module.css";
import { useBigNav } from "../../../store/nav";

const Overlay: React.FC = () => {
  const { toggleBigNav } = useBigNav();

  const closeOverlay = () => {
    toggleBigNav();
  };

  return <div onClick={closeOverlay} className={classes.overlay} />;
};

export default Overlay;
