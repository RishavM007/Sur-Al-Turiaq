"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "app/context/languageContext"; // Import the useLanguage hook

const CareerPage = () => {
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
      title: "Join Our Team",
      intro: "We’re always looking for passionate and talented people to join our team and make a real impact.",
      opportunities: "Career Opportunities",
      description: "At our company, we are driven by innovation and a commitment to excellence. Our team is made up of passionate individuals who are constantly seeking new challenges and making a real impact in their respective fields.",
      disciplines: "We offer career opportunities across a wide range of disciplines, from technology to creative design, marketing, and customer service.",
      nextStep: "Ready to take the next step in your career? Join us and help shape the future!",
      connect: "Connect With Us",
      cultureTitle: "Company Culture",
      cultureDescription: "Sur AlTuriaq fosters a positive and collaborative work environment. We value our employees and offer a range of benefits and opportunities for professional growth. Our company culture is characterized by:",
      values: {
        collaboration: "Collaboration - We believe in the power of teamwork and collaboration.",
        growth: "Growth - We support our employees' growth and development.",
        innovation: "Innovation - We encourage creative thinking and new ideas.",
      }
    },
    ar: {
      title: "انضم إلى فريقنا",
      intro: "نحن دائمًا نبحث عن أشخاص موهوبين ومتحمسين للانضمام إلى فريقنا وإحداث تأثير حقيقي.",
      opportunities: "فرص العمل",
      description: "في شركتنا، نحن مدفوعون بالابتكار والالتزام بالتميز. فريقنا مكون من أفراد متحمسين يسعون دائمًا إلى التحديات الجديدة ويحققون تأثيرًا حقيقيًا في مجالاتهم.",
      disciplines: "نقدم فرصًا وظيفية في مجموعة واسعة من التخصصات، من التكنولوجيا إلى التصميم الإبداعي، والتسويق، وخدمة العملاء.",
      nextStep: "هل أنت مستعد للخطوة التالية في حياتك المهنية؟ انضم إلينا وساعدنا في تشكيل المستقبل!",
      connect: "اتصل بنا",
      cultureTitle: "ثقافة الشركة",
      cultureDescription: "تتمتع شركة سور الطريق ببيئة عمل إيجابية وتعاونية. نحن نقدر موظفينا ونقدم مجموعة من الفوائد وفرص النمو المهني. ثقافة شركتنا تتميز بـ:",
      values: {
        collaboration: "التعاون - نؤمن بقوة العمل الجماعي والتعاون.",
        growth: "النمو - نحن ندعم نمو موظفينا وتطورهم.",
        innovation: "الابتكار - نشجع التفكير الإبداعي والأفكار الجديدة.",
      }
    }
  };

  const currentTranslation = translations[language] || translations.en; // Default to English if language not found

  return (
    <motion.section
      className="py-20 mt-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Career Section Header */}
      <motion.header
        className="text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {currentTranslation.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {currentTranslation.intro}
        </p>
      </motion.header>

      <motion.div
        className="max-w-6xl mx-auto text-center mb-16 px-4 lg:px-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {currentTranslation.opportunities}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          {currentTranslation.description}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {currentTranslation.disciplines}
        </p>
        <p className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          {currentTranslation.nextStep}
        </p>

        <motion.a
          href="/contact-us"
          className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {currentTranslation.connect}
        </motion.a>
      </motion.div>

      <motion.div
        className="bg-white dark:bg-gray-800 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="max-w-5xl mx-auto text-center px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            {currentTranslation.cultureTitle}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            <span className="font-bold text-xl">Sur AlTuriaq</span> {currentTranslation.cultureDescription}
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {Object.keys(currentTranslation.values).map((key) => (
              <motion.div
                key={key}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {currentTranslation.values[key].split(' - ')[0]}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {currentTranslation.values[key].split(' - ')[1]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CareerPage;
