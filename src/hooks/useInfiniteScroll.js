import { useEffect } from "react";
import debounce from "lodash.debounce";

const useInfiniteScroll = callback => {
  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50 // 50 is just number of pixel, so you dont need to scroll until reach the bottom
      ) {
        callback();
        window.scrollTo(0, document.body.scrollHeight);
      }
    }
    window.addEventListener("scroll", debounce(handleScroll, 100));
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback]);

  return [];
};

export default useInfiniteScroll;
