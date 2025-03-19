"use client";

import { exo2 } from "@/app/fonts";
import ShineButton from "@/components/ShineButton";
import { useIsClient } from "@/hooks/use-is-client";
import { Link } from "next-view-transitions";
import { isMobile } from "react-device-detect";
import { IoArrowBack } from "react-icons/io5";
import { TbDownload } from "react-icons/tb";
import PDFDownloadLink from "./reactPDF/PDFDownloadLink";
import { PDFViewer } from "./reactPDF/PDFView";
import Resume from "./reactPDF/Resume";

export default function ResumePage() {
  const isClient = useIsClient();
  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between border-b border-border bg-background px-6 py-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className={`flex items-center gap-2 ${exo2.className}`}
          >
            <div className="flex size-8 items-center justify-center rounded-full bg-card text-card-foreground">
              C
            </div>
            <span className="font-medium">Charles Russell</span>
          </Link>
        </div>
        {!isMobile && isClient && (
          <PDFDownloadLink download={true}>
            <TbDownload />
            Download PDF
          </PDFDownloadLink>
        )}
      </header>

      <div className="flex-1">
        {isMobile && isClient ? (
          <div className="flex flex-col gap-4 p-6">
            <h1>PDF Preview is not available on mobile devices</h1>
            <p>
              To view the resume, please download the PDF using the link below.
            </p>
            <div className="flex gap-4">
              <PDFDownloadLink download={true}>
                <TbDownload />
                Download PDF
              </PDFDownloadLink>
              <Link href="/">
                <ShineButton>
                  <IoArrowBack />
                  Back
                </ShineButton>
              </Link>
            </div>
          </div>
        ) : (
          <PDFViewer
            style={{ width: "100%", height: "100%" }}
            showToolbar={false}
          >
            <Resume />
          </PDFViewer>
        )}
      </div>
    </div>
  );
}
