import ResumePage from "@/features/resume/components/ResumePage";

export const revalidate = 60 * 10;

export default function Page() {
  return <ResumePage />;
}
