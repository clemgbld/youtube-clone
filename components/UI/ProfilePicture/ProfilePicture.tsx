import classes from "./ProfilePicture.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAuth } from "../../../store/auth";

const ProfilePicture: React.FC<{ size: string }> = ({ size }) => {
  const { user } = useAuth();

  const profilePicture = user?.photoURL;

  const errorHandler = (e: any) => {
    e.target.src = "/fallback.PNG";
  };

  const classImg =
    size === "big"
      ? classes["profile-picture-big"]
      : classes["profile-picture"];

  return (
    <LazyLoadImage
      className={classImg}
      src={`${profilePicture}`}
      alt="user profile picture"
      effect="blur"
      onError={errorHandler}
    />
  );
};

export default ProfilePicture;
