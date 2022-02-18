import classes from "./SportIcon.module.css";
import { useExplorer } from "../../../../../store/explorer";
import { IoTrophy, IoTrophyOutline } from "react-icons/io5";
const SportIcon: React.FC<{ text: string }> = ({ text }) => {
  const { searchTerm } = useExplorer();

  const isActive = searchTerm === text;

  return (
    <>
      {isActive ? (
        <IoTrophy className={classes.icon} />
      ) : (
        <IoTrophyOutline className={classes.icon} />
      )}
    </>
  );
};

export default SportIcon;
