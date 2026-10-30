"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";

const BRAND_COLORS = {
  yuvrit: "#b58b3d",
  freshPrints: "#4f91aa",
  veza: "#b65d86",
  ozdec: "#5d9b55",
  crm: "#c57b32",
  analytics: "#a8794e",
  offline: "#8a6d3b",
};

export interface SkillItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  tools: string[];
  metric: string;
  color: string;
  caseStudyId:
    | "yuvrit-full-funnel"
    | "yuvrit-crm-lead-management"
    | "yuvrit-ads-dashboard"
    | "fresh-prints-account-management"
    | "ozdec-awareness-and-segmentation"
    | "yuvrit-offline-activations";
  caseStudyLabel: string;
}

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "growth-paid-acquisition",
    title: "Growth & Paid Acquisition",
    category: "Acquisition & Funnel Optimization",
    shortDesc: "Refined campaign targeting and messaging, then qualified leads before sending them to WhatsApp and the sales team.",
    tools: ["Meta Ads", "Google Ads", "ICP and audience targeting", "Creative and messaging iteration", "Placement optimization", "WhatsApp lead funnel", "Lead qualification", "Campaign performance analysis"],
    metric: "Google CPC ₹22.21 → ₹13.18 · Meta CPC ₹9.50 → ₹5.47",
    color: BRAND_COLORS.yuvrit,
    caseStudyId: "yuvrit-full-funnel",
    caseStudyLabel: "Yuvrit · Full Funnel",
  },
  {
    id: "crm-lead-management",
    title: "CRM & Lead Management",
    category: "Sales Infrastructure",
    shortDesc: "Created a structured lead-management process, starting in Excel and evolving into Zoho Bigin CRM workflows.",
    tools: ["Zoho Bigin CRM", "Lead lifecycle and stage design", "Lead routing and assignment", "Forms and OTP verification", "Lead-status and lost-reason tracking", "Follow-up cadence", "Data capture and workflow configuration", "Runo call tracking coordination"],
    metric: "Structured tracking for 4 reps · ~100–300 leads/mo",
    color: BRAND_COLORS.crm,
    caseStudyId: "yuvrit-crm-lead-management",
    caseStudyLabel: "Yuvrit · CRM Process",
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    category: "Performance Visibility",
    shortDesc: "Built a custom API-fed Meta Ads performance dashboard for multi-week comparisons without manual compilation.",
    tools: ["Advanced Excel", "Google Sheets", "Power BI", "Looker Studio", "GA4", "Custom web dashboards", "Campaign and funnel KPI reporting", "Week-on-week performance comparisons", "Data quality and reporting workflows"],
    metric: "Weekly reporting 3 hours → 15 minutes",
    color: BRAND_COLORS.analytics,
    caseStudyId: "yuvrit-ads-dashboard",
    caseStudyLabel: "Yuvrit · Ads Dashboard",
  },
  {
    id: "b2b-sales-account",
    title: "B2B Sales & Account Management",
    category: "Revenue & Client Execution",
    shortDesc: "Managed B2B opportunities and customer accounts from qualification and follow-up through to delivery.",
    tools: ["Lead qualification", "Opportunity prioritisation", "Pipeline management", "Client relationship management", "Requirement discovery", "Stakeholder coordination", "Order and delivery coordination", "Client expectation management"],
    metric: "$30K+ revenue · 140% quota · 95% on-time",
    color: BRAND_COLORS.freshPrints,
    caseStudyId: "fresh-prints-account-management",
    caseStudyLabel: "Fresh Prints · B2B Revenue",
  },
  {
    id: "brand-positioning-gtm",
    title: "Brand Positioning & Go-to-Market",
    category: "Brand & Customer Discovery",
    shortDesc: "Ran brand-awareness campaigns and survey-based market research to identify potential audience segments.",
    tools: ["Product and service messaging", "Premium positioning", "Creative direction", "Customer discovery", "Competitor research", "Audience segmentation", "Survey-based market research", "Brand-awareness campaigns"],
    metric: "78% survey-reported awareness lift* · 3 segments",
    color: BRAND_COLORS.ozdec,
    caseStudyId: "ozdec-awareness-and-segmentation",
    caseStudyLabel: "Ozdec · Awareness & Segments",
  },
  {
    id: "offline-crossfunctional",
    title: "Offline Campaigns & Cross-Functional Execution",
    category: "On-ground Marketing & Operations",
    shortDesc: "Worked on offline brand-awareness and customer-acquisition activities through residential-society health camps.",
    tools: ["Residential-society activations", "Health-camp coordination", "Offline campaign execution", "Founder and stakeholder coordination", "Cross-functional project follow-through"],
    metric: "20+ residential-society health camps",
    color: BRAND_COLORS.offline,
    caseStudyId: "yuvrit-offline-activations",
    caseStudyLabel: "Yuvrit · Offline Activations",
  },
];

