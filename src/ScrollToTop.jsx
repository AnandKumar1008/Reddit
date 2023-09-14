import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "./MyContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { top } = useContext(MyContext);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname, top]);

  return null;
};

export default ScrollToTop;
