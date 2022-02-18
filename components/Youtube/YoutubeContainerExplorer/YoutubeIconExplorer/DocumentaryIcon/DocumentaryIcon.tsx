import classes from "./DocumentaryIcon.module.css";
import { useExplorer } from "../../../../../store/explorer";
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
const DocumentaryIcon: React.FC<{ text: string }> = ({ text }) => {
  const { searchTerm } = useExplorer();

  const isActive = searchTerm === text;

  return (
    <>
      {isActive ? (
        <BsLightbulbFill className={classes.icon} />
      ) : (
        <BsLightbulb className={classes.icon} />
      )}
    </>
  );
};

export default DocumentaryIcon;
