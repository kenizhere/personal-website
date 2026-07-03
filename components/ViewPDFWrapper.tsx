"use client";
import dynamic from "next/dynamic";


const ViewPDF = dynamic(() => import('@/components/ViewPDF'), { 
  ssr: false,
  loading: () => <p>Loading PDF...</p>,
});

export default function ViewPDFWrapper({filePath}: {filePath: string}) {
    return <ViewPDF filePath={filePath} />;
}