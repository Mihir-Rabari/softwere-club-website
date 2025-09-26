import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimationProvider from "@/components/animation/AnimationProvider";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import ThemeScript from "@/components/theme/ThemeScript";
import InitialLoader from "@/components/loading/InitialLoader";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Club | Where Coding Meets Creativity",
  description:
    "Official website of the Software Club — events, projects, committee, and opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-accent/30 selection:text-accent-foreground`}
      >
        <SmoothCursor />
        <InitialLoader />
        <AnimationProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
