import classes from "./NewsIcon.module.css";
import { useExplorer } from "../../../../../store/explorer";
import { IoNewspaper, IoNewspaperOutline } from "react-icons/io5";
const NewsIcon: React.FC<{ text: string }> = ({ text }) => {
  const { searchTerm } = useExplorer();

  const isActive = searchTerm === text;

  return (
    <>
      {isActive ? (
        <IoNewspaper className={classes.icon} />
      ) : (
        <IoNewspaperOutline className={classes.icon} />
      )}
    </>
  );
};

export default NewsIcon;
