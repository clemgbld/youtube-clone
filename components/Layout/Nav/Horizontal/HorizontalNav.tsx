import classes from "./HorizontalNav.module.css";
import LeftIcons from "./LeftIcons/LeftIcons";
import InputSections from "./InputSections/InputForm";
import InputVocal from "./InputSections/InputVocal";
import InputForm from "./InputSections/InputForm";
import LoginBtn from "./RightIcons/LoginBtn";

const HorizontalNav: React.FC = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <LeftIcons />
        <div><InputForm /></div>
        <LoginBtn />
      </nav>
    </header>
  );
};

export default HorizontalNav;
