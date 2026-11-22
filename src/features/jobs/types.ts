import type { ReactNode } from "react";

export type Job = {
  title: string;
  company: string;
  date: { start: Date; end: Date | null };
  description: { content: ReactNode; preview: string };
  image: { src: string; alt: string; width: number; height: number };
};
