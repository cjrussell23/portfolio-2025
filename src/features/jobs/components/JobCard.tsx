"use client";
import ShineButton from "@/components/ShineButton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
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
          <Image
            src={job.image.src}
            alt={job.image.alt}
            width={job.image.width}
            height={job.image.height}
            className="aspect-video w-full rounded-t-xl object-cover object-top"
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
              className="text-sm text-muted-foreground"
              key={`company-${job.title}-${id}`}
            >
              {job.company}
            </motion.h3>

            <motion.div
              layoutId={`dates-${job.title}-${id}`}
              className={`flex gap-1 text-sm text-muted-foreground`}
              key={`dates-${job.title}-${id}`}
            >
              {!isPreview &&
                `${new Date(job.date.start).toLocaleDateString("en-US", {
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
            </motion.div>

            <motion.div
              layoutId={`location-${job.title}-${id}`}
              className="text-sm text-muted-foreground"
              key={`location-${job.title}-${id}`}
            >
              {!isPreview && job.location}
            </motion.div>

            <motion.ul
              className={`${isPreview ? "" : "mt-4"} flex flex-col gap-4`}
              layoutId={`card-content-${job.title}-${id}`}
              key={`card-content-${job.title}-${id}`}
            >
              <motion.li
                className={`${isPreview ? "text-muted-foreground" : "flex flex-col gap-2 rounded-xl border p-4"} `}
              >
                {isPreview ? (
                  job.description.content
                ) : (
                  <>
                    <job.description.icon className="text-3xl" />
                    <span className="text-muted-foreground">
                      {job.description.content}
                    </span>
                  </>
                )}
              </motion.li>
              {!isPreview &&
                job.points.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <motion.li
                      key={index}
                      className="flex flex-col gap-2 rounded-xl border p-4"
                      initial={{ x: -500, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                    >
                      <Icon className="text-3xl" />
                      <span className="text-muted-foreground">
                        {point.content}
                      </span>
                    </motion.li>
                  );
                })}
            </motion.ul>
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
