"use client";

import { motion } from "framer-motion";

export default function Overlay() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-left px-6 sm:px-10 lg:px-14 max-w-[48vw] md:max-w-[42vw] lg:max-w-[36vw]">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-sm sm:text-base tracking-[0.3em] uppercase text-white/70 mb-4 sm:mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Growth · Revenue · Operations
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tighter max-w-4xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <span className="text-white/95">I don&apos;t advise growth.</span>
        <br />
        <span className="text-gradient-accent">I operate it.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-6 text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        From first click to closed deal.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="pointer-events-auto mt-10 flex flex-col items-start gap-4 sm:flex-row"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-colors hover:bg-white/80"
        >
          Explore my work
        </a>
        <a
          href="#contact-section"
          className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-white/70 hover:text-white"
        >
          Get in touch
        </a>
      </motion.div>
    </div>
  );
}
