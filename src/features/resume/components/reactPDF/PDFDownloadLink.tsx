"use client";

import ShineButton from "@/components/ShineButton";
import { useIsClient } from "@/hooks/use-is-client";
import { useIsMobile } from "@/hooks/use-mobile";
import { PDFDownloadLink as ReactPDFDownloadLink } from "@react-pdf/renderer";
import { Link } from "next-view-transitions";
import Resume from "./Resume";

export default function PDFDownloadLink({
  children,
  download,
}: {
  children: React.ReactNode;
  download: boolean;
}) {
  const isMobile = useIsMobile();
  const isClient = useIsClient();
  if (!isMobile && !download) {
    return (
      <Link href={"/resume"}>
        <ShineButton>{children}</ShineButton>
      </Link>
    );
  }
  if (!isClient) return null;
  return (
    <ReactPDFDownloadLink
      document={<Resume />}
      fileName="charles_russell_resume.pdf"
      className="group/button relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-md border border-foreground bg-background px-2 py-1 text-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary/30 md:px-3"
    >
      {children}
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-foreground/20" />
      </div>
    </ReactPDFDownloadLink>
  );
}
