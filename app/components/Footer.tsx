"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nytdee" },
    { label: "Email", href: "mailto:deepanshup133@gmail.com" },
  ];

  return (
    <footer ref={ref} id="contact-section" className="border-t border-black/10 bg-[#f7f7f5]">
      <div className="section-shell py-20 sm:py-24 md:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center">
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-black sm:text-5xl md:text-6xl">
            Let&apos;s work <span className="text-[#b58b3d]">together.</span>
          </h2>
          <a href="mailto:deepanshup133@gmail.com" className="mt-8 inline-flex items-center border-b border-black/20 pb-2 text-base text-black transition-colors hover:border-[#b58b3d] hover:text-[#8f6b2f]">
            deepanshup133@gmail.com ↗
          </a>
          <div className="mt-5">
            <a href="https://docs.google.com/document/d/1O53K6AgyMrb01X0Pc5wThLpfcH0EFHEUyeifXSQBc0k/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs font-medium uppercase tracking-[0.14em] text-black/45 hover:text-black">
              View / Download Resume ↗
            </a>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-black/10 pt-6 text-xs text-black/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Deepanshu Pandey</p>
          <div className="flex gap-6">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} className="hover:text-black">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
