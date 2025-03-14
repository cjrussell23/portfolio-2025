"use client";
import ShineButton from "@/components/ShineButton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";
import { IoIosExpand } from "react-icons/io";
import { Job } from "../../../lib/content/jobs";
type JobCardProps =
  | {
      job: Job;
      id: string;
      isPreview: true;
      setActive: (job: Job) => void;
    }
  | {
      job: Job;
      id: string;
      isPreview?: false;
      ref: React.RefObject<HTMLDivElement>;
    };

const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
  function ExoticImageWrapper(props, ref) {
    return <Image {...props} ref={ref} />;
  },
);

const MotionComponent = motion(ExoticImage);

export function JobCard(props: JobCardProps) {
  const { job, id, isPreview } = props;
  return (
    <motion.article
      layoutId={`card-${job.title}-${id}`}
      key={`card-${job.title}-${id}`}
      ref={isPreview ? null : props.ref}
      className="m-2 flex flex-col justify-between rounded-xl border bg-card text-card-foreground shadow md:max-w-screen-md"
    >
      <ScrollArea className={`${isPreview ? null : "h-[calc(100vh-4rem)]"}`}>
        <motion.div
          layoutId={`content-${job.title}-${id}`}
          key={`card-header-${job.title}-${id}`}
          className="flex flex-col space-y-1.5"
        >
          <MotionComponent
            src={job.image.src}
            alt={job.image.alt}
            width={job.image.width}
            height={job.image.height}
            className={`aspect-video w-full rounded-t-xl object-cover object-top ${isPreview ? "" : "h-48"}`}
          />

          <motion.div
            layoutId={`image-${job.title}-${id}`}
            key={`card-header-${job.title}-${id}`}
            className={`${isPreview ? "p-4" : "p-8"} flex flex-col gap-2`}
          >
            <motion.h2
              layoutId={`title-${job.title}-${id}`}
              key={`title-${job.title}-${id}`}
              className={`${isPreview ? "text-xl" : "text-3xl"} font-semibold leading-none tracking-tight`}
            >
              {job.title}
            </motion.h2>
            <motion.h3
              layoutId={`company-${job.title}-${id}`}
              className="text-sm italic text-muted-foreground"
              key={`company-${job.title}-${id}`}
            >
              {job.company}
            </motion.h3>

            <motion.div
              layoutId={`description-${job.title}-${id}`}
              key={`description-${job.title}-${id}`}
            >
              {isPreview ? (
                <motion.p>{job.description.preview}</motion.p>
              ) : (
                <>
                  <motion.p>
                    {`${new Date(job.date.start).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })} - ${
                      job.date.end
                        ? new Date(job.date.end).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })
                        : "Present"
                    }
              `}
                  </motion.p>
                  <motion.p>{job.location}</motion.p>

                  <motion.p
                    className={`${isPreview ? "text-sm" : "pt-8 text-lg"} text-muted-foreground`}
                  >
                    {job.description.content}
                  </motion.p>
                </>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex items-center gap-4 p-6 pt-0"
          layoutId={`card-footer-${job.title}-${id}`}
          key={`card-footer-${job.title}-${id}`}
        >
          {isPreview && (
            <ShineButton onClick={() => props.setActive(job)}>
              <IoIosExpand className="text-lg" />
              View
            </ShineButton>
          )}
        </motion.div>
      </ScrollArea>
    </motion.article>
  );
}
