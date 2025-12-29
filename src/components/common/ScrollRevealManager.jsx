import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initScrollReveal } from "../../utils/scrollReveal";

export default function ScrollRevealManager() {
  const location = useLocation();

  useEffect(() => {
    // Let the new route DOM paint first, then scan for reveal nodes.
    let cleanup = null;
    const raf = requestAnimationFrame(() => {
      // Toggle reveals both ways (scroll down and up).
      cleanup = initScrollReveal({ once: false });
    });

    return () => {
      cancelAnimationFrame(raf);
      cleanup?.();
    };
  }, [location.pathname]);

  return null;
}


