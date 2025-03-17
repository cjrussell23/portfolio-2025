"use client";
import ShineButton from "@/components/ShineButton";
import { IoIosExpand } from "react-icons/io";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { TbBrandGithub } from "react-icons/tb";

import { IoArrowBack, IoArrowForward, IoClose } from "react-icons/io5";
import { GithubRepo } from "../projects";
import Readme from "./Readme";

export function ProjectCards(props: { repos: GithubRepo[] }) {
  const { repos } = props;
  const [active, setActive] = useState<GithubRepo | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

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

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className="flex flex-col gap-4" id="projects">
      <h2>Projects</h2>
      <p className="text-muted-foreground">
        These are my public repositories pulled from my GitHub account using the
        GitHub API. This mostly contains projects that I worked on in my free
        time while I was in school and learning to code. The code quality may
        vary as I was learning new things and experimenting so it does not
        reflect my current coding style. However, I am proud of the work I did
        and it is still useful to look back on.
      </p>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/80"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.repo.id}-${id}`}
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
              <CloseIcon />
            </motion.button>
            <Project
              repo={active}
              id={id}
              ref={ref}
              isPreview={false}
              setActive={setActive}
              repos={repos}
            />
          </div>
        )}
      </AnimatePresence>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <Project
            key={repo.repo.name}
            repo={repo}
            id={id}
            setActive={setActive}
            isPreview={true}
          />
        ))}
      </div>
    </section>
  );
}

type ProjectProps =
  | {
      repo: GithubRepo;
      id: string;
      isPreview: true;
      setActive: (repo: GithubRepo | null) => void;
    }
  | {
      repo: GithubRepo;
      id: string;
      isPreview?: false;
      ref: React.RefObject<HTMLDivElement>;
      setActive: (repo: GithubRepo | null) => void;
      repos: GithubRepo[];
    };

