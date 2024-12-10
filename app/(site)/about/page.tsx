"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useLanguage } from "app/context/LanguageContext"; 
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - SATPCO",
  description: "Discover more about SATPCO",
 
};

const AboutUs = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const { language } = useLanguage(); // Get the current language from context

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  // Translations object for multiple languages
  const translations = {
    en: {
      title: "About Us",
      intro: "Welcome to our company! We are committed to providing innovative solutions and exceptional services to our customers.",
      history: "was founded in 2024 with a vision to become a trusted partner for government hospitals. Our journey began with a simple yet ambitious goal: to provide reliable access to essential medication. Over the years, we have grown into a leading pharmaceutical wholesaler, driven by our unwavering commitment to quality, patient care, and ethical business practices.",
      missionTitle: "Our Mission",
      mission: "To be the preferred pharmaceutical wholesaler for government hospitals, delivering superior products and services",
      visionTitle: "Our Vision",
      vision: "To enhance healthcare outcomes by ensuring the availability and affordability of essential medications.",
      valuesTitle: "Our Values",
      values: {
        integrity: "Integrity - We conduct our business with honesty, transparency, and ethical principles",
        quality: "Quality - We are committed to delivering high-quality products and services",
        customerFocus: "Customer Focus - We prioritize the needs of our clients and strive to exceed their expectations",
        reliability: "Reliability - We ensure timely and reliable deliveries"
      }
    },

    ar: {
      title: "من نحن",
      intro: "مرحباً بكم في شركتنا! نحن ملتزمون بتقديم حلول مبتكرة وخدمات استثنائية لعملائنا.",
      history: "تم تأسيس شركة سور الطريق في عام 2024 برؤية أن نصبح شريكًا موثوقًا للمستشفيات الحكومية. بدأت رحلتنا بهدف بسيط ولكنه طموح: توفير وصول موثوق إلى الأدوية الأساسية. على مر السنين، أصبحنا تاجر جملة رائد للأدوية، مدفوعين بإلتزامنا الثابت بالجودة ورعاية المرضى والممارسات التجارية الأخلاقية.",
      missionTitle: "مهمتنا",
      mission: "أن نكون المورد المفضل للأدوية للمستشفيات الحكومية، من خلال تقديم منتجات وخدمات متميزة",
      visionTitle: "رؤيتنا",
      vision: "تحسين نتائج الرعاية الصحية من خلال ضمان توفر الأدوية الأساسية وبأسعار معقولة.",
      valuesTitle: "قيمنا",
      values: {
        integrity: "النزاهة - نعمل في أعمالنا بأمانة وشفافية ومبادئ أخلاقية",
        quality: "الجودة - نحن ملتزمون بتقديم منتجات وخدمات عالية الجودة",
        customerFocus: "التركيز على العميل - نحن نضع احتياجات عملائنا في المقام الأول ونسعى لتجاوز توقعاتهم",
        reliability: "الاعتمادية - نضمن تسليم المنتجات في الوقت المحدد وبشكل موثوق"
      }
    }
  };

  const currentTranslation = translations[language] || translations.en; // Default to English if language not found

  return (
    <>
      {/* ===== About Us Section Start ===== */}
      <section id="about" className="px-4 md:px-8 2xl:px-0 py-30">
        <div className="relative mx-auto max-w-c-1390 px-8 pt-12 lg:pt-16 xl:pt-20">
          {/* Background Gradient */}
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>

          {/* Decorative Background Images */}
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="/images/shape/shape-dotted-light.svg"
              alt="Light Dotted Shape"
              className="dark:hidden"
              fill
              priority
            />
            <Image
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dark Dotted Shape"
              className="hidden dark:block"
              fill
              priority
            />
          </div>           

          {/* Main Content */}
          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:justify-between xl:gap-20">
            {/* Text Content */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full rounded-lg bg-white p-8 shadow-md dark:bg-black md:w-3/5 lg:w-3/4 xl:p-12"
            >
              <h2 className="mb-6 text-3xl font-semibold text-black dark:text-white xl:text-4xl">
                {currentTranslation.title}
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {currentTranslation.intro}
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <span className="font-bold text-xl">Sur AlTuriaq </span> {currentTranslation.history}
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full rounded-lg bg-white p-8 shadow-md dark:bg-black md:w-3/5 lg:w-3/4 xl:p-12"
            >
               <div className="flex flex-col items-center">
                <h2 className="mt-6 text-2xl font-semibold text-black dark:text-white xl:text-3xl text-center">
                  {currentTranslation.missionTitle}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300 mx-10 text-center">
                  {currentTranslation.mission}
                </p>
                <h2 className="mt-6 text-2xl font-semibold text-black dark:text-white xl:text-3xl text-center">
                  {currentTranslation.visionTitle}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300 mx-10 text-center">
                  {currentTranslation.vision}
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full rounded-lg bg-white p-8 shadow-md dark:bg-black md:w-3/5 lg:w-3/4 xl:p-12"
            >
              <div className="flex flex-col items-center">
                <h1 className="mt-6 mb-10 text-3xl font-semibold text-black dark:text-white xl:text-4xl">
                  {currentTranslation.valuesTitle}
                </h1>
                {Object.keys(currentTranslation.values).map((key) => (
                  <div key={key}>
                    <h2 className="mt-6 text-2xl font-light text-black dark:text-white xl:text-3xl text-center">
                      {currentTranslation.values[key].split(' - ')[0]}
                    </h2>
                    <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300 mx-10 text-center">
                      {currentTranslation.values[key].split(' - ')[1]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== About Us Section End ===== */}
    </>
  );
};

export default AboutUs;
