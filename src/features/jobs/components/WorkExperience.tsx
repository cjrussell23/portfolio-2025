import { TimelineModal } from "@/features/jobs/components/TimelineModal";
import { getResume } from "@/features/resume/jobAiResume";
import { jobsFromResume } from "../fromResume";

export default async function WorkExperience() {
  const resume = await getResume();
  return (
    <TimelineModal
      data={jobsFromResume(resume)}
      title="Work Experience"
      id="work-experience"
    />
  );
}
