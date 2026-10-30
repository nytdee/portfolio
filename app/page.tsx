import Navbar from "./components/Navbar";
import Overlay from "./components/Overlay";
import ProjectsSection from "./components/ProjectsSection";
import FlipCardGrid from "./components/FlipCardGrid";
import SkillsSection from "./components/SkillsSection";
import About from "./components/About";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main id="home-page" className="relative">
      <Navbar />

      {/* ═══ Hero Section ═══ */}
      <section id="hero-section" className="relative h-screen w-full overflow-hidden">
        <Image
          src="/sequence/frame_00.gif"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
        <Overlay />
      </section>

      {/* ═══ Selected Projects ═══ */}
      <ProjectsSection />

      {/* ═══ Work Experience Flip Cards ═══ */}
      <FlipCardGrid />

      {/* ═══ Skills Set & Case Studies Deep Dive ═══ */}
      <SkillsSection />

      {/* ═══ About ═══ */}
      <About />

      {/* ═══ Footer / Contact ═══ */}
      <Footer />
    </main>
  );
}
