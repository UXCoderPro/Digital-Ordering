import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY) < 5) return;

      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return scrollDir;
};

export default useScrollDirection;
