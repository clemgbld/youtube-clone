import { AiFillClockCircle, AiOutlineClockCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { useBigNav } from "../../../store/nav";

const ClockIcon: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const isActive = pathname === "/later";
  const { isBigNavOpen } = useBigNav();

  const classIcon = isBigNavOpen ? "icon icon-big" : "icon";
  return (
    <>
      {isActive ? (
        <AiFillClockCircle className={classIcon} />
      ) : (
        <AiOutlineClockCircle className={classIcon} />
      )}
    </>
  );
};

export default ClockIcon;
