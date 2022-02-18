import classes from "./LogoutButton.module.css";
import { IoLogOutOutline } from "react-icons/io5";
import { useAuth } from "../../../../../store/auth";

const LogoutButton: React.FC<{ size: string }> = ({ size }) => {
  const { user, logout } = useAuth();

  const classLogout =
    size === "large" ? classes["logout-large"] : classes.logout;

  const classIcon = size === "large" ? classes["icon-large"] : classes.icon;

  return (
    <>
      {user && (
        <div onClick={logout} className={classLogout}>
          <IoLogOutOutline className={classIcon} />
          <p>Logout</p>
        </div>
      )}
    </>
  );
};

export default LogoutButton;
