import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Prisha Priyadarshini",
  description: "AI Researcher & Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16 md:py-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
