import classes from "./FashionIcon.module.css";
import { useExplorer } from "../../../../../store/explorer";
import { IoShirtOutline, IoShirt } from "react-icons/io5";
const FashionIcon: React.FC<{ text: string }> = ({ text }) => {
  const { searchTerm } = useExplorer();

  const isActive = searchTerm === text;

  return (
    <>
      {isActive ? (
        <IoShirt className={classes.icon} />
      ) : (
        <IoShirtOutline className={classes.icon} />
      )}
    </>
  );
};

export default FashionIcon;
