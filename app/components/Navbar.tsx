"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work-experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills-section" },
    { label: "About", href: "#about-section" },
    { label: "Contact", href: "#contact-section" },
    {
      label: "Resume",
      href: "https://docs.google.com/document/d/1O53K6AgyMrb01X0Pc5wThLpfcH0EFHEUyeifXSQBc0k/edit?usp=sharing",
      external: true,
    },
  ];

  const textClass = scrolled
    ? "text-black/65 hover:text-black"
    : "text-white/75 hover:text-white";

  return (
    <>
      <motion.nav
        id="main-nav"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? "border-black/[0.06] bg-white/40 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-sm backdrop-saturate-150 rounded-full m-4"
            : "border-transparent bg-transparent py-6 sm:py-8"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1720px] items-center justify-between px-6 sm:px-10 lg:px-14">
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`text-2xl font-bold tracking-tight ${scrolled ? "text-black" : "text-white"}`}
          >
            Deepanshu<span className="text-[#c8a86e]">.</span>
          </a>

          <div className="hidden items-center gap-8 sm:flex lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`link-underline text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${textClass}`}
              >
                {link.label}
                {link.external && <span className="ml-1">↗</span>}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="relative flex h-10 w-10 flex-col items-end justify-center gap-1.5 sm:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-px w-7 ${scrolled ? "bg-black" : "bg-white"}`}
            />
            <span
              className={`h-px w-5 ${scrolled ? "bg-black" : "bg-white"}`}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-white p-8 sm:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold tracking-tight text-black"
              >
                {link.label}
                {link.external && " ↗"}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
