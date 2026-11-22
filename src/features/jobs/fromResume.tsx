import {
  type JobAiResume,
  sectionEntries,
} from "@/features/resume/jobAiResume";
import type { Job } from "./types";

/** "Jan 2026", "2026" or "Present" as a date; null for "Present" or anything unreadable. */
function parseDate(text: string): Date | null {
  const t = text.trim();
  if (!t || /present|current/i.test(t)) return null;
  if (/^\d{4}$/.test(t)) return new Date(Number(t), 0, 1);
  const d = new Date(`1 ${t}`);
  return Number.isNaN(d.getTime()) ? null : d;
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
