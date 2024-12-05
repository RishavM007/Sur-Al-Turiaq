"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "app/context/LanguageContext"; // Importing language context

const CTA = () => {
  const { language } = useLanguage(); // Get current language

  // Define content for English and Arabic
  const content = {
    en: {
      heading: "Partner With Us for Better Healthcare Solutions",
      description:
        "Discover innovative pharmaceutical advancements and high-quality medicines that improve lives worldwide. Join us in shaping a healthier future for all.",
      phoneNumber: "+966-533-636-592",
    },
    ar: {
      heading: "شراكة معنا من أجل حلول رعاية صحية أفضل",
      description:
        "اكتشف التطورات الصيدلانية المبتكرة والأدوية عالية الجودة التي تحسن حياة الناس في جميع أنحاء العالم. انضم إلينا في تشكيل مستقبل صحي للجميع.",
      phoneNumber: "+966-533-636-592",
    },
  };

  return (
    <>
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2
                className={`mb-4 w-11/12 text-3xl font-bold ${
                  language === "ar" ? "text-right" : "text-left"
                } text-black dark:text-white xl:text-sectiontitle4`}
              >
                {content[language].heading}
              </h2>
              <p
                className={`${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {content[language].description}
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">
                <Image
                  width={299}
                  height={299}
                  src="/images/shape/shape-06.png"
                  alt="Saly"
                  className="hidden xl:block"
                />
                <a
                  href={`tel:${content[language].phoneNumber}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                >
                  {content[language].phoneNumber}
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-dark.svg"
                    alt="Arrow"
                    className="dark:hidden"
                  />
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-light.svg"
                    alt="Arrow"
                    className="hidden dark:block"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
