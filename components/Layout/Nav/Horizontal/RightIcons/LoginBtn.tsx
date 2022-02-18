import classes from "./LoginBtn.module.css";
import { BsPersonCircle } from "react-icons/bs";
import { useAuth } from "../../../../../store/auth";
import ProfilePicture from "../../../../UI/ProfilePicture/ProfilePicture";

const LoginBtn: React.FC = () => {
  const { user, login } = useAuth();

  const profilePicture = user?.photoURL;

  const errorHandler = (e: any) => {
    e.target.src = "/fallback.PNG";
  };

  return (
    <>
      {!user && (
        <button onClick={login} className={classes.btn}>
          <BsPersonCircle className={classes.icon} />
          <p className={classes.text}>SIGN IN</p>
        </button>
      )}
      {user && <ProfilePicture size="small" />}
    </>
  );
};

export default LoginBtn;
