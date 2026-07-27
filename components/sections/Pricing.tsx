import { Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { PricingCards } from "./PricingCards";

export function Pricing() {
  return (
    <Section aria-labelledby="pricing-heading">
      <Container wide>
        {/* Intro */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary text-label inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Pricing Plans
          </span>

          <Heading as="h2" variant="section" id="pricing-heading" className="mt-6">
            Simple. Transparent. Flexible. <br className="hidden sm:block" />
            Choose what fits <span className="text-gradient">your goals.</span>
          </Heading>

          <Text variant="body-lg" className="mt-4">
            We offer clear, upfront pricing with no hidden fees.
            Pick the plan that&apos;s right for your business and scale with confidence.
          </Text>
        </div>

        {/* Client cards component (handles billing toggle state) */}
        <PricingCards />
      </Container>
    </Section>
  );
}
