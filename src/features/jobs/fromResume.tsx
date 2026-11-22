import {
  type JobAiResume,
  sectionEntries,
} from "@/features/resume/jobAiResume";
import type { Job } from "./types";

/** "Jan 2026", "2026" or "Present" as a date; null for "Present" or anything unreadable. */
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

// Mid-month at noon UTC, so no timezone can shift the month when the page is rendered.
function parseDate(text: string): Date | null {
  const t = text.trim().toLowerCase();
  if (!t || /present|current/.test(t)) return null;
  const year = t.match(/\b(19|20)\d{2}\b/)?.[0];
  if (!year) return null;
  const month = Math.max(0, months.findIndex((m) => t.startsWith(m)));
  return new Date(Date.UTC(Number(year), month, 15, 12));
}

const images: [RegExp, string, number, number][] = [
  [/junior/i, "/images/jrWebDeveloper.jpg", 1400, 788],
  [/technician/i, "/images/itTechnician.jpeg", 1400, 788],
  [/^web developer/i, "/images/webDeveloper.jpg", 1400, 788],
];

function imageFor(title: string): Job["image"] {
  const [, src, width, height] = images.find(([re]) => re.test(title)) ?? [
    null,
    "/images/fullStackDeveloper.jpg",
    1400,
    788,
  ];
  return { src, alt: title, width, height };
}

/** The resume's roles as timeline cards, newest first, in the resume's own words. */
export function jobsFromResume(resume: JobAiResume): Job[] {
  return sectionEntries(resume, "experience").map((entry) => {
    const [start = "", end = ""] = entry.dates.split(/\s+[–-]\s+/);
    return {
      title: entry.title,
      company: entry.subtitle,
      date: { start: parseDate(start) ?? new Date(), end: parseDate(end) },
      description: {
        preview: entry.lines[0] ?? "",
        content: (
          <ul className="flex list-disc flex-col gap-2 pl-5">
            {entry.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ),
      },
      image: imageFor(entry.title),
    };
  });
}
