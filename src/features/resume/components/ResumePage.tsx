"use client";

import { PDFViewer } from "./reactPDF/PDFView";
import Resume from "./reactPDF/Resume";

export default function ResumePage() {
  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Resume />
    </PDFViewer>
  );
}