function Project(props: ProjectProps) {
  const { repo, id, isPreview, setActive } = props;

  // Parse the readme an look for the first image tag
  let image: string | null = null;
  if (repo.readme.content) {
    const content = Buffer.from(repo.readme.content, "base64").toString(
      "utf-8",
    );
    const match = content.match(/!\[.*\]\((.*)\)/);
    if (match) {
      image = match[1];
    }
  }

  return (
    <motion.article
      layoutId={`card-${repo.repo.id}-${id}`}
      key={`card-${repo.repo.id}-${id}`}
      ref={isPreview ? null : props.ref}
      className="m-4 flex flex-col justify-between rounded-xl border bg-card text-card-foreground shadow md:max-w-screen-md"
    >
      <motion.div
        layoutId={`content-${repo.repo.id}-${id}`}
        key={`card-header-${repo.repo.id}-${id}`}
        className="flex flex-col space-y-1.5"
      >
        {isPreview && image && (
          <Image
            src={image}
            alt={repo.repo.name}
            width={200}
            height={200}
            className="h-52 w-full rounded-md object-cover object-top"
          />
        )}
        <motion.div
          layoutId={`image-${repo.repo.id}-${id}`}
          key={`card-header-${repo.repo.id}-${id}`}
          className="flex flex-col space-y-1.5 p-4"
        >
          <motion.h3
            layoutId={`title-${repo.repo.id}-${id}`}
            className="text-xl font-semibold leading-none tracking-tight"
          >
            {repo.repo.name}
          </motion.h3>
          <motion.div
            layoutId={`dates-${repo.repo.id}-${id}`}
            className={`flex gap-1 text-sm text-muted-foreground ${isPreview ? "items-center" : "flex-col"}`}
            key={`dates-${repo.repo.id}-${id}`}
          >
            <div className="flex gap-1">
              {!isPreview && (
                <p className="text-sm text-muted-foreground">Created:</p>
              )}
              <motion.span
                layoutId={`created-${repo.repo.id}-${id}`}
                key={`created-${repo.repo.id}-${id}`}
              >
                {new Date(repo.repo.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </motion.span>
            </div>
            {!isPreview && (
              <div className="flex gap-1">
                <p className="text-sm text-muted-foreground">Last Updated:</p>
                <motion.span
                  layoutId={`updated-${repo.repo.id}-${id}`}
                  key={`updated-${repo.repo.id}-${id}`}
                >
                  {new Date(repo.repo.updated_at).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </motion.span>
              </div>
            )}
          </motion.div>
          <motion.div
            layoutId={`tags-${repo.repo.id}-${id}`}
            className="flex flex-wrap items-start gap-1"
            key={`tags-${repo.repo.id}-${id}`}
          >
            {repo.repo.topics
              .filter((topic, index, arr) => {
                if (isPreview) {
                  const totalChars = arr
                    .slice(0, index + 1)
                    .reduce((acc, t) => acc + t.length, 0);
                  return totalChars <= 50;
                }
                return true;
              })
              .map((topic) => (
                <Badge
                  variant={"outline"}
                  key={topic}
                  className="bg-background"
                >
                  {topic}
                </Badge>
              ))}
          </motion.div>
          <motion.p
            layoutId={`description-${repo.repo.id}-${id}`}
            className="text-sm text-muted-foreground"
            key={`description-${repo.repo.id}-${id}`}
          >
            {isPreview &&
              repo.repo.description &&
              (repo.repo.description.length > 80
                ? `${repo.repo.description.substring(0, 80)}...`
                : repo.repo.description)}
          </motion.p>
        </motion.div>

        <motion.div
          className={`flex items-center justify-center p-2 pb-6 pt-0 md:p-6`}
          layoutId={`card-content-${repo.repo.id}-${id}`}
          key={`card-content-${repo.repo.id}-${id}`}
        >
          {repo.readme.content && (
            <ScrollArea
              className={`${!isPreview ? "h-[calc(100vh-20rem)]" : null}`}
            >
              {repo.readme.content && !isPreview ? (
                <div className="max-w-full rounded-md bg-background/80 p-4">
                  <Readme base64content={repo.readme.content} />
                </div>
              ) : null}
            </ScrollArea>
          )}
        </motion.div>
      </motion.div>
      <motion.div
        className={`flex gap-4 p-6 pt-0 ${isPreview ? "items-center" : "flex-col"}`}
        layoutId={`card-footer-${repo.repo.id}-${id}`}
        key={`card-footer-${repo.repo.id}-${id}`}
      >
        {isPreview ? (
          <>
            <ShineButton onClick={() => props.setActive(repo)}>
              <IoIosExpand className="text-lg" />
              View
            </ShineButton>
            {repo.repo.homepage && (
              <Link
                href={repo.repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShineButton>
                  <CiGlobe className="text-lg" />
                  Live
                </ShineButton>
              </Link>
            )}
          </>
        ) : (
          <>
            <div className="flex gap-4">
              {repo.repo.homepage && (
                <Link
                  href={repo.repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShineButton>
                    <CiGlobe className="text-lg" />
                    Live
                  </ShineButton>
                </Link>
              )}
              <Link
                href={repo.repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShineButton>
                  <TbBrandGithub className="text-lg" />
                  Source
                </ShineButton>
              </Link>
            </div>
            <div className="flex justify-between gap-4">
              <ShineButton onClick={() => setActive(null)}>
                <IoClose className="text-lg" />
                Close
              </ShineButton>
              <div className="flex gap-4">
                <ShineButton
                  onClick={() =>
                    setActive(
                      props.repos[
                        (props.repos.indexOf(repo) + props.repos.length - 1) %
                          props.repos.length
                      ],
                    )
                  }
                >
                  <IoArrowBack className="text-lg" />
                  Previous
                </ShineButton>
                <ShineButton
                  onClick={() =>
                    setActive(
                      props.repos[
                        (props.repos.indexOf(repo) + 1) % props.repos.length
                      ],
                    )
                  }
                >
                  Next
                  <IoArrowForward className="text-lg" />
                </ShineButton>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </motion.article>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
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
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
