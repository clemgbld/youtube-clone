import classes from "./Layout.module.css";
import HorizontalNav from "./Nav/Horizontal/HorizontalNav";
import VerticalNav from "./Nav/Vertical/VerticalNav/VerticalNav";
import TagsContainer from "./Tags/TagsContainer/TagsContainer";
import { useRouter } from "next/router";
import VerticalNavBig from "./Nav/Vertical/VerticalNavBig/VerticalNavBig";
import { useBigNav } from "../../store/nav";
import Overlay from "./Overlay/Overlay";
import { useEffect } from "react";

const Layout: React.FC = (props) => {
  const router = useRouter();
  const { pathname } = router;

  const { isBigNavOpen } = useBigNav();
  const watchPath = pathname !== "/watch/[videoID]";

  useEffect(() => {
    if (isBigNavOpen && !watchPath) {
      document.body.style.overflow = "hidden";
    }

    if (!isBigNavOpen && !watchPath) {
      document.body.style.overflow = "unset";
    }

    if (isBigNavOpen && watchPath) {
      document.body.style.overflow = "unset";
    }
  }, [isBigNavOpen, watchPath]);

  const showVerticalNav = [
    "/",
    "/search/[searchID]",
    "/c/[channelID]",
    "/explorer",
    "/tags",
    "/later",
  ].includes(pathname);

  const showTagsContainer = pathname === "/" || pathname === "/tags";

  const classLayout =
    isBigNavOpen && watchPath ? classes["layout-bignav"] : classes.layout;

  return (
    <>
      <HorizontalNav />
      {showTagsContainer && <TagsContainer />}
      {showVerticalNav && !isBigNavOpen && <VerticalNav />}
      {isBigNavOpen && <VerticalNavBig />}
      {isBigNavOpen && !watchPath && <Overlay />}
      <main className={classLayout}>{props.children}</main>
    </>
  );
};

export default Layout;
