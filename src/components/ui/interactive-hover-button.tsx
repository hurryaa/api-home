import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, type = "button", ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "group relative inline-flex min-h-[44px] min-w-[9rem] cursor-pointer items-center justify-center overflow-hidden rounded-full border bg-background px-6 py-2 text-sm font-semibold",
        className,
      )}
      {...props}
    >
      <span className="relative z-20 inline-flex items-center gap-2 transition-all duration-300 group-hover:-translate-x-4 group-hover:opacity-0">
        {text}
      </span>
      <div className="pointer-events-none absolute inset-0 z-10 flex translate-x-full items-center justify-center gap-2 overflow-hidden text-primary-foreground transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span className="whitespace-nowrap">{text}</span>
        <ArrowRight className="h-4 w-4 shrink-0" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 scale-100 rounded-full bg-primary opacity-80 transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:scale-[3] group-hover:opacity-100"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
