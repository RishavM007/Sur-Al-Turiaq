'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "app/context/LanguageContext";


const StrategyPage = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const { language } = useLanguage(); // Get the current language from context

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const translations = {
    en: {
      header: {
        title: "Strategic Focus",
        description:
          "Our approach integrates advanced technologies, fosters collaboration, and upholds the highest standards of quality to address modern challenges and drive impactful solutions globally.",
      },
      strategies: [
        {
          id: 1,
          logo: "/images/icon/bullhorns.png",
          title: "Market Analysis",
          description: "In-depth research to identify opportunities and challenges.",
        },
        {
          id: 2,
          logo: "/images/icon/insight.png",
          title: "Customer Insights",
          description: "Understanding customer needs to craft effective solutions.",
        },
        {
          id: 3,
          logo: "/images/icon/task.png",
          title: "Innovation Planning",
          description: "Designing forward-thinking strategies for sustained growth.",
        },
        {
          id: 4,
          logo: "/images/icon/assessment.png",
          title: "Risk Assessment",
          description: "Identifying and mitigating potential risks proactively.",
        },
        {
          id: 5,
          logo: "/images/icon/execution.png",
          title: "Execution Excellence",
          description: "Implementing strategies with precision and agility.",
        },
      ],
    },
    ar: {
      header: {
        title: "التركيز الاستراتيجي",
        description:
          "نهجنا يدمج التكنولوجيا المتقدمة، ويعزز التعاون، ويحافظ على أعلى معايير الجودة للتصدي للتحديات الحديثة ودفع الحلول المؤثرة عالميًا.",
      },
      strategies: [
        {
          id: 1,
          logo: "/images/icon/bullhorns.png",
          title: "تحليل السوق",
          description: "بحث متعمق لتحديد الفرص والتحديات.",
        },
        {
          id: 2,
          logo: "/images/icon/insight.png",
          title: "رؤى العملاء",
          description: "فهم احتياجات العملاء لصياغة حلول فعالة.",
        },
        {
          id: 3,
          logo: "/images/icon/task.png",
          title: "تخطيط الابتكار",
          description: "تصميم استراتيجيات تفكير مستقبلية للنمو المستدام.",
        },
        {
          id: 4,
          logo: "/images/icon/assessment.png",
          title: "تقييم المخاطر",
          description: "تحديد وتخفيف المخاطر المحتملة بشكل استباقي.",
        },
        {
          id: 5,
          logo: "/images/icon/execution.png",
          title: "تنفيذ التميز",
          description: "تنفيذ الاستراتيجيات بدقة ومرونة.",
        },
      ],
    },
  };

  const currentTranslation = translations[language] || translations.en; // Default to English if language is not found

  return (
    <section className="relative flex flex-col items-center py-30 px-8 bg-gradient-to-t from-transparent to-[#dee7ff47] dark:from-gray-800 dark:to-gray-900">
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

      {/* Header */}
      <motion.header
        className="text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          {currentTranslation.header.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-3 mx-52">
          {currentTranslation.header.description}
        </p>
      </motion.header>

      {/* Cards Section */}
      <div className="flex flex-col gap-6 w-11/12 max-w-4xl">
        {currentTranslation.strategies.map((strategy, index) => (
          <motion.div
            key={strategy.id}
            className="flex items-center bg-white dark:bg-gray-800 shadow-xl rounded-lg px-6 py-6 w-4/5 mx-auto transform hover:scale-[1.05] transition-transform duration-500 ease-out"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            {/* Logo */}
            <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-gradient-to-tr from-blue-400 to-blue-600 p-2 shadow-md">
              <Image
                src={strategy.logo}
                alt={`${strategy.title} Logo`}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            {/* Text Content */}
            <div className="ml-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {strategy.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {strategy.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StrategyPage;
