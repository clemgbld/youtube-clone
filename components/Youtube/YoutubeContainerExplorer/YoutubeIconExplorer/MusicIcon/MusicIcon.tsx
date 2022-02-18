import classes from "./MusicIcon.module.css";
import { useExplorer } from "../../../../../store/explorer";
import { IoMusicalNotes, IoMusicalNotesOutline } from "react-icons/io5";
const MusicIcon: React.FC<{ text: string }> = ({ text }) => {
  const { searchTerm } = useExplorer();

  const isActive = searchTerm === text;

  return (
    <>
      {isActive ? (
        <IoMusicalNotes className={classes.icon} />
      ) : (
        <IoMusicalNotesOutline className={classes.icon} />
      )}
    </>
  );
};

export default MusicIcon;
