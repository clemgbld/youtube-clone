import { useRouter } from "next/router";
import { useTags } from "../../../../../store/tags";

const Tag: React.FC<{ text: string }> = ({ text }) => {
  const { activeTag, goToSelectedTag } = useTags();
  const router = useRouter();
  const tagsPath = "/tags";
  const { pathname } = router;

  const classTag =
    pathname === tagsPath && activeTag === text ? "tag-active" : "tag";

  const goToTagsPage = () => {
    router.push(tagsPath);
    goToSelectedTag(text);
  };

  return (
    <button onClick={goToTagsPage} className={classTag}>
      {text}
    </button>
  );
};

export default Tag;
