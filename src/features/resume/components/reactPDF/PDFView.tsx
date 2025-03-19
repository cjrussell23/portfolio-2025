import dynamic from "next/dynamic";

export const PDFViewer = dynamic(() => import("./ReactPDFViewerExporter"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex items-end gap-2">
        <span className="text-xl font-bold md:text-4xl">Generating Resume</span>
        <div className="mb-1.5 size-1 animate-bounce rounded-full bg-foreground [animation-delay:-0.3s] md:size-2"></div>
        <div className="mb-1.5 size-1 animate-bounce rounded-full bg-foreground [animation-delay:-0.13s] md:size-2"></div>
        <div className="mb-1.5 size-1 animate-bounce rounded-full bg-foreground md:size-2"></div>
      </div>
    </div>
  ),
});
