import React from "react";
import classes from "./LeftIcons.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { useRouter } from "next/router";
import { useBigNav } from "../../../../../store/nav";

export default function LeftIcons() {
  const router = useRouter();
  const { pathname } = router;

  const goToHomePage = () => {
    if (isBigNavOpen && pathname === "/watch/[videoID]") {
      document.body.style.overflow = "unset";
    }
    router.push("/");
  };

  const { isBigNavOpen, toggleBigNav } = useBigNav();

  const manageVerticalNav = () => {
    if (isBigNavOpen && pathname === "/watch/[videoID]") {
    }
    toggleBigNav();
  };

  return (
    <div className={classes.flex}>
      <div onClick={manageVerticalNav}>
        <AiOutlineMenu className={classes.menu} />
      </div>

      <div onClick={goToHomePage} className={classes["youtube-flex"]}>
        <BsYoutube className={classes.youtube} />
        <p className={classes.text}>YouTube</p>
        <p className={classes.fr}>FR</p>
      </div>
    </div>
  );
}
