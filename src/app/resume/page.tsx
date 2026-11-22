import { getResume } from "@/features/resume/jobAiResume";
import { redirect } from "next/navigation";

export const revalidate = 300;

/** The resume PDF lives in job-ai; this address keeps old links working. */
export default async function ResumePage() {
  const resume = await getResume();
  redirect(resume.pdfUrl);
}
