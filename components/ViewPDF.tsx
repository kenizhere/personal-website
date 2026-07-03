"use client";

import { Document, Page } from "react-pdf";
import "./pdfWorker"; // import worker setup
    
export default function ViewPDF({ filePath }: { filePath: string } ) {
  return (
    <Document file={filePath}>
      <Page pageNumber={1} />
    </Document>
  );
}





