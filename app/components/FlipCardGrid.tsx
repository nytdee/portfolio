"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    company: "Yuvrit Ayurveda",
    role: "Founder's Office / Growth & Operations",
    dates: "Oct 2025 – Aug 2026",
    color: "#b58b3d",
    bullets: [
      "Refined Meta and Google Ads targeting, messaging, creatives and placements; CPC moved from ₹22.21 to ₹13.18 on Google and from ₹9.50 to ₹5.47 on Meta across comparable quarterly periods.",
      "Improved lead-to-paid-sale conversion from 20% to 37% as part of a wider acquisition and sales-process improvement effort; the exact measurement periods should be documented in the case study.",
      "Started an Excel-based lead tracker and developed the process into CRM workflows covering lead stage, status, clinic preference, follow-up dates and reasons for lost leads; four sales representatives used the process.",
      "Built a custom, API-fed Meta Ads dashboard to compare performance across weeks and surface underperforming ads, reducing weekly reporting effort from three hours to 15 minutes.",
      "Worked on offline marketing and residential-society health camps across 20+ activations. Add attendance, lead, booking or revenue results only where records support them."
    ],
    metric: "CPC −40.7% Google · −42.4% Meta · Lead-to-sale 20% → 37% · Reporting 3h → 15m · 20+ offline camps",
  },
  {
    company: "Fresh Prints",
    role: "Account Manager",
    dates: "Jan 2025 – Oct 2025",
    color: "#4f91aa",
    bullets: [
      "Generated $30K+ in individual revenue over eight months.",
      "Reported 140% quota attainment during a ramp-up period when targets varied.",
      "Managed client requirements and delivery stakeholders, keeping clients updated when timelines or orders changed.",
      "Maintained a reported 95% on-time delivery rate."
    ],
    metric: "$30K+ revenue · 140% quota · 95% on-time delivery",
  },
  {
    company: "Veza",
    role: "Marketing Strategist",
    dates: "Sep 2024 – Dec 2024",
    color: "#b65d86",
    bullets: [
      "Worked on campaign strategy and marketing execution. The current portfolio reports a 60% campaign conversion result; define the conversion event, denominator, campaign and measurement period before featuring as a headline metric."
    ],
    metric: "Campaign strategy & execution",
  },
  {
    company: "Ozdec",
    role: "Co-Founder",
    dates: "Jan 2024 – Jun 2024",
    color: "#5d9b55",
    bullets: [
      "Ran awareness campaigns and used a survey form to collect audience concerns and market-research feedback.",
      "Reported a 78% awareness lift in survey-based measurement and identified three potential audience segments. Add the survey baseline, sample size and methodology to the case study before treating the figures as fully substantiated."
    ],
    metric: "78% survey-reported awareness lift* · 3 audience segments",
  },
];

export default function FlipCardGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} id="work-experience" className="relative w-full bg-[#f7f7f5] py-24 sm:py-28 md:py-32">
      <div className="section-shell">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Where I&apos;ve done the work.</h2>
          <p className="section-lead">
            A compact view of the roles behind the systems, campaigns, sales and positioning shown above.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="experience-card"
              style={{ "--experience-color": experience.color } as React.CSSProperties}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="experience-role">{experience.role}</p>
                  <h3 className="experience-company">{experience.company}</h3>
                </div>
                <span className="experience-date">{experience.dates}</span>
              </div>

              <ul className="experience-list">
                {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>

              <div className="experience-metric">
                <span className="experience-dot" />
                {experience.metric}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}