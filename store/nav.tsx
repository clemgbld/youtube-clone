import { useRouter } from "next/router";
import { createContext, FC, useContext, useState, useEffect } from "react";
import { BigNav } from "../interface/bigNavInterface";

const BigNavContext = createContext<BigNav>({
  isBigNavOpen: true,
  toggleBigNav: () => {},
});

const BigNavProvider: FC = ({ children }) => {
  const [isBigNavOpen, setIsBigNavOpen] = useState<boolean>(true);
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname === "/c/[channelID]") {
      setIsBigNavOpen(true);
    }

    if (pathname === "/watch/[videoID]") {
      setIsBigNavOpen(false);
    }
  }, [pathname]);

  const toggleBigNav = () => setIsBigNavOpen((prevState) => !prevState);

  return (
    <BigNavContext.Provider value={{ isBigNavOpen, toggleBigNav }}>
      {children}
    </BigNavContext.Provider>
  );
};

const useBigNav = () => useContext(BigNavContext);

export { BigNavProvider, useBigNav };
