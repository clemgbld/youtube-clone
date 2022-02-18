import { SkeletonTheme } from "react-loading-skeleton";

const SkeletonColor: React.FC = ({ children }) => {
  return (
    <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
      {children}
    </SkeletonTheme>
  );
};

export default SkeletonColor;
