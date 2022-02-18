import { useState } from "react";
import classes from "./YoutubeDescription.module.css";
import { formatDescription } from "../../../../../helpers/formatDescription";

const YoutubeDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  const [less, setLess] = useState(true);
  const descArr = formatDescription(description);
  const moreThanOneLine = descArr.length > 1;
  const firstLine = `${descArr[0].slice(0, 70)}...`;

  const toggleBtnHandler = () => {
    setLess((prevState) => !prevState);
  };

  const renderBtn = () => {
    return (
      <button onClick={toggleBtnHandler} className={classes.btn}>
        {less && moreThanOneLine
          ? "plus"
          : !less && moreThanOneLine
          ? "less"
          : ""}
      </button>
    );
  };

  return (
    <>
      <div className={classes.description}>
        {moreThanOneLine ? (
          less ? (
            <>
              <p>{firstLine}</p>
              <br />
            </>
          ) : (
            descArr.map((line) => (
              <div key={line}>
                <p>{line}</p>
                <br />
              </div>
            ))
          )
        ) : (
          <p className={classes.description}>{description}</p>
        )}
      </div>
      {renderBtn()}
    </>
  );
};

export default YoutubeDescription;
