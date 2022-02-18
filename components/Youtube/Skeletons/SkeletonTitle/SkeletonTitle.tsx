import classes from "./SkeletonTitle.module.css";
import Skeleton from "react-loading-skeleton";
import SkeletonColor from "../SkeletonColor/SkeletonColor";

const SkeletonTitle: React.FC<{ size: string }> = ({ size }) => {
  const classTitle = `${
    size === "large"
      ? classes["title-large"]
      : size === "small"
      ? classes["title-small"]
      : size === "search"
      ? classes["title-search"]
      : classes.title
  }`;

  return (
    <h3 className={classTitle}>
      <SkeletonColor>
        <Skeleton width="100%" height="100%" />
      </SkeletonColor>
    </h3>
  );
};

export default SkeletonTitle;
