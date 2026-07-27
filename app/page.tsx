import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Insights } from "@/components/sections/Insights";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <About />
      <Pricing />
      <Testimonials />
      <Insights />
    </>
  );
}
