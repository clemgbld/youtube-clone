import { createContext, FC, useContext, useState } from "react";
import { Explorer } from "../interface/explorerInterface";

const ExplorerContext = createContext<Explorer>({
  searchTerm: "music",
  setExplorer: () => {},
});

const ExplorerProvider: FC = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("music");
  const setExplorer = (btnText: string) => {
    setSearchTerm(btnText);
  };
  return (
    <ExplorerContext.Provider value={{ searchTerm, setExplorer }}>
      {children}
    </ExplorerContext.Provider>
  );
};

const useExplorer = () => useContext(ExplorerContext);

export { ExplorerProvider, useExplorer };
