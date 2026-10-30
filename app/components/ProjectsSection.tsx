"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Meta Ads Intelligence",
    url: "https://meta-dashboard-mu-drab.vercel.app/",
    image: "/projects/meta-ads-intelligence.png",
    color: "#5b4b7a",
    eyebrow: "Paid Media · Decision Intelligence",
    description:
      "A Meta Ads dashboard that surfaces underperforming campaigns, enforces budget guardrails (CPL ceiling, CTR floor), and breaks down lead sources — so spend stops going to ad fatigue and reporting takes minutes instead of hours.",
    metric: "Budget guardrails · Lead-source attribution · Fatigue alerts",
  },
  {
    title: "Executive Pulse",
    url: "https://executive-pulse-phi.vercel.app/",
    image: "/projects/executive-pulse.png",
    color: "#4b5563",
    eyebrow: "Leadership · Operating Layer",
    description:
      "An executive decision-intelligence layer that consolidates what needs a leader's attention — decisions waiting, critical risks, blocked and at-risk items — so leadership acts on signal instead of noise.",
    metric: "Attention scoring · Risk tracking · Org pulse",
  },
  {
    title: "Voice of Customer Radar",
    url: "https://voice-of-customer-radar.vercel.app/",
    image: "/projects/voc-radar.png",
    color: "#15803d",
    eyebrow: "Reviews · Voice of Customer",
    description:
      "A review-intelligence tool that turns raw customer feedback into actionable insight — surfacing themes, sentiment, and discovery signals from voice-of-customer data with an AI analyst layer.",
    metric: "Sentiment analysis · Theme detection · Review discovery",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-[#f7f7f5] py-20 sm:py-24 md:py-28"
    >
      <div className="section-shell">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <p className="section-eyebrow">Selected Projects</p>
          <h2 className="section-title">Systems I&apos;ve built.</h2>
          <p className="section-lead">
            Standalone products that solve a specific decision problem — from ad spend to leadership attention to customer feedback.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="flex flex-col h-full group border border-black/[0.08] bg-white rounded-[22px] overflow-hidden transition-all duration-300 hover:border-black/[0.18] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            >
              <div className="relative h-[200px] sm:h-[220px] md:h-[260px] overflow-hidden bg-[#f5f5f2]">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.75] text-[10px] font-medium text-white tracking-tighter uppercase">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: project.color }}
                  />
                  Live
                </div>
              </div>

              <div className="px-5 sm:px-6 pt-5 pb-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: project.color }}>
                  {project.eyebrow}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight text-[#151515]">{project.title}</h3>
                <p className="text-sm leading-relaxed text-[#555] line-clamp-4">
                  {project.description}
                </p>
                <div className="mt-auto pt-4 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-wider text-[#151515]" style={{ fontFamily: "var(--font-display)" }}>
                    {project.metric}
                  </span>
                  <span className="text-[#b58b3d] text-[10px] font-bold tracking-wider">
                    Open ↗
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
