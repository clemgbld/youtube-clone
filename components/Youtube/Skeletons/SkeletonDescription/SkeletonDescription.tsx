import classes from "./SkeletonDescription.module.css";
import Skeleton from "react-loading-skeleton";
import SkeletonColor from "../SkeletonColor/SkeletonColor";

const SkeletonDescription: React.FC = () => {
  return (
    <p className={classes.description}>
      <SkeletonColor>
        <Skeleton width="100%" height="100%" />
      </SkeletonColor>
    </p>
  );
};

export default SkeletonDescription;
