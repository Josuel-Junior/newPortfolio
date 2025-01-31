import { debounce } from "lodash";
import { useEffect, useState } from "react";

function usePosition() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = debounce(() => {
    const scrollHeight = window.scrollY;
    if (scrollHeight != 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [toggleVisibility]);

  return isVisible;
}

export default usePosition;
