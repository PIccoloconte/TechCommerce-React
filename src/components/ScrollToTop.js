import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//It used to scroll up the page every time he changed pages
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
