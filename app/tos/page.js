import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });

  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          {/* SVG icon code */}
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre className="leading-relaxed whitespace-pre-wrap" style={{ fontFamily: "sans-serif" }}>
          {`Last Updated: ${currentDate}

Welcome to LongevityVerse!

These Terms of Service ("Terms") govern your use of the LongevityVerse website and the services provided. By using our website and services, you agree to these Terms.

1. Description of LongevityVerse

LongevityVerse is a web application designed for longevity enthusiasts, experts, and clinics to connect and serve the community's longevity needs.

2. Ownership and Usage Rights

Upon purchasing a package, users can access consultations with longevity experts and clinics. Users can request a full refund within 7 days after the purchase.

3. User Data and Privacy

We collect user data including name, email, and payment information necessary to provide our services. Please refer to our Privacy Policy for details on data handling.

4. Non-Personal Data Collection

We collect non-personal data such as web cookies to enhance our services and user experience.

5. Governing Law

These Terms are governed by the laws of France.

6. Updates to the Terms

We may update these Terms periodically. Users will be notified of any changes via email.

For any questions or concerns regarding these Terms of Service, please contact us at csa.balogh.0165@gmail.com.

Thank you for choosing LongevityVerse for your journey towards longevity!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
