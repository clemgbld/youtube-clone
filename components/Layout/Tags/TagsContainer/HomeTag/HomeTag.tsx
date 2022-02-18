import { useRouter } from "next/router";

const HomeTag: React.FC = () => {
  const router = useRouter();
  const homePath = "/";
  const { pathname } = router;

  const classTag = pathname === homePath ? "tag-active" : "tag";

  const goToHomePage = () => {
    router.push(homePath);
  };

  return (
    <button onClick={goToHomePage} className={classTag}>
      All
    </button>
  );
};

export default HomeTag;
