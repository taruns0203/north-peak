export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NorthPeak Digital",
    "url": "https://northpeakdigital.com",
    "logo": "https://northpeakdigital.com/images/hero-mountain.png",
    "image": "https://northpeakdigital.com/images/og-image.png",
    "description":
      "NorthPeak Digital is a premium digital agency specializing in strategy, UI/UX design, web development, and digital growth.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "priceRange": "$$$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://twitter.com/northpeakdigital",
      "https://linkedin.com/company/northpeakdigital",
      "https://github.com/northpeakdigital"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "48"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
