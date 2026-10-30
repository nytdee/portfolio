"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/* ─── Shared Styles & Data ─── */
const BRAND_COLORS = {
  yuvrit: "#c8a86e", // Gold/Amber
  freshPrints: "#7cb3c8", // Blue
  veza: "#c87ca0", // Rose/Pink
  ozdec: "#8ec87c", // Green
};

export default function CaseStudyDoc() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="case-study-doc" className="relative w-full px-4 sm:px-8 md:px-16 pb-32">
      {/* ─── The Document Window ─── */}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-[1400px] mx-auto bg-[#0f0f0f] border border-white/[0.08] shadow-[0_0_100px_rgba(0,0,0,0.8)] rounded-[40px] md:rounded-[60px] relative overflow-hidden"
      >
        {/* Top Window Bar (Optional MacOS-style dots for the "doc" feel) */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-white/[0.02] border-b border-white/[0.05] flex items-center px-8 gap-2 z-50">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <span className="ml-4 text-[10px] tracking-widest uppercase text-white/30 font-medium" style={{ fontFamily: "var(--font-display)" }}>
            Case_Studies.pdf
          </span>
        </div>

        <div className="px-6 sm:px-12 md:px-24 py-32 sm:py-48 mt-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="mb-32 md:mb-48"
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="h-px w-24" style={{ background: "var(--accent)" }} />
            <span
              className="text-xs md:text-sm tracking-[0.5em] uppercase"
              style={{ color: "var(--accent-dim)", fontFamily: "var(--font-display)" }}
            >
              Selected Work
            </span>
          </div>

          <h2
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[1.05] tracking-tighter"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Where I&apos;ve driven
            <br />
            <span className="text-gradient-accent">real impact.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-40 md:gap-64">
          <YuvritCaseStudy />
          <OzdecCaseStudy />
          <VezaCaseStudy />
          <FreshPrintsCaseStudy />
        </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   1. YUVRIT AYURVEDA (Flagship Case Study)
   ════════════════════════════════════════════════════════ */
function YuvritCaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const color = BRAND_COLORS.yuvrit;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      className="relative flex flex-col gap-16 md:gap-24"
    >
      {/* Header */}
      <div className="flex flex-col gap-6 max-w-4xl">
        <div className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-bold" style={{ color }}>
          <span>Founder&apos;s Office</span>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          <span>Oct 2025 – Aug 2026</span>
        </div>
        <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white/95" style={{ fontFamily: "var(--font-display)" }}>
          Yuvrit Ayurveda
        </h3>
        <blockquote className="text-2xl md:text-4xl leading-tight font-medium border-l-4 pl-6 md:pl-8 my-8 text-white/90" style={{ borderColor: color, fontFamily: "var(--font-display)" }}>
          "The system that fixed acquisition, not just the ads."
        </blockquote>
        <p className="text-lg md:text-2xl text-white/60 leading-relaxed max-w-3xl">
          Ran growth end-to-end — paid media, offline, and the full lead-to-sale pipeline — and built the infrastructure that made all three visible and fast.
        </p>
      </div>

      {/* Sub-story 1 & 2: Ads & Efficiency */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start mt-12">
        <div className="flex flex-col gap-12">
          {/* Sub 1 */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color, fontFamily: "var(--font-display)" }}>
              01 / Fixing the Ads
            </h4>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              The instinct when ads underperform is to touch targeting or budget first. I went through the entire customer journey and found the real issue upstream of both: people weren't relating to the creatives — the images didn't reflect who was actually looking at them.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Fixed the creative before touching anything else. Redesigned the lead handoff: OTP-verified WhatsApp form, followed by qualifying questions that sorted the lead by intent before a salesperson ever saw them. Sales stopped opening conversations cold.
            </p>
          </div>

          {/* Sub 2 */}
          <div className="p-8 md:p-10 rounded-3xl border" style={{ borderColor: `${color}20`, background: `linear-gradient(135deg, ${color}05 0%, transparent 100%)` }}>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color, fontFamily: "var(--font-display)" }}>
              02 / Making Spend Efficient
            </h4>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Replaced randomised creatives with persona-informed targeting; fed consultation outcomes back into Meta's optimisation.
            </p>
            <ul className="grid grid-cols-2 gap-6">
              {[
                { label: "Google Ads CPC", val: "₹22.21 → ₹13.18" },
                { label: "Google Impressions", val: "94.7k → 525k" },
                { label: "Meta CTR", val: "0.65% → 1.11%" },
                { label: "Meta CPC", val: "₹9.50 → ₹5.47" },
              ].map(m => (
                <li key={m.label}>
                  <div className="text-xl md:text-2xl font-bold text-white/95 mb-1" style={{ fontFamily: "var(--font-display)" }}>{m.val}</div>
                  <div className="text-xs tracking-wider text-white/50">{m.label}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <Image src="/case-studies/google-ads-dashboard.png" alt="Google Ads Dashboard" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <p className="absolute bottom-6 left-8 text-xs tracking-widest uppercase text-white/70">The 8 AM Dashboard</p>
        </div>
      </div>

      {/* Sub-story 3: Building the CRM */}
      <div className="mt-20">
        <div className="max-w-3xl mb-16">
          <h4 className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color, fontFamily: "var(--font-display)" }}>
            03 / Building the CRM, from the sales floor up
          </h4>
          <p className="text-xl text-white/80 leading-relaxed mb-6 font-medium">
            Leads lived in Excel — no single source of truth, no consistent distribution, no way to tell a hot lead from a dead one at a glance.
          </p>
          <p className="text-lg text-white/60 leading-relaxed">
            Spent a few months doing sales personally before architecting anything, to hear firsthand where people hesitated, went quiet, or came back. Built on Zoho Bigin, mapping Yuvrit's real customer lifecycle into pipeline logic rather than a generic template.
          </p>
        </div>

        {/* CRM Pipeline Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { src: "/case-studies/crm-leads.png", label: "Leads Pipeline" },
            { src: "/case-studies/crm-bookings.png", label: "Consultation Bookings" },
            { src: "/case-studies/crm-post-consultation.png", label: "Post-Consultation Management" },
            { src: "/case-studies/crm-cancellation.png", label: "Cancellation & Winback" },
          ].map((img, i) => (
            <div key={i} className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 group">
              <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              <p className="absolute bottom-6 left-6 text-sm tracking-wider font-medium text-white/90">{img.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Yuvrit Impact Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 mt-8 border-t" style={{ borderColor: "var(--border)" }}>
        {[
          { v: "−40.7%", l: "Google Ads CPC (₹22.21 → ₹13.18)" },
          { v: "−42.4%", l: "Meta Ads CPC (₹9.50 → ₹5.47)" },
          { v: "20% → 37%", l: "Reported lead-to-paid-sale conversion" },
          { v: "15 min", l: "Weekly reporting time (from 3 hrs)" },
        ].map(s => (
          <div key={s.l}>
            <div className="text-3xl md:text-5xl font-bold mb-3 text-white/95" style={{ fontFamily: "var(--font-display)" }}>{s.v}</div>
            <div className="text-xs md:text-sm tracking-wider text-white/50">{s.l}</div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

/* ════════════════════════════════════════════════════════
   2. OZDEC (GTM & Brand)
   ════════════════════════════════════════════════════════ */
function OzdecCaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const color = BRAND_COLORS.ozdec;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      className="relative glass-card p-10 md:p-16 lg:p-24 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03] pointer-events-none" style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }} />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-bold" style={{ color }}>
            <span>Co-Founder</span>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            <span>Jan – Jun 2024</span>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white/95" style={{ fontFamily: "var(--font-display)" }}>
            Ozdec
          </h3>
          <blockquote className="text-xl md:text-3xl leading-snug font-medium text-white/90 mt-4 mb-6">
            "Positioning a product nobody had asked for yet."
          </blockquote>
          
          <div className="flex flex-col gap-6 mt-4">
            <h4 className="text-xs tracking-[0.3em] uppercase" style={{ color, fontFamily: "var(--font-display)" }}>The Origin</h4>
            <p className="text-lg text-white/60 leading-relaxed">
              Started from a personal problem, not a market gap: too many emails to get through daily, no way to tell a good one from noise, important emails quietly buried. That frustration was the actual product brief.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              No existing demand to slot into — the hard part wasn't building the product, it was that nobody was looking for it. Validated before positioning: circulated forms broadly to find who actually lived in their inbox daily and felt the pain.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Ran competitor teardowns on 50+ brands to find the lane nobody else occupied, then built messaging and identity around that gap.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end">
          <div className="p-8 rounded-3xl border backdrop-blur-sm" style={{ borderColor: `${color}15`, background: `linear-gradient(135deg, ${color}05 0%, transparent 100%)` }}>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-8" style={{ color, fontFamily: "var(--font-display)" }}>Impact</h4>
            <ul className="flex flex-col gap-8">
              {[
                { v: "78%*", l: "Survey-reported brand awareness lift" },
                { v: "3", l: "Potential audience segments identified" },
              ].map(s => (
                <li key={s.l}>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white/95" style={{ fontFamily: "var(--font-display)" }}>{s.v}</div>
                  <div className="text-sm tracking-wider text-white/50">{s.l}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ════════════════════════════════════════════════════════
   3. VEZA (Marketing Agency)
   ════════════════════════════════════════════════════════ */
function VezaCaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const color = BRAND_COLORS.veza;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      className="relative flex flex-col lg:flex-row gap-16 md:gap-24 items-center"
    >
      <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
        <div className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-bold" style={{ color }}>
          <span>Marketing Strategist</span>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          <span>Sep – Dec 2024</span>
        </div>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white/95" style={{ fontFamily: "var(--font-display)" }}>
          Veza
        </h3>
        <blockquote className="text-xl md:text-3xl leading-snug font-medium text-white/90 mt-4 mb-6 border-l-4 pl-6" style={{ borderColor: color }}>
          "Selling a ₹60–70K product means selling a feeling, not a lead form."
        </blockquote>
        <p className="text-lg text-white/60 leading-relaxed mb-4">
          A client with a ₹60,000–70,000 AOV had almost no marketing presence — no PR mentions, inconsistent Instagram, and ads that had been running as plain lead-gen with no story behind them.
        </p>
        <p className="text-lg text-white/60 leading-relaxed">
          At that price point, a lead-gen ad doesn't work — nobody spends that much off a scroll-stopping offer. The ask has to come after the feeling, not before it. Restructured their Instagram, reworked existing footage into smoother video, and rebuilt the ads around the product's story. Let someone see what it's made of and imagine having it, then make the ask.
        </p>
      </div>

      <div className="w-full lg:w-[400px] shrink-0 order-1 lg:order-2">
        <div className="p-10 rounded-[40px] border flex flex-col gap-10" style={{ borderColor: `${color}20`, background: `linear-gradient(to bottom, ${color}08 0%, transparent 100%)` }}>
          {[
            { v: "5+", l: "Clients on agency roster" },
            { v: "₹60–70K", l: "High-ticket AOV positioned via story" },
            { v: "Sep–Dec 2024", l: "Campaign strategy & execution" },
          ].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-5xl font-bold mb-3 text-white/95" style={{ fontFamily: "var(--font-display)" }}>{s.v}</div>
              <div className="text-xs tracking-widest uppercase text-white/50">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ════════════════════════════════════════════════════════
   4. FRESH PRINTS (Sales)
   ════════════════════════════════════════════════════════ */
function FreshPrintsCaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const color = BRAND_COLORS.freshPrints;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      className="relative glass-card p-10 md:p-16 lg:p-24 overflow-hidden text-center flex flex-col items-center"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.04] pointer-events-none" style={{ background: `radial-gradient(ellipse, ${color} 0%, transparent 70%)` }} />
      
      <div className="flex items-center justify-center gap-4 text-xs tracking-[0.2em] uppercase font-bold mb-8" style={{ color }}>
        <span>Account Manager</span>
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        <span>New York (Remote)</span>
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
        <span>Jan – Oct 2025</span>
      </div>
      
      <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-white/95 mb-10" style={{ fontFamily: "var(--font-display)" }}>
        Fresh Prints
      </h3>
      
      <blockquote className="text-2xl md:text-4xl leading-snug font-medium text-white/90 max-w-4xl mx-auto mb-16">
        "Going to the sales floor on purpose. The job isn't 'convince people,' it's 'find the person for whom this is already true, and help them see it.'"
      </blockquote>
      
      <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto mb-16">
        Wanted to understand buyer psychology directly, not just theorize about it. Qualified hard on real buying signals instead of chasing every lead evenly. Researched upcoming events to time outreach, revived written-off accounts, and closed warm prospects. Managed enterprise accounts — Harvard Business School, Columbia University, Amazon, Smirnoff.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl pt-16 border-t" style={{ borderColor: "var(--border)" }}>
        {[
          { v: "$30K+", l: "B2B Apparel Revenue (8 months)" },
          { v: "40%", l: "Quota Exceeded By" },
          { v: "95%", l: "On-time Delivery Rate" },
        ].map(s => (
          <div key={s.l}>
            <div className="text-4xl md:text-5xl font-bold mb-3 text-white/95" style={{ fontFamily: "var(--font-display)" }}>{s.v}</div>
            <div className="text-xs tracking-widest uppercase text-white/50">{s.l}</div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
