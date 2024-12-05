"use client";
import { motion } from "framer-motion";
import { useLanguage } from "app/context/LanguageContext"; // Import the language context
import Image from "next/image";

const Footer = () => {
  const { language, toggleLanguage } = useLanguage(); // Get language state and toggle function

  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <h2 className="text-2xl font-extrabold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    Sur <span className="text-blue-500">Al-Turiaq</span>
                  </h2>
                </a>

                <p className="mb-10 mt-5"></p>

                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                  {language === "en" ? "Contact" : "الاتصال"}
                </p>
                <a
                  href="tel:+966533636592"
                  className="text-sm font-light block text-black dark:text-white"
                >
                  +966-533-636-592
                </a>
                <a
                  href="#"
                  className="text-sm font-light text-black dark:text-white"
                >
                  info@satpco.com
                </a>
                <p className="mb-1.5 mt-6  text-sectiontitle uppercase tracking-[5px]">
                  {language === "en" ? "Address" : "العنوان"}
                </p>
                <p className="text-md font-light text-black dark:text-white">
                  Riyadh-District, Riyadh, Kingdom of Saudi Arabia
                </p>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    {language === "en" ? "Our Links" : "روابطنا"}
                  </h4>

                  <ul className="flex flex-col sm:flex-col lg:flex-row md:flex-row lg:gap-3 md:gap-3">
                    <li>
                      <a
                        href="/about"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        {language === "en" ? "About Us" : "عن الشركة"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/focus"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        {language === "en" ? "Focus Area" : "مجال التركيز"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/strategy"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        {language === "en" ? "Strategy" : "استراتيجية"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/partnership"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        {language === "en" ? "Partnership" : "شراكة"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/career"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        {language === "en" ? "Career" : "مهنى"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact-us"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        {language === "en" ? "Contact Us" : "اتصل بنا"}
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="#" className="hover:text-primary">
                    {language === "en" ? "English" : "الإنجليزية"}
                  </a>
                </li>
                <li>
                  <button
                    onClick={toggleLanguage}
                    className="hover:text-primary"
                  >
                    {language === "en" ? "Arabic" : "العربية"}
                  </button>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} Sur Al-Turiaq. All rights reserved | Designed and Developed with care by{" "}
                <a href="https://Bixeltek.com">Bixeltek</a>
              </p>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
