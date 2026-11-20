import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 400);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 size-11 rounded-full ${visible ? "" : "invisible"}`}
      onClick={() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
      }}
    >
      <ArrowUp aria-hidden="true" />
    </Button>
  );
}
