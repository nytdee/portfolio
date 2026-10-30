"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

export default function Overlay() {
  // The outer div is absolute inset-0 inside #hero-section, so it occupies
  // the exact same box (500vh). Tracking it is equivalent to tracking the
  // section — and attaching via JSX ref lets useScroll subscribe correctly.
  // (The old getElementById + mutating ref.current never re-rendered, so
  // useScroll kept a null target and scrollYProgress stayed stuck at 0,
  // leaving sections 2-4 permanently invisible.)
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: nativeScrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // A "start start" -> "end end" offset on a target much taller than the
  // viewport makes framer-motion hand this off to a native CSS ViewTimeline
  // ("contain" range) for GPU-accelerated playback. That native timeline
  // renders a completely different (non-monotonic, looping) curve than the
  // JS-computed progress — it's what caused sections to fade back in and
  // overlap. Mirroring into a plain MotionValue strips the `.accelerate`
  // flag so every transform below is driven by the (correct) JS value.
  const scrollYProgress = useMotionValue(0);
  useMotionValueEvent(nativeScrollYProgress, "change", (latest) => {
    scrollYProgress.set(latest);
  });

  /*
    SECTION SCROLL RANGES
    Each section fades IN after the previous one has FULLY faded OUT.
    No overlap = no "ghost" text effect.

    0.00 – 0.25 : Section 1 (Hero Title)
    0.25 – 0.50 : Section 2 (Growth Engines)
    0.50 – 0.75 : Section 3 (Strategy meets Execution)
    0.75 – 1.00 : Section 4 (Your Growth CTA)
  */

  // S1: visible 0→0.06, hold 0.06→0.18, fade out 0.18→0.24 (done at 0.24)
  const s1Opacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.18, 0.24],
    [1, 1, 0, 0],
  );
  const s1Y = useTransform(scrollYProgress, [0, 0.24], ["0%", "-12%"]);

  // S2: fade in 0.25→0.30 (starts AFTER s1 is gone), hold 0.30→0.44, fade out 0.44→0.49
  const s2Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.44, 0.49],
    [0, 1, 1, 0],
  );
  const s2Y = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.49],
    ["16%", "0%", "-16%"],
  );

  // S3: fade in 0.50→0.55, hold 0.55→0.69, fade out 0.69→0.74
  const s3Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.69, 0.74],
    [0, 1, 1, 0],
  );
  const s3Y = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.74],
    ["16%", "0%", "-16%"],
  );

  // S4: fade in 0.75→0.80, hold 0.80→0.92, fade out 0.92→1.00
  const s4Opacity = useTransform(
    scrollYProgress,
    [0.75, 0.8, 0.92, 1.0],
    [0, 1, 1, 0],
  );
  const s4Y = useTransform(
    scrollYProgress,
    [0.75, 0.8, 1.0],
    ["16%", "0%", "-16%"],
  );

  return (
    <div ref={targetRef} className="absolute inset-0 z-10 pointer-events-none ">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ══ Section 1 — Hero ══ */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center"
          style={{ opacity: s1Opacity, y: s1Y }}
        >
          <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-14">
            <p
              className="text-sm sm:text-base tracking-[0.3em] uppercase text-white/70 mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Growth · Revenue · Operations
            </p>
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tighter max-w-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-white/95">I turn messy business problems into </span>
              <span className="text-gradient-accent">better growth systems.</span>
            </h1>
          </div>
        </motion.div>

        {/* ══ Section 2 — I build growth engines ══ */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center"
          style={{ opacity: s2Opacity, y: s2Y }}
        >
          <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-14">
            <h2
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] max-w-5xl tracking-tight text-white/95"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Acquisition <span className="text-gradient-accent">→ pipeline</span>{" "}
              → reporting.
            </h2>
            <p
              className="mt-8 text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              I work across paid acquisition, brand positioning, B2B revenue, CRM and reporting — finding where a process breaks, building a clearer way to run it, and measuring what changes.
            </p>
          </div>
        </motion.div>

        {/* ══ Section 3 — Strategy meets execution ══ */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center"
          style={{ opacity: s3Opacity, y: s3Y }}
        >
          <div className="mx-auto flex w-full max-w-[1720px] flex-col items-end px-6 text-right sm:px-10 lg:px-14">
            <h2
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] max-w-5xl tracking-tight text-white/95"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Operator across{" "}
              <span className="text-gradient-accent">the funnel</span>.
            </h2>
            <p
              className="mt-8 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed ml-auto"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              My experience spans performance marketing, customer and lead qualification, sales pipeline management, CRM implementation, campaign reporting and offline activations. At Yuvrit Ayurveda, I worked with founders and cross-functional teams to improve lead quality and sales conversion, create a structured lead-management process, and replace manual campaign comparisons with an API-fed dashboard. At Fresh Prints, I managed B2B accounts and generated more than $30K in individual revenue. I have also worked on brand awareness, market research and campaign strategy at Ozdec and Veza.
            </p>
          </div>
        </motion.div>

        {/* ══ Section 4 — Ready to drive your growth ══ */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center"
          style={{ opacity: s4Opacity, y: s4Y }}
        >
          <div className="mx-auto flex w-full max-w-[1720px] flex-col items-center px-6 text-center sm:px-10 lg:px-14">
            <h2
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[1.1] tracking-tight text-white/95"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to drive
              <br />
              <span className="text-gradient-accent">your growth?</span>
            </h2>
            <div className="pointer-events-auto mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#work-experience"
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
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
