import classes from "./SkeletonChannelTitle.module.css";
import Skeleton from "react-loading-skeleton";
import SkeletonColor from "../SkeletonColor/SkeletonColor";

const SkeletonChannelTitle: React.FC = () => {
  return (
    <p className={classes.title}>
      <SkeletonColor>
        <Skeleton width="100%" height="100%" />
      </SkeletonColor>
    </p>
  );
};

export default SkeletonChannelTitle;
