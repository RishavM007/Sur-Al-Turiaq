import { FeatureTab } from "@/types/featureTab";

const featuresTabData = (language: string): FeatureTab[] => [
  {
    id: "tabOne",
    title:
      language === "ar"
        ? "لماذا تختارنا"
        : "Why Choose Us",
    desc1:
      language === "ar"
        ? "ضمان الجودة: تدابير صارمة لمراقبة الجودة لضمان أعلى المعايير."
        : "Quality Assurance: Stringent quality control measures to guarantee the highest standards.",
    desc2: "",
    image: "/images/features/pexels-thirdman-8940471.jpg",
    imageDark: "/images/features/pexels-thirdman-8940471.jpg",
  },
  {
    id: "tabTwo",
    title:
      language === "ar"
        ? "مهمتنا"
        : "Our Mission",
    desc1:
      language === "ar"
        ? "أن نصبح شركة وطنية وعالمية رائدة متخصصة في تطوير وإنتاج وتسويق المنتجات الجنيسة وبراءات الاختراع التي تساعد الناس حول العالم على العيش حياة أطول وأكثر صحة وامتلاء."
        : "To become a leading national and global pharmaceutical company specializing in development, production, and commercialization of generics and patented products that help people around the world live longer, healthier and fuller lives.",
    desc2: "",
    image: "/images/features/pexels-edward-jenner-4031323.jpg",
    imageDark: "/images/features/pexels-edward-jenner-4031323.jpg",
  },
  {
    id: "tabThree",
    title:
      language === "ar"
        ? "رؤيتنا"
        : "Our Vision",
    desc1:
      language === "ar"
        ? "أن نكون المورد المفضل للأدوية للمستشفيات الحكومية، ونقدم منتجات وخدمات متفوقة."
        : "To be the preferred pharmaceutical wholesaler for government hospitals, delivering superior products and services.",
    desc2: "",
    image: "/images/features/pexels-thirdman-8940471.jpg",
    imageDark: "/images/features/pexels-thirdman-8940471.jpg",
  },
];

export default featuresTabData;
