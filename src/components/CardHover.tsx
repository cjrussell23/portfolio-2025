"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  groups,
  className,
  containerClassName,
}: {
  containerClassName?: string;
  groups: { title?: string; items: React.ReactNode[] }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <div className={cn(className)}>
      {groups.map((group, groupIdx) => (
        <div key={groupIdx}>
          {group.title && (
            <h3 className="px-4 text-muted-foreground">{group.title}</h3>
          )}
          <div
            className={cn(
              "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
              containerClassName,
            )}
          >
            {group.items.map((item, idx) => (
              <div
                key={idx}
                className="group relative block h-full w-full"
                onMouseEnter={() => setHoveredIndex(`${groupIdx}-${idx}`)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === `${groupIdx}-${idx}` && (
                    <motion.span
                      className="absolute inset-0 block h-full w-full rounded-3xl bg-primary"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <div className="relative z-20 h-full w-full overflow-hidden rounded p-2">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
