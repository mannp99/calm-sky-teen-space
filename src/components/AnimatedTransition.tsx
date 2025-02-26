
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTransitionProps {
  children: React.ReactNode;
  show: boolean;
  duration?: number;
  className?: string;
}

export function AnimatedTransition({
  children,
  show,
  duration = 300,
  className,
}: AnimatedTransitionProps) {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
    const timer = setTimeout(() => {
      if (!show) setRender(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [show, duration]);

  if (!render) return null;

  return (
    <div
      className={cn(
        "transition-all overflow-hidden",
        show ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0",
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}
