"use client";

import { TimelineModal } from "@/features/jobs/components/TimelineModal";
import { jobs } from "../../../lib/content/jobs";

export default function WorkExperience() {
  return (
    <TimelineModal
      data={Object.values(jobs).map((job) => {
        return job;
      })}
      title="Work Experience"
      id="work-experience"
    />
  );
}
