"use client";
import { JobCard } from "@/features/jobs/components/JobCard";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Job } from "@/lib/content/jobs";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TbX } from "react-icons/tb";

export const TimelineModal = ({
  data,
  title,
  id,
}: {
  data: Job[];
  title: string;
  id: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [active, setActive] = useState<Job | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  useOutsideClick(cardRef, () => setActive(null));

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 20%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <section ref={containerRef}>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-background/80"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}
            >
              <TbX className="text-lg text-background" />
            </motion.button>
            <JobCard job={active} ref={cardRef} id={id} isPreview={false} />
          </div>
        )}
      </AnimatePresence>
      <h2 className="mb-8 lg:mb-16">{title}</h2>
      <div
        ref={ref}
        className="relative mx-auto flex max-w-7xl flex-col gap-20 pb-20 md:gap-40"
      >
        {data.map((item, index) => (
          <div key={index} className="flex justify-start md:gap-10">
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-0 top-1.5 flex size-6 items-center justify-center rounded-full bg-foreground md:left-3 md:top-0 md:size-10">
                <div className="h-4 w-4 rounded-full border border-foreground bg-background/30 p-2" />
              </div>
              <div className="hidden flex-col gap-2 font-bold text-muted-foreground md:flex md:pl-20">
                <h3 className="text-2xl">
                  {item.date.start.toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </h3>
                {/* Show months */}
                <p>
                  {"to "}
                  {item.date.end
                    ? item.date.end.toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })
                    : "Present"}
                </p>
              </div>
            </div>

            <div className="relative w-full pl-12 pr-0 md:pl-4 md:pr-4">
              <div className="mb-4 flex items-center gap-2 text-left text-2xl font-bold md:hidden">
                <h3>
                  {item.date.start.toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </h3>
                {/* Show months */}
                <p className="text-muted-foreground">
                  {" - "}
                  {item.date.end
                    ? item.date.end.toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })
                    : "Present"}
                </p>
              </div>
              <JobCard
                key={`${item.title}-${index}`}
                job={item}
                isPreview={true}
                setActive={setActive}
                id={id}
              />
            </div>
          </div>
        ))}
        <div className="absolute left-2.5 top-0 h-full w-1 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-foreground/50 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,foreground_10%,foreground_90%,transparent_100%)] md:left-8">
          <motion.div
            style={{
              height: heightTransform,
            }}
            className="absolute inset-x-0 top-0 w-1 rounded-full bg-gradient-to-t from-primary from-[0%] via-primary/40 via-[10%] to-transparent"
          />
        </div>
      </div>
    </section>
  );
};
