import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: (language: string) => (language === "ar" ? "الرئيسية" : "Home"),
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: (language: string) => (language === "ar" ? "من نحن" : "About Us"),
    newTab: false,
    path: "/about",
  },
  {
    id: 3,
    title: (language: string) =>
      language === "ar" ? "مجالات التركيز" : "Focus Area",
    newTab: false,
    path: "/focus",
  },
  {
    id: 4,
    title: (language: string) =>
      language === "ar" ? "الإستراتيجية" : "Strategy",
    newTab: false,
    path: "/strategy",
  },
  {
    id: 5,
    title: (language: string) =>
      language === "ar" ? "الشراكات" : "Partnership",
    newTab: false,
    path: "/partnership",
  },
  {
    id: 6,
    title: (language: string) => (language === "ar" ? "الوظائف" : "Career"),
    newTab: false,
    path: "/career",
  },
  {
    id: 7,
    title: (language: string) =>
      language === "ar" ? "اتصل بنا" : "Contact Us",
    newTab: false,
    path: "/contact-us",
  },
];

export default menuData;
