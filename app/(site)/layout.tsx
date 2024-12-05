"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "app/context/LanguageContext";
import LanguageToggleButton from "@/components/LanguageToggleButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
          <LanguageProvider>
            <Lines />
            <Header />
            <div className="relative">
              <div className="absolute top-20 right-6">
                <LanguageToggleButton />
              </div>
            </div>
            {children}
            <Footer />
            <ScrollToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
