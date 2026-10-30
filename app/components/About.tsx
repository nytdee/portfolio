"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="about-section" className="bg-white py-24 sm:py-28 md:py-32">
      <div className="section-shell">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-title">Cross-functional operator across growth, revenue and operations.</h2>
        </motion.header>

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-16">
          <div className="about-statement">
            <span>01</span>
            <p>Acquisition.</p>
            <p>Pipeline.</p>
            <p>Reporting.</p>
          </div>

          <div className="space-y-6 text-base leading-8 text-black/60 sm:text-lg">
            <p>
              I like working at the intersection of commercial goals and day-to-day execution. That can mean figuring out why paid leads are not turning into sales, building a lead lifecycle the sales team can actually follow, creating reporting that makes campaign performance easier to understand, or coordinating a customer account through to delivery.
            </p>
            <p>
              My work is cross-functional by design: growth, sales, systems and operations are connected. I focus on making those connections more visible and more useful to the people making decisions.
            </p>
            <a
              href="https://docs.google.com/document/d/1O53K6AgyMrb01X0Pc5wThLpfcH0EFHEUyeifXSQBc0k/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-black/20 pb-1 text-sm font-medium text-black transition-colors hover:border-[#b58b3d] hover:text-[#8f6b2f]"
            >
              View resume ↗
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 border-y border-black/10 md:grid-cols-3 lg:grid-cols-5"
        >
          {[
            { value: "20% → 37%", label: "Lead-to-paid-sale conversion" },
            { value: "−40.7%", label: "Google Ads CPC (₹22.21 → ₹13.18)" },
            { value: "−42.4%", label: "Meta Ads CPC (₹9.50 → ₹5.47)" },
            { value: "3 hrs → 15 min", label: "Weekly reporting effort" },
            { value: "$30K+", label: "Individual B2B revenue" },
          ].map((stat) => (
            <div key={stat.label} className="border-black/10 px-5 py-7 first:border-l-0 even:border-l md:border-l">
              <p className="text-3xl font-semibold tracking-tight text-[#9a722d] sm:text-4xl">{stat.value}</p>
              <p className="mt-2 max-w-[150px] text-[11px] font-medium uppercase tracking-[0.12em] text-black/40">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* <div className="mt-12">
          <p className="section-eyebrow mb-5">Education</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { degree: "B.Tech — Civil Engineering", school: "APJ Abdul Kalam Technological University" },
              { degree: "Mathematics & Computer Science", school: "City Montessori School" },
              { degree: "Mathematics & Computer Science", school: "HAL Management Academy" },
            ].map((item) => (
              <div key={item.school} className="border border-black/10 bg-[#fafaf8] p-5">
                <p className="font-medium text-black/80">{item.degree}</p>
                <p className="mt-2 text-sm leading-5 text-black/45">{item.school}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
