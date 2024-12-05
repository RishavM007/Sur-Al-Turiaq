"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en")); // Toggle between English and Arabic
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <html dir={language === "ar" ? "rtl" : "ltr"}>
        {children}
      </html>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
