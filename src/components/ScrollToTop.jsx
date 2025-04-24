import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Instantly position the page at the top without scrolling animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Modern browsers support this for immediate positioning
    });
    
    // Fallback for browsers that don't support behavior: "instant"
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
  
  return null;
}

export default ScrollToTop;