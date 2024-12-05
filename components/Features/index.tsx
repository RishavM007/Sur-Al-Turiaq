"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import Link from "next/link";
import { useLanguage } from "app/context/LanguageContext"; // Import the language context

const Feature = () => {
  const { language } = useLanguage(); // Access current language (either 'en' or 'ar')

  return (
    <>
      {/* ===== Features Start ===== */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <SectionHeader
            headerInfo={{
              title: language === "ar" ? "منطقة التركيز" : "FOCUS AREA", // Toggle based on language
              subtitle: language === "ar" ? "العروض الدوائية الرئيسية" : "Key Pharmaceutical Offerings", // Toggle subtitle
              description: language === "ar"
                ? "من تطوير الأدوية الرائدة إلى العمليات التصنيعية المستدامة، نحن ملتزمون بتحسين صحة المرضى ورفاههم في جميع أنحاء العالم. منتجاتنا تلبي أعلى معايير السلامة والفعالية."
                : "From cutting-edge drug development to sustainable manufacturing processes, we are committed to enhancing patient health and well-being across the globe. Our products meet the highest standards of safety and efficacy.", // Toggle description
            }}
          />
          {/* Section Title End */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* Features item Start */}
            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} language={language} key={key} />
            ))}
            {/* Features item End */}
          </div>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center w-full mt-5 mb-5">
          <Link href="/focus">
            <button
              aria-label="get started button"
              className="flex rounded-full mt-10 bg-black px-7 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
            >
              {language === "ar" ? "تعرف أكثر" : "LEARN MORE"} {/* Toggle button text */}
            </button>
          </Link>
        </div>
      </section>
      {/* ===== Features End ===== */}
    </>
  );
};

export default Feature;
