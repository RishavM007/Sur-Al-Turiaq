import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Service from "@/components/Ourservice";

import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Sur Al-Turiaq Pharmaceutical Company - Transforming Healthcare",
  description: "Sur Al-Tariaq Pharmaceutical Company is dedicated to innovation and excellence in pharmaceuticals, delivering high-quality healthcare solutions to improve lives worldwide.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Feature />
      <FeaturesTab />
      <Integration />
      <CTA />
      <Testimonial />
      <Pricing />
      <Contact />
    </main>
  );
}