type CaseStudy = {
  eyebrow: string;
  title: string;
  summary: string;
  problem: string;
  bullets: string[];
  outcomes: { value: string; label: string }[];
  evidence: string[];
  caveats: string[];
  images?: { src: string; label: string }[];
};

function getCaseStudy(skill: SkillItem) {
  return CASE_STUDIES[skill.caseStudyId] ?? CASE_STUDIES["yuvrit-full-funnel"];
}

const CASE_STUDIES: Record<string, CaseStudy> = {
  "yuvrit-full-funnel": {
    eyebrow: "Yuvrit Ayurveda · Growth & Paid Acquisition · Oct 2025 – Aug 2026",
    title: "Improving Lead Quality and Lead-to-Sale Conversion",
    summary:
      "Improved the acquisition funnel for a premium clinic service by refining campaign targeting and messaging, then qualifying leads before sending them to WhatsApp and the sales team.",
    problem:
      "Lead volume alone was not producing enough sales. Some people clicked by mistake or had low intent, and sales representatives often lacked context before contacting a lead.",
    bullets: [
      "Refined audience/ICP assumptions, campaign messaging, creatives and placements to better communicate the premium service proposition.",
      "Reviewed campaign and doctor/service alignment as part of acquisition optimization.",
      "Introduced OTP verification and targeted form questions, including preferred clinic and the concern a customer wanted help with.",
      "Used the captured context to help sales representatives prioritise and prepare for follow-up.",
    ],
    outcomes: [
      { value: "−40.7%", label: "Google Ads CPC (₹22.21 → ₹13.18)" },
      { value: "−42.4%", label: "Meta Ads CPC (₹9.50 → ₹5.47)" },
      { value: "20% → 37%", label: "Reported lead-to-paid-sale conversion" },
      { value: "~25% filtered", label: "Leads filtered at OTP verification stage" },
    ],
    evidence: ["Meta and Google Ads reports", "Lead form and qualification flow", "Sales/conversion reports if available"],
    caveats: ["Add the exact quarters and denominator for the 20% and 37% lead-to-sale figures.", "Use the 25–30% CAC result only with its calculation period and definition.", "The monthly lead figures are approximate."],
    images: [
      { src: "/case-studies/GAds- Jan- Mar.png", label: "Google Ads January- March" },
      { src: "/case-studies/GAds- Apr- Jun.png", label: "Google Ads April- June" },
      { src: "/case-studies/Meta Report Jan- Mar.png", label: "Meta Ads January- March" },
      { src: "/case-studies/Meta Report Apr- Jun.png", label: "Meta Ads April- June" },
    ],
  },
  "yuvrit-crm-lead-management": {
    eyebrow: "Yuvrit Ayurveda · CRM & Lead Management",
    title: "From Ad Hoc Lead Handling to a Structured CRM Process",
    summary:
      "Created a structured lead-management process, starting in Excel and evolving into Zoho Bigin CRM workflows, to improve lead visibility and follow-up consistency.",
    problem:
      "Lead handling was largely manual. The team had limited visibility into where leads were in the lifecycle, why opportunities were lost, or when each lead should be followed up.",
    bullets: [
      "Created an Excel tracker to record lead status, hot/cold classification, contact and follow-up dates.",
      "Developed the process into Zoho Bigin CRM, defining fields, stages, lifecycle logic, forms, lead routing, workflow automation, roles and permissions.",
      "Captured useful context such as clinic preference and reasons for lost leads.",
      "Worked with a four-person sales team; calls were tracked through Runo.",
      "Created requirements and acceptance criteria, performed UAT, documented defects, validated fixes and secured stakeholder sign-off.",
    ],
    outcomes: [
      { value: "100–300/mo", label: "Leads under structured pipeline view" },
      { value: "4 reps", label: "Sales team on the shared process" },
    ],
    evidence: ["Sanitized Excel tracker", "BRD and process map", "CRM screenshots", "UAT scenarios and workflow documentation"],
    caveats: ["Do not claim a numeric reduction in missed leads unless a before/after comparison exists."],
    images: [
      { src: "/case-studies/crm-leads.png", label: "Leads pipeline & qualification" },
      { src: "/case-studies/crm-bookings.png", label: "Consultation bookings & handoff" },
      { src: "/case-studies/crm-post-consultation.png", label: "Post-consultation pipeline" },
      { src: "/case-studies/crm-cancellation.png", label: "Cancellation flow" },
    ],
  },
  "ozdec-awareness-and-segmentation": {
    eyebrow: "Ozdec · Brand Positioning & Go-to-Market · Jan – Jun 2024",
    title: "Brand Awareness and Audience Discovery",
    summary:
      "Worked on brand-awareness campaigns and survey-based market research to better understand audience concerns and identify potential segments.",
    problem:
      "The team needed stronger awareness and a clearer understanding of different audience needs.",
    bullets: [
      "Ran Meta awareness campaigns.",
      "Used a survey form to collect audience concerns and market-research feedback.",
      "Used the research to identify three potential audience segments.",
    ],
    outcomes: [
      { value: "78%*", label: "Survey-reported brand awareness lift" },
      { value: "3", label: "Potential audience segments identified" },
    ],
    evidence: ["Campaign report", "Survey instrument/results", "Segment notes or research synthesis"],
    caveats: ["Add survey sample size, baseline, question wording and measurement period before presenting the 78% figure as a fully verified result."],
  },
  "fresh-prints-account-management": {
    eyebrow: "Fresh Prints · B2B Sales & Account Management · Jan – Oct 2025",
    title: "B2B Revenue and Account Execution",
    summary:
      "Managed B2B opportunities and customer accounts from qualification and follow-up through requirements coordination, order execution and client communication.",
    problem:
      "Success required converting opportunities while keeping customer requirements, internal stakeholders and delivery commitments aligned.",
    bullets: [
      "Managed the pipeline from lead qualification and opportunity prioritisation through follow-up and closure.",
      "Coordinated customer requirements and order execution across stakeholders.",
      "Kept customers informed about progress and delays and worked to preserve delivery expectations.",
    ],
    outcomes: [
      { value: "$30K+", label: "Individual revenue over eight months" },
      { value: "140%", label: "Reported quota attainment" },
      { value: "95%", label: "Reported on-time delivery rate" },
    ],
    evidence: ["Sales pipeline/revenue records", "Quota reporting", "Order and delivery records where available"],
    caveats: ["Use the official job title consistently across the website and all resume versions.", "Clarify the quota period if you plan to describe 140% attainment in detail."],
  },
  "yuvrit-ads-dashboard": {
    eyebrow: "Yuvrit Ayurveda · Analytics & Reporting",
    title: "Turning Manual Campaign Reviews into a Faster Reporting Workflow",
    summary:
      "Built a custom API-fed Meta Ads performance dashboard so the team could compare multiple weeks and spot underperforming ads without manually compiling screenshots and numbers.",
    problem:
      "Campaign reviews relied on manually writing down or screenshotting weekly results, then comparing figures by hand to determine what was working and what was underperforming.",
    bullets: [
      "Built a reporting dashboard using API-fed Meta Ads data.",
      "Enabled multi-week comparisons across campaigns and made underperforming ads easier to identify.",
      "Iterated on the dashboard based on reporting needs and performance questions.",
    ],
    outcomes: [
      { value: "3 hrs → 15 min", label: "Weekly reporting effort (91.7%)" },
    ],
    evidence: ["Dashboard screenshots", "Reporting workflow comparison", "Source reports/data where available"],
    caveats: ["Do not name a tool or claim a direct API integration implementation detail unless it is accurate and interview-defensible."],
    images: [
      {
        src: "/case-studies/Meta Ads Dash 1.png",
        label: "Automated reporting dashboard",
      },  {
        src: "/case-studies/Meta Ads Dash 2.png",
        label: "Automated reporting dashboard",
      },  {
        src: "/case-studies/Meta Ads Dash 3.png",
        label: "Automated reporting dashboard",
      },
    ],
  },
  "yuvrit-offline-activations": {
    eyebrow: "Yuvrit Ayurveda · Offline Campaigns & Cross-Functional Execution",
    title: "Residential-Society Health Camps and Offline Activations",
    summary:
      "Worked on offline brand-awareness and customer-acquisition activities through residential-society health camps.",
    problem:
      "The clinic needed local, on-ground touchpoints in addition to digital acquisition.",
    bullets: [
      "Worked on execution of health-camp activations across more than 20 residential-society events.",
      "Coordinated this work alongside digital marketing and the broader clinic growth effort.",
    ],
    outcomes: [
      { value: "20+", label: "Offline camp activations supported" },
    ],
    evidence: ["Campaign briefs/creatives", "Event records", "Registration or camp reports if available"],
    caveats: ["Add attendance, leads, bookings, revenue or cost only if you can substantiate them."],
  },
};

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!activeId) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [activeId]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section ref={sectionRef} id="skills-section" className="relative w-full bg-white py-24 sm:py-28 md:py-32">
      <div className="section-shell">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <p className="section-eyebrow">Skill Set & Capabilities</p>
          <h2 className="section-title">Skills I actually use.</h2>
          <p className="section-lead">
            Each skill is tied to real work, measurable outcomes, and a case study. Click a placard to zoom in.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS_DATA.map((skill, index) => (
            <motion.button
              key={skill.id}
              type="button"
              onClick={() => setActiveId(skill.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="skill-placard group text-left"
              style={{ "--skill-color": skill.color } as React.CSSProperties}
            >
              <span className="skill-placard-top">
                <span className="skill-category">{skill.category}</span>
                <span className="skill-open">View case study ↗</span>
              </span>
              <span className="skill-name">{skill.title}</span>
              <span className="skill-description">{skill.shortDesc}</span>
              <span className="skill-placard-bottom">
                <span className="skill-tools">
                  {skill.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="skill-tag">{tool}</span>
                  ))}
                </span>
                <span className="skill-metric">{skill.metric}</span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeId && (
          <CaseStudyModal
            skill={SKILLS_DATA.find((item) => item.id === activeId) ?? SKILLS_DATA[0]}
            onClose={() => setActiveId(null)}
            onSelect={(id) => setActiveId(id)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function CaseStudyModal({ skill, onClose, onSelect }: { skill: SkillItem; onClose: () => void; onSelect: (id: string) => void }) {
  const study = getCaseStudy(skill);

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/45 p-3 backdrop-blur-sm sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <motion.article
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 18 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="case-modal mx-auto my-4 max-w-5xl overflow-hidden sm:my-8"
      >
        <div className="case-modal-bar">
          <div className="flex min-w-0 items-center gap-3">
            <span className="case-dot" style={{ background: skill.color }} />
            <span className="truncate">Case study / {skill.caseStudyLabel}</span>
          </div>
          <button type="button" onClick={onClose} className="case-close" aria-label="Close case study">×</button>
        </div>

        <div className="border-b border-black/10 px-5 py-3 sm:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {SKILLS_DATA.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                className={`case-tab ${item.id === skill.id ? "case-tab-active" : ""}`}
                style={item.id === skill.id ? { borderColor: item.color, color: item.color } : undefined}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 py-7 sm:px-8 sm:py-9 md:px-12 md:py-12">
          <div className="max-w-3xl">
            <p className="case-eyebrow" style={{ color: skill.color }}>{study.eyebrow}</p>
            <h3 className="case-title">{study.title}</h3>
            <p className="case-summary">{study.summary}</p>
            <p className="case-summary mt-4 text-black/55"><span className="font-semibold text-black/70">Problem: </span>{study.problem}</p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-[1.25fr_.75fr]">
            <div className="case-panel">
              <p className="case-label">What I did</p>
              <ul className="case-list">
                {study.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
            <div className="case-panel">
              <p className="case-label">Verified impact</p>
              <div className="grid grid-cols-2 gap-4">
                {study.outcomes.map((outcome) => (
                  <div key={outcome.label}>
                    <p className="case-outcome" style={{ color: skill.color }}>{outcome.value}</p>
                    <p className="case-outcome-label">{outcome.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {study.images && study.images.length > 0 && (
            <div className="mt-9">
              <p className="case-label mb-4">Evidence / screenshots</p>
              <div className="grid gap-5">
                {study.images.map((image) => (
                  <figure key={image.src} className="case-image-card">
                    <div className="relative min-h-[220px] bg-[#f7f7f5] p-2 sm:min-h-[300px] sm:p-3">
                      <Image src={image.src} alt={image.label} fill sizes="(max-width: 768px) 100vw, 900px" className="object-contain p-2 sm:p-3" />
                    </div>
                    <figcaption>{image.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            <div className="case-panel">
              <p className="case-label">Evidence available</p>
              <ul className="case-list">
                {study.evidence.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="case-panel">
              <p className="case-label">Notes & caveats</p>
              <ul className="case-list">
                {study.caveats.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
