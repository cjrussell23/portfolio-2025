"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { isMobile } from "react-device-detect";
import { PDFViewer } from "./reactPDF/PDFView";
import Resume from "./reactPDF/Resume";

export default function ResumePage() {
  if (isMobile) {
    return (
      <div className="flex size-full flex-col gap-4 p-6">
        <h1>PDF Preview is not available on mobile devices</h1>
        <p>To view the resume, please download the PDF using the link below.</p>
        <PDFDownloadLink
          document={<Resume />}
          fileName="charles_russell_resume.pdf"
          className="mt-2 w-fit rounded-md bg-primary px-4 py-2 text-white"
        >
          Download Resume PDF
        </PDFDownloadLink>
      </div>
    );
  }
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Resume />
    </PDFViewer>
  );
}
