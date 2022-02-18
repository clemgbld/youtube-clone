import classes from "./YoutubeButtonExplorer.module.css";
import { useExplorer } from "../../../../store/explorer";

const YoutubeButtonExplorer: React.FC<{ text: string }> = ({
  children,
  text,
}) => {
  const { searchTerm, setExplorer } = useExplorer();

  const isActive = searchTerm === text;

  const btnClass = isActive ? classes.active : classes.btn;

  const title = text
    .split("")
    .map((l, i) => (i === 0 ? l.toUpperCase() : l))
    .join("");

  const switchCategoryHandler = () => {
    if (isActive) return;
    setExplorer(text);
  };

  return (
    <button onClick={switchCategoryHandler} className={btnClass}>
      {children}
      <p className={classes.text}>{title}</p>
    </button>
  );
};

export default YoutubeButtonExplorer;
