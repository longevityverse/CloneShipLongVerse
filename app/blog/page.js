// page.js in the /blog directory
import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Blog() {
  // Define some dummy content to simulate what you might want to showcase
  const longevityFeatures = [
    {
      title: "Community Insights",
      description:
        "Engage with the latest community-driven content on health and longevity.",
    },
    {
      title: "Expert Advice",
      description:
        "Read insights from leading experts in the field of longevity.",
    },
    {
      title: "Research & Studies",
      description:
        "Dive deep into the latest longevity research and learn about new studies.",
    },
  ];

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main>
        <Hero
          title="LongevityVerse Blog"
          subtitle="Explore the Science of Longevity"
        />
        <Problem description="Your central hub for the latest in longevity science. Connect, share, and grow with us." />
        <FeaturesAccordion features={longevityFeatures} />
        {/* Include other components like Pricing, FAQ, CTA as needed */}
      </main>
      <Footer />
    </>
  );
}
