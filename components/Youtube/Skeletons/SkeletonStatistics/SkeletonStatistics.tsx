import classes from "./SkeletonStatistics.module.css";
import Skeleton from "react-loading-skeleton";
import SkeletonColor from "../SkeletonColor/SkeletonColor";

const SkeletonStatistics: React.FC = () => {
  return (
    <p className={classes.statistics}>
      <SkeletonColor>
        <Skeleton width="100%" height="100%" />
      </SkeletonColor>
    </p>
  );
};

export default SkeletonStatistics;
