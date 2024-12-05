import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/metabolism.png",
    title: (language: string) =>
      language === "ar"
        ? "الجهاز الهضمي والتمثيل الغذائي"
        : "Ailmentary Tract and Metabolism",
    description: (language: string) =>
      language === "ar"
        ? "حلول شاملة لصحة الجهاز الهضمي واضطرابات الأيض، لضمان امتصاص العناصر الغذائية وتنظيم الطاقة بشكل مثالي."
        : "Comprehensive solutions for digestive health and metabolic disorders, ensuring optimal nutrient absorption and energy regulation.",
  },
  {
    id: 2,
    icon: "/images/icon/heart.png",
    title: (language: string) =>
      language === "ar" ? "الجهاز القلبي الوعائي" : "Cardio Vascular System",
    description: (language: string) =>
      language === "ar"
        ? "علاجات مبتكرة وتشخيصات تهدف إلى تعزيز صحة القلب وتحسين كفاءة الدورة الدموية."
        : "Innovative therapies and diagnostics aimed at enhancing heart health and improving circulatory system efficiency.",
  },
  {
    id: 3,
    icon: "/images/icon/brain.png",
    title: (language: string) =>
      language === "ar" ? "الجهاز العصبي" : "Nervous System",
    description: (language: string) =>
      language === "ar"
        ? "علاجات وتقنيات متقدمة لدعم وظائف الدماغ وصحة الأعصاب والعافية الإدراكية العامة."
        : "Advanced treatments and technologies to support brain function, nerve health, and overall cognitive wellness.",
  },
];

export default featuresData;
