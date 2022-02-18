import classes from "./VerticalNav.module.css";
import HomeIcon from "../../../../UI/VerticalIcons/HomeIcon";
import CompassIcon from "../../../../UI/VerticalIcons/CompassIcon";
import ClockIcon from "../../../../UI/VerticalIcons/ClockIcon";
import VerticalEndpoint from "./VerticalEndpoint/VerticalEndpoint";
import LogoutButton from "../LogoutButton/LogoutButton";

const homePath = "/";
const explorerPath = "/explorer";
const laterPath = "/later";

const VerticalNav: React.FC = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.flex}>
        <VerticalEndpoint path={homePath}>
          <HomeIcon />
          <p className={classes.text}>Home</p>
        </VerticalEndpoint>
        <VerticalEndpoint path={explorerPath}>
          <CompassIcon />
          <p className={classes.text}>Explorer</p>
        </VerticalEndpoint>
        <VerticalEndpoint path={laterPath}>
          <ClockIcon />
          <p className={classes.text}>Watch Later</p>
        </VerticalEndpoint>
        <LogoutButton size="small" />
      </nav>
    </header>
  );
};

export default VerticalNav;
