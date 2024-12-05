"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "app/context/languageContext"; // Import the language context

const VerticalCards = () => {
  const { language } = useLanguage(); // Access the current language from the context

  // Cards content that changes based on the language
  const cards = [
    {
      id: 1,
      logoLight: "/images/icon/braindark.png", 
      logoDark: "/images/icon/brain.png", 
      title: language === "en" ? "Nervous System" : "الجهاز العصبي",
      subtitle: language === "en" ? "The intricate web controlling every thought, movement, and sensation" : "الشبكة المعقدة التي تتحكم في كل فكرة وحركة وإحساس",
    },
    {
      id: 2,
      logoLight: "/images/icon/heartdark.png",
      logoDark: "/images/icon/heart.png",
      title: language === "en" ? "Cardiovascular System" : "الجهاز القلبي الوعائي",
      subtitle: language === "en" ? "A network that circulates oxygen, nutrients, and vitality." : "شبكة تنقل الأوكسجين والمواد المغذية والحيوية.",
    },
    {
      id: 3,
      logoLight: "/images/icon/metabolismdark.png",
      logoDark: "/images/icon/metabolism.png",
      title: language === "en" ? "Ailmentary Tract and Metabolism" : "الجهاز الهضمي والتمثيل الغذائي",
      subtitle: language === "en" ? "The chemical processes that power our energy and sustain life." : "العمليات الكيميائية التي تشغل طاقتنا وتحافظ على الحياة.",
    },
    {
      id: 4,
      logoLight: "/images/icon/cell.png",
      logoDark: "/images/icon/cell-white.png",
      title: language === "en" ? "Blood and Blood-Forming Organs" : "الدم والأعضاء المنتجة للدم",
      subtitle: language === "en" ? "How blood nourishes the body and sustains life." : "كيف يغذي الدم الجسم ويحافظ على الحياة.",
    },
    {
      id: 5,
      logoLight: "/images/icon/lungs.png",
      logoDark: "/images/icon/lungs-white.png",
      title: language === "en" ? "Musculoskeletal System" : "الجهاز العضلي الهيكلي",
      subtitle: language === "en" ? "Bones and muscles working in harmony for movement and support." : "العظام والعضلات تعمل بتناغم للحركة والدعم.",
    },
    {
      id: 6,
      logoLight: "/images/icon/anatomy.png",
      logoDark: "/images/icon/anatomy-white.png",
      title: language === "en" ? "Title 6" : "العنوان 6",
      subtitle: language === "en" ? "This is a short subtitle for card 6." : "هذا هو العنوان الفرعي القصير للبطاقة 6.",
    },
    {
      id: 7,
      logoLight: "/images/icon/kidney.png",
      logoDark: "/images/icon/kidney-white.png",
      title: language === "en" ? "Genito-Urinary System" : "الجهاز البولي التناسلي",
      subtitle: language === "en" ? "Maintaining balance and eliminating waste for optimal health." : "الحفاظ على التوازن وإزالة الفضلات لصحة مثلى.",
    },
    {
      id: 8,
      logoLight: "/images/icon/virus.png",
      logoDark: "/images/icon/virus-white.png",
      title: language === "en" ? "Systemic Antivirals" : "مضادات الفيروسات الجهازية",
      subtitle: language === "en" ? "Medications that protect and heal from viral threats." : "الأدوية التي تحمي وتشفى من التهديدات الفيروسية.",
    },
    {
      id: 9,
      logoLight: "/images/icon/syringe.png",
      logoDark: "/images/icon/syringe-white.png",
      title: language === "en" ? "Antineoplastic Agents" : "العوامل المضادة للأورام",
      subtitle: language === "en" ? "Powerful tools in the battle against uncontrolled cell growth." : "أدوات قوية في المعركة ضد نمو الخلايا غير المنضبط.",
    },
    {
      id: 10,
      logoLight: "/images/icon/hairdark.png",
      logoDark: "/images/icon/hair-white.png",
      title: language === "en" ? "Title 10" : "العنوان 10",
      subtitle: language === "en" ? "This is a short subtitle for card 10." : "هذا هو العنوان الفرعي القصير للبطاقة 10.",
    },
  ];

  return (
    <section className="py-20 mt-10">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-5">
          {language === "en" ? "Government Hospital Partnerships" : "شراكات المستشفيات الحكومية"} 
        </h1>
        <p className="text-md mx-30 mb-5 sm:mx-10 md:mx-20 lg:mx-20 xl:mx-50 text-gray-600 dark:text-gray-400">
          {language === "en" ? 
            "We specialize in serving government hospitals, providing them with a comprehensive range of pharmaceutical products. Our focus on government hospitals allows us to:" :
            "نحن متخصصون في خدمة المستشفيات الحكومية، وتوفير مجموعة شاملة من المنتجات الصيدلانية لها. تركيزنا على المستشفيات الحكومية يتيح لنا:"}
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 mx-20 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.div
            className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-md font-bold text-gray-900 dark:text-white mb-3 ">
              {language === "en" ? "Tailored Services to meet the specific requirements of government hospitals." : "خدمات مخصصة لتلبية المتطلبات الخاصة للمستشفيات الحكومية."}
            </h3>
          </motion.div>
          <motion.div
            className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-md font-bold text-gray-900 dark:text-white mb-3">
              {language === "en" ? "Streamlined Procurement to Simplify the procurement process for government agencies." : "تسهيل عملية الشراء لتبسيط عملية الشراء للوكالات الحكومية."}
            </h3>
          </motion.div>
          <motion.div
            className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-md font-bold text-gray-900 dark:text-white mb-3">
              {language === "en" ? "We ensure Supply Chain Security and Mitigate supply chain risks and disruptions to ensure a continuous supply of medications." : "نحن نضمن أمان سلسلة الإمداد ونخفف من مخاطر واضطرابات سلسلة الإمداد لضمان إمداد مستمر بالأدوية."}
            </h3>
          </motion.div>
        </motion.div>
      </header>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4 lg:px-16">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mb-4">
              <Image
                src={card.logoLight}
                alt={`Logo ${card.id}`}
                width={64}
                height={64}
                className="object-cover dark:hidden"
              />
              <Image
                src={card.logoDark}
                alt={`Logo ${card.id}`}
                width={64}
                height={64}
                className="object-cover hidden dark:block"
              />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalCards;
