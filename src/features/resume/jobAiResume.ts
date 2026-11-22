import { z } from "zod";

/**
 * The resume Charles keeps in job-ai, shared through its public link. The site shows it
 * instead of a copy of its own, so the two never drift apart.
 */
export const RESUME_URL =
  process.env.JOB_AI_RESUME_URL ??
  "https://jobs.chjrussell.com/api/public/resumes/1QPn48neKQbM8MTseyy5h0lkexng5i8j4YAlSLPvMQA";

const entrySchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  dates: z.string(),
  url: z.string().nullable(),
  lines: z.array(z.string()),
});

const resumeSchema = z.object({
  name: z.string(),
  summary: z.string(),
  sections: z.array(
    z.object({
      heading: z.string(),
      key: z.string().nullable(),
      groupByEmployer: z.boolean(),
      entries: z.array(entrySchema),
    }),
  ),
  skillsHeading: z.string(),
  skills: z.array(z.string()),
  updatedAt: z.string(),
  pdfUrl: z.string().url(),
});

export type ResumeEntry = z.infer<typeof entrySchema>;
export type JobAiResume = z.infer<typeof resumeSchema>;

/**
 * Throws when job-ai can't be reached, so a failed refresh keeps the last good page
 * rather than publishing an empty one.
 */
export async function getResume(): Promise<JobAiResume> {
  const response = await fetch(RESUME_URL, { next: { revalidate: 300 } });
  if (!response.ok) throw new Error(`job-ai resume: HTTP ${response.status}`);
  return resumeSchema.parse(await response.json());
}

export function sectionEntries(
  resume: JobAiResume,
  key: string,
): ResumeEntry[] {
  return resume.sections.find((s) => s.key === key)?.entries ?? [];
}
