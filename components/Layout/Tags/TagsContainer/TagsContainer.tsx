import classes from "./TagsContainer.module.css";
import HomeTag from "./HomeTag/HomeTag";
import Tag from "./Tag/Tag";
import { useBigNav } from "../../../../store/nav";
import { useTags } from "../../../../store/tags";

export default function TagsContainer() {
  const { tags } = useTags();

  const { isBigNavOpen } = useBigNav();

  const classTagsContainer = isBigNavOpen
    ? classes["container-bignav"]
    : classes.container;

  return (
    <div className={classTagsContainer}>
      <HomeTag />
      {tags.map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
    </div>
  );
}
