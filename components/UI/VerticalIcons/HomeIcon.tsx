import { MdHome, MdOutlineHome } from "react-icons/md";
import { useRouter } from "next/router";
import { useBigNav } from "../../../store/nav";

const HomeIcon: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const isActive = pathname === "/" || pathname === "/tags";
  const { isBigNavOpen } = useBigNav();

  const classIcon = isBigNavOpen ? "icon icon-big" : "icon";
  return (
    <>
      {isActive ? (
        <MdHome className={classIcon} />
      ) : (
        <MdOutlineHome className={classIcon} />
      )}
    </>
  );
};

export default HomeIcon;
