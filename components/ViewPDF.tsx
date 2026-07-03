"use client";

import { Document, Page } from "react-pdf";
import "./pdfWorker"; // import worker setup
    
export default function ViewPDF({ filePath }: { filePath: string } ) {
  return (
    <div className = "w-full mx-auto">
        <Document file={filePath}>
            <Page 
            pageNumber={1} 
            renderAnnotationLayer={false}
            renderTextLayer={false}
            />

        </Document>
    </div>
    
  );
}





