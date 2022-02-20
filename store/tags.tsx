import { createContext, FC, useContext, useState, useEffect } from "react";
import { Tags } from "../interface/tagsInterface";

const TagsContext = createContext<Tags>({
  tags: [],
  activeTag: "",
  goToSelectedTag: () => {},
  addTag: () => {},
});

const TagsProvider: FC = ({ children }) => {
  const [activeTag, setActiveTag] = useState("jazz");
  const [tags, setTags] = useState<string[]>([]);

  const goToSelectedTag = (tagText: string) => setActiveTag(tagText);

  const addTag = (tagText: string) => {
    if (tags.includes(tagText) || tagText.length < 2 || tagText.length > 9)
      return;

    setTags((prevState) => [...prevState, tagText]);
  };

  return (
    <TagsContext.Provider value={{ tags, activeTag, goToSelectedTag, addTag }}>
      {children}
    </TagsContext.Provider>
  );
};

const useTags = () => useContext(TagsContext);

export { TagsProvider, useTags };
