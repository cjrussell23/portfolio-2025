import {
  getResume,
  type ResumeEntry,
  sectionEntries,
} from "@/features/resume/jobAiResume";
import { TbExternalLink } from "react-icons/tb";

function WorkCard({ entry }: { entry: ResumeEntry }) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border bg-card p-6 text-card-foreground shadow">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold leading-tight">{entry.title}</h3>
        <p className="text-sm text-muted-foreground">
          {[entry.subtitle, entry.dates].filter(Boolean).join(" · ")}
        </p>
      </div>
      <ul className="flex list-disc flex-col gap-2 pl-5 text-muted-foreground">
        {entry.lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      {entry.url && (
        <a
          href={entry.url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto flex items-center gap-2 text-sm font-medium hover:underline"
        >
          <TbExternalLink />{" "}
          {entry.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </a>
      )}
    </article>
  );
}

/** The projects on Charles's job-ai resume: work projects first, then personal ones. */
export default async function FeaturedWork() {
  const resume = await getResume();
  const entries = [
    ...sectionEntries(resume, "workProjects"),
    ...sectionEntries(resume, "personalProjects"),
  ];
  if (entries.length === 0) return null;
  return (
    <section className="flex flex-col gap-4" id="featured-work">
      <h2>Featured Work</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {entries.map((entry) => (
          <WorkCard key={entry.title} entry={entry} />
        ))}
      </div>
    </section>
  );
}
