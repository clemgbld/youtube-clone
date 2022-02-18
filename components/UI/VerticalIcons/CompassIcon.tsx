import { FaRegCompass, FaCompass } from "react-icons/fa";
import { useRouter } from "next/router";
import { useBigNav } from "../../../store/nav";

const CompassIcon: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const isActive = pathname === "/explorer";
  const { isBigNavOpen } = useBigNav();

  const classIcon = isBigNavOpen ? "icon icon-big" : "icon";
  return (
    <>
      {isActive ? (
        <FaCompass className={classIcon} />
      ) : (
        <FaRegCompass className={classIcon} />
      )}
    </>
  );
};

export default CompassIcon;
