"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { StatCard, heroStats } from "./StatCard";

const float = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
};

export function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* Halo glow — sits behind the mountain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-16 flex items-center justify-center"
      >
        <Image
          src="/images/hero-halo.png"
          alt=""
          width={1024}
          height={682}
          priority
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="w-[130%] max-w-none scale-100 opacity-80 lg:scale-150"
        />
      </div>

      {/* Mountain — transparent PNG, no box styling */}
      <Image
        src="/images/hero-mountain2.png"
        alt=""
        width={1024}
        height={682}
        priority
        loading="eager"
        fetchPriority="high"
        sizes="(min-width: 1024px) 50vw, 90vw"
        className="relative z-10 w-full"
      />

      {/* Floating stat cards — desktop only */}
      <motion.div
        {...float}
        className="absolute -top-2 right-0 z-20 hidden w-56 lg:block xl:w-64"
      >
        <StatCard {...heroStats[0]} />
      </motion.div>

      <motion.div
        {...float}
        transition={{ ...float.transition, delay: 1 }}
        className="absolute bottom-12 -right-4 z-20 hidden w-56 lg:block xl:w-64"
      >
        <StatCard {...heroStats[1]} />
      </motion.div>
    </div>
  );
}
