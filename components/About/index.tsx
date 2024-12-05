"use client";

import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";
import { useLanguage } from "app/context/languageContext"; // Assuming LanguageProvider is set up

const About = () => {
  const { language } = useLanguage(); // Get the current language

  // Define content for English and Arabic
  const content = {
    en: {
      title: "About Us",
      subtitle: "Company based in Riyadh, Saudi Arabia. Est in 2024.",
      description:
        "Sur AlTuriaq is a leading pharmaceutical wholesaler, providing high-quality, affordable medication to government hospitals. Our mission is to ensure the timely and reliable supply of essential medicines and dedicated patient care. We are committed to exceeding expectations and building strong, long-lasting relationships with our clients.",
      knowMore: "Know More",
    },
    ar: {
      title: "من نحن",
      subtitle: "شركة مقرها الرياض، المملكة العربية السعودية. تأسست في 2024.",
      description:
        "شركة سور الطريق هي موزع رائد للأدوية بالجملة، حيث تقدم أدوية عالية الجودة وبأسعار معقولة للمستشفيات الحكومية. مهمتنا هي ضمان توفير الأدوية الأساسية بشكل موثوق وفي الوقت المحدد ورعاية المرضى الم dedicated. نحن ملتزمون بتجاوز التوقعات وبناء علاقات قوية وطويلة الأمد مع عملائنا.",
      knowMore: "اعرف أكثر",
    },
  };

  return (
    <>
      <section id="features" className="pb-10 lg:pb-20 xl:pb-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: content[language].title,
              subtitle: content[language].subtitle,
              description: "", // You can leave it empty or add a description if needed
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div
            className={`flex items-center gap-8 lg:gap-32.5 ${
              language === "ar" ? "text-right" : "text-left"
            }`}
          >
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
              className="animate_left md:w-1/2"
            >
              <h2 className="relative mb-6 text-md leading-7 font-light text-black dark:text-white xl:text-md">
                <span className="font-bold text-lg">
                  {content[language].title}:
                </span>{" "}
                {content[language].description}
              </h2>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    {content[language].knowMore}
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
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
              className="animate_right relative mx-auto hidden aspect-[700/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/pexels-pavel-danilyuk-8442447.jpg"
                alt="About"
                className="dark:hidden rounded-3xl"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <Image
                src="/images/about/pexels-pavel-danilyuk-8442447.jpg"
                alt="About"
                className="hidden dark:block rounded-3xl"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
