import classes from "./SkeletonImage.module.css";
import Skeleton from "react-loading-skeleton";
import SkeletonColor from "../SkeletonColor/SkeletonColor";

const SkeletonImage: React.FC<{ size: string; type: string }> = ({
  size,
  type,
}) => {
  const classImg = `${
    size === "small" && type !== "channel"
      ? classes["img-small"]
      : type === "channel"
      ? classes["img-channel"]
      : classes.img
  }`;

  return (
    <div className={classImg}>
      <SkeletonColor>
        <Skeleton width="100%" height="100%" />
      </SkeletonColor>
    </div>
  );
};

export default SkeletonImage;
