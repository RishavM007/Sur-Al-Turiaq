"use client";
import Image from "next/image";
import { useLanguage } from "app/context/LanguageContext"; // Assuming LanguageProvider is set up

const Hero = () => {
  const { language } = useLanguage(); // Get the current language

  // Define content for English and Arabic
  const content = {
    en: {
      heading: "Transforming",
      subHeading: "Healthcare with Pharmaceutical Excellence",
      description: "Your Reliable Partner for Pharmaceutical Supply Chain Solutions.",
      buttonText: "Contact Us",
    },
    ar: {
      heading: "تحويل",
      subHeading: "الرعاية الصحية مع التميز الصيدلاني",
      description: "شريكك الموثوق لحلول سلسلة التوريد الصيدلانية.",
      buttonText: "تواصل معنا",
    },
  };

  return (
    <>
      <section
        className={`overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 ${
          language === "ar" ? "text-right" : "text-left"
        }`}
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="w-1/2 sm:px-6 md:px-8 lg:px-8 xl:px-10">
              <h1 className="mb-5 text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-4xl lg:text-7xl xl:text-7xl">
                {content[language].heading}
              </h1>
              <span className="relative block text-xl font-medium text-black dark:text-white sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                {content[language].subHeading}
              </span>
              <span className="mt-10 text-sm font-medium sm:text-sm md:text-sm lg:text-sm xl:text-sm">
                {content[language].description}
              </span>
              <a href="/contact-us">
                <button
                  aria-label={content[language].buttonText}
                  className="mt-8 flex items-center justify-center rounded-full bg-black px-6 py-2 text-white transition duration-300 ease-in-out hover:bg-gray-800 dark:bg-btndark dark:hover:bg-gray-900 sm:mt-10 sm:px-7 sm:py-3 md:px-8 md:py-4"
                >
                  {content[language].buttonText}
                </button>
              </a>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative ">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-[700/444] w-full mr-52">
                  <Image
                    className="shadow-solid-l dark:hidden rounded-full"
                    src="/images/hero/pexels-pixabay-356040.jpg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block rounded-full"
                    src="/images/hero/pexels-pixabay-356040.jpg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
