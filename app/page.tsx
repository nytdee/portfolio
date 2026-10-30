import Navbar from "./components/Navbar";
import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import ProjectsSection from "./components/ProjectsSection";
import FlipCardGrid from "./components/FlipCardGrid";
import SkillsSection from "./components/SkillsSection";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="home-page" className="relative">
      <Navbar />

      {/* ═══ Scrollytelling Hero Section ═══ */}
      <section id="hero-section" className="relative">
        <ScrollyCanvas />
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
