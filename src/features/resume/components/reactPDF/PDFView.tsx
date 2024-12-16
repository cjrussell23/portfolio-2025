import dynamic from "next/dynamic";

export const PDFViewer = dynamic(() => import("./ReactPDFViewerExporter"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex items-end gap-2">
        <span className="text-4xl font-bold">Loading Resume</span>
        <div className="mb-1.5 h-2 w-2 animate-bounce rounded-full bg-foreground [animation-delay:-0.3s]"></div>
        <div className="mb-1.5 h-2 w-2 animate-bounce rounded-full bg-foreground [animation-delay:-0.13s]"></div>
        <div className="mb-1.5 h-2 w-2 animate-bounce rounded-full bg-foreground"></div>
      </div>
    </div>
  ),
});
