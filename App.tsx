/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import AcademicTimeline from "./components/AcademicTimeline";
import SkillsGrid from "./components/SkillsGrid";
import InternshipCard from "./components/InternshipCard";
import ProjectCards from "./components/ProjectCards";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "education", "skills", "experience", "projects", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-purple-500/30 selection:text-white overflow-x-hidden antialiased font-sans">
      {/* Dynamic Sticky Header */}
      <Header activeSection={activeSection} />

      {/* Main Sections with Elegant Transitions */}
      <main className="relative">
        {/* Home/Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Education Section */}
        <AcademicTimeline />

        {/* Skills Section */}
        <SkillsGrid />

        {/* Experience Section */}
        <InternshipCard />

        {/* Projects Section */}
        <ProjectCards />

        {/* Contact Form Section */}
        <ContactForm />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

