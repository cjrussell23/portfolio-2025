import { cn } from "@/lib/utils";
import * as React from "react";

interface ShineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const ShineButton = React.forwardRef<HTMLButtonElement, ShineButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group/button relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-md border border-foreground bg-background px-2 py-1 text-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary/30 md:px-3",
          props.className,
        )}
        {...props}
      >
        {children}
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-foreground/20" />
        </div>
      </button>
    );
  },
);

ShineButton.displayName = "ShineButton";

export default ShineButton;
