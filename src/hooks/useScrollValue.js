import { useState, useEffect, useRef } from "react";

export const useScrollValue = () => {
  const prev = useRef(0);
  const [scrollDownValue, setScrollDownValue] = useState(0);
  const [scrollUpValue, setScrollUpValue] = useState(0);

  useEffect(() => {
    let newVal = 0;
    const handleScroll = () => {
      if (prev.current > window.scrollY) {
        newVal = scrollUpValue + (prev.current - window.scrollY);
        setScrollUpValue(newVal);
        setScrollDownValue(0);
      } else {
        newVal = scrollDownValue + (window.scrollY - prev.current);
        setScrollDownValue(newVal);
        setScrollUpValue(0);
      }
      prev.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollUpValue, scrollDownValue]);
  return { down: scrollDownValue, up: scrollUpValue };
};
