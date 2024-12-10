"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useLanguage } from "app/context/LanguageContext";
import { Metadata } from "next"; 

export const metadata: Metadata = {
  title: "Partnership - SATPCO",
  description: "At the core of our business lies a commitment to building strong, lasting partnerships with industry leaders, stakeholders, and communities",
 
};

const PartnershipPage = () => {
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
      title: "Our Partnership",
      intro: "At the core of our business lies a commitment to building strong, lasting partnerships with industry leaders, stakeholders, and communities. We aim to work collaboratively to achieve mutual goals and create innovative solutions.",
      location: "Based in Riyadh, Saudi Arabia, our partnerships span across various industries, from technology to healthcare, ensuring that we provide cutting-edge services while fostering growth and social impact.",
      invitation: "We invite pharmaceutical manufacturers and distributors to explore partnership opportunities with Sur AlTuriaq. By collaborating with us, you can:",
      keyPartnerships: [
        "Expand Your Market Reach: Access a wider customer base through our extensive network of government hospital clients.",
        "Enhance Supply Chain Efficiency: Benefit from our established logistics network, ensuring timely and reliable delivery of essential medications.",
        "Collaborate on Product Innovation: Work with us to develop and distribute high-quality, affordable medications that meet the needs of patients and healthcare providers.",
        "Leverage Government Connections: Gain access to valuable partnerships with government hospitals and healthcare organizations."
      ]
    },
    ar: {
      title: "شراكتنا",
      intro: "في صميم أعمالنا يكمن الالتزام ببناء شراكات قوية ودائمة مع قادة الصناعة وأصحاب المصلحة والمجتمعات. نهدف إلى العمل بشكل تعاوني لتحقيق الأهداف المشتركة وخلق حلول مبتكرة.",
      location: "مقرها في الرياض، المملكة العربية السعودية، تمتد شراكاتنا عبر صناعات مختلفة، من التكنولوجيا إلى الرعاية الصحية، مما يضمن تقديم خدمات مبتكرة مع تعزيز النمو والتأثير الاجتماعي.",
      invitation: "ندعو الشركات المصنعة والموزعين للأدوية لاستكشاف فرص الشراكة مع سور الطريق. من خلال التعاون معنا، يمكنك:",
      keyPartnerships: [
        "توسيع نطاق وصولك إلى السوق: الوصول إلى قاعدة عملاء واسعة من خلال شبكة عملائنا في المستشفيات الحكومية.",
        "تعزيز كفاءة سلسلة الإمداد: الاستفادة من شبكة اللوجستيات القائمة لدينا، مما يضمن تسليم الأدوية الأساسية في الوقت المحدد وموثوق به.",
        "التعاون في ابتكار المنتجات: العمل معنا لتطوير وتوزيع الأدوية عالية الجودة وبأسعار معقولة التي تلبي احتياجات المرضى ومقدمي الرعاية الصحية.",
        "الاستفادة من العلاقات الحكومية: الوصول إلى شراكات قيمة مع المستشفيات الحكومية والمنظمات الصحية."
      ]
    }
  };

  const currentTranslation = translations[language] || translations.en; // Default to English if language not found

  return (
    <>
      {/* ===== Partnership Section Start ===== */}
      <section id="partnership" className="px-4 md:px-8 2xl:px-0 py-30">
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
                {currentTranslation.location}
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
              <h3 className="mb-4 text-lg font-light text-black dark:text-white">
                {currentTranslation.invitation}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[15px] my-10 text-gray-700 dark:text-gray-300">
                {currentTranslation.keyPartnerships.map((partnership, index) => (
                  <li key={index}>
                    <span className="font-bold text-lg">{partnership.split(":")[0]}</span>
                    {partnership.split(":")[1]}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnershipPage;
