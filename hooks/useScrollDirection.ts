import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setAtTop(y < 8);

      if (Math.abs(y - lastY) > 6) {
        setDirection(y > lastY ? "down" : "up");
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { direction, atTop };
}
