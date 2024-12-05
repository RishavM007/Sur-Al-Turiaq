"use client";

import { useLanguage } from "app/context/LanguageContext";

const LanguageToggleButton = () => {
  const { toggleLanguage, language } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="toggle-language"
      className="px-1 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
    >
      {language === "en" ? "العربية" : "English"}
    </button>
  );
};

export default LanguageToggleButton;
