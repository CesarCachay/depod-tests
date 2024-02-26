import { useState, useEffect } from "react";
import { breakpoints } from "@/utils/breakpoints";

export function useMediaQuery() {
  const [isSmScreen, setIsSmScreen] = useState(false);
  const [isDesktopScreen, setIsDesktopScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmScreen(window.innerWidth > breakpoints.values.sm);
      setIsDesktopScreen(window.innerWidth > breakpoints.values.lg);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isSmScreen, isDesktopScreen };
}
