import classes from "./SkeletonChannelIcon.module.css";
import Skeleton from "react-loading-skeleton";
import SkeletonColor from "../SkeletonColor/SkeletonColor";

const SkeletonChannelIcon: React.FC<{ size: string }> = ({ size }) => {
  const classImg = `${
    size === "large"
      ? classes["img-large"]
      : size === "small"
      ? classes["img-small"]
      : size === "extra-large"
      ? classes["img-extra-large"]
      : classes.img
  }`;

  return (
    <div className={classImg}>
      <SkeletonColor>
        <Skeleton width="100%" height="100%" circle={true} />
      </SkeletonColor>
    </div>
  );
};

export default SkeletonChannelIcon;
