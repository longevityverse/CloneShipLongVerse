import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main>
        <Hero
          title="Unlock Your Longevity Potential"
          subtitle="Join our community to explore the future of longevity science and wellness."
        />
        <Problem description="Navigating the world of longevity is challenging due to fragmented information and lack of centralized collaboration. LongevityVerse aims to solve this by uniting enthusiasts, experts, and clinics in a single platform." />
        <FeaturesAccordion
          features={[
            {
              title: "Community Engagement",
              description:
                "Connect with like-minded individuals and experts, share your journey, and learn from others.",
            },
            {
              title: "Expert Directories",
              description:
                "Discover and consult with top longevity clinics and professionals tailored to your needs.",
            },
            {
              title: "Educational Resources",
              description:
                "Access a wealth of peer-reviewed content, latest research findings, and educational materials to guide your longevity journey.",
            },
          ]}
        />
        <Pricing
          options={[
            {
              name: "Basic",
              description: "Access to community and selected resources.",
              price: "Free",
            },
            {
              name: "Premium",
              description:
                "Full access to all features, including expert consultations and advanced resources.",
              price: "$9.99/month",
            },
          ]}
        />
        <FAQ
          questions={[
            {
              question: "What makes LongevityVerse unique?",
              answer:
                "Our focus on prevention, community engagement, and providing direct access to experts and clinics sets us apart in the longevity space.",
            },
            {
              question: "How does the platform work?",
              answer:
                "Through AI-driven matching, we connect you with personalized advice, treatments, and community insights to support your longevity journey.",
            },
          ]}
        />
        <CTA callToAction="Ready to explore a longer, healthier life? Join LongevityVerse today." />
      </main>
      <Footer />
    </>
  );
}
