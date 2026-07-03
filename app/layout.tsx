import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Aurora from "@/components/Aurora";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ken Duong Website",
  description: "Ken Duong's personal website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col dark">
        <div className="absolute inset-0 top-0 z-[-1] min-h-full">
          <Aurora
          colorStops={["#7cff67","#B497CF","#5227FF"]}
          blend={5}
          amplitude={0.5}
          speed={0.5}
          />
        </div>
        <main>
          {children} 
        </main>
      </body>
    </html>
  );
}
