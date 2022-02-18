import classes from "./GamingIcon.module.css";
import { useExplorer } from "../../../../../store/explorer";
import { IoGameControllerOutline, IoGameController } from "react-icons/io5";
const GamingIcon: React.FC<{ text: string }> = ({ text }) => {
  const { searchTerm } = useExplorer();

  const isActive = searchTerm === text;

  return (
    <>
      {isActive ? (
        <IoGameController className={classes.icon} />
      ) : (
        <IoGameControllerOutline className={classes.icon} />
      )}
    </>
  );
};

export default GamingIcon;
