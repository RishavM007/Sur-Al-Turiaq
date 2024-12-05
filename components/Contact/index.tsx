"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useLanguage } from "app/context/languageContext"; // Assuming LanguageProvider is set up

const Contact: React.FC = () => {
  const { language } = useLanguage(); // Get the current language
  const [hasMounted, setHasMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;

  const content = {
    en: {
      title: "Send a Message",
      findUs: "Find us",
      ourLocation: "Our Location",
      emailAddress: "Email Address",
      location: "Riyadh-District, Riyadh, Kingdom of Saudi Arabia",
      email: "info@satpco.com",
      button: "Send Message",
    },
    ar: {
      title: "أرسل رسالة",
      findUs: "اعثر علينا",
      ourLocation: "موقعنا",
      emailAddress: "عنوان البريد الإلكتروني",
      location: "الرياض - المنطقة، الرياض، المملكة العربية السعودية",
      email: "info@satpco.com",
      button: "إرسال الرسالة",
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
      } else {
        const errorData = await res.json();
        setResponseMessage(errorData.message || "Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                {content[language].title}
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="name"
                    placeholder={language === "ar" ? "الاسم الكامل" : "Full name"}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo dark:border-strokedark dark:focus:border-manatee"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={language === "ar" ? "عنوان البريد الإلكتروني" : "Email address"}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo dark:border-strokedark dark:focus:border-manatee"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="subject"
                    placeholder={language === "ar" ? "الموضوع" : "Subject"}
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo dark:border-strokedark dark:focus:border-manatee"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder={language === "ar" ? "رقم الهاتف" : "Phone number"}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo dark:border-strokedark dark:focus:border-manatee"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    name="message"
                    placeholder={language === "ar" ? "الرسالة" : "Message"}
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo dark:border-strokedark dark:focus:border-manatee"
                  ></textarea>
                </div>

                {responseMessage && (
                  <p className="mb-4 text-sm text-center text-red-500">
                    {responseMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-blackho dark:bg-btndark"
                >
                  {isSubmitting ? "Sending..." : content[language].button}
                </button>
              </form>
            </motion.div>

            {/* Right Section */}
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
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                {content[language].findUs}
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  {content[language].ourLocation}
                </h3>
                <p>{content[language].location}</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  {content[language].emailAddress}
                </h3>
                <p>
                  <a href={`mailto:${content[language].email}`}>{content[language].email}</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  {/* Additional content */}
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
