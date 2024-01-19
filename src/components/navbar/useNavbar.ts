import { useCallback, useEffect, useRef, useState } from "react";
import useHashFragment from "@/shared/hooks/useHashFragment";

const useNavbar = (
  activeLink: number,
  onLinkClick: (index: number) => void
) => {
  const { hashFragment } = useHashFragment();

  const [highlighterPosition, setHighlighterPosition] = useState({
    left: 0,
    width: 0,
  });
  const highlighterRef = useRef<HTMLDivElement>(null);
  const [fadeIn, setFadeIn] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  const updateHighlighterPosition = useCallback(() => {
    const highlighter = highlighterRef.current;
    const parentElement = highlighter?.parentElement;

    if (highlighter && parentElement) {
      const activeLinkElement = parentElement.children[
        activeLink
      ] as HTMLElement;

      if (activeLinkElement) {
        const { offsetLeft, offsetWidth } = activeLinkElement;

        setHighlighterPosition({
          left: offsetLeft - 12,
          width: offsetWidth + 24,
        });
      }
    }
  }, [activeLink]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(0.6);
    }, 300);

    return () => clearTimeout(timeout);
  }, [hashFragment]);

  useEffect(() => {
    updateHighlighterPosition();

    const handleResize = () => {
      setUpdateCount((prevCount) => prevCount + 1);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateCount, updateHighlighterPosition]);

  return { highlighterPosition, fadeIn, highlighterRef, onLinkClick };
};

export default useNavbar;
