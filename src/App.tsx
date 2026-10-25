/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Exploring } from './components/Exploring';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBE9D8] text-[#292522] flex flex-col font-sans selection:bg-[#E9D5C4] selection:text-[#292522]">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Exploring />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 p-2.5 bg-[#FFF8F1] text-[#292522] border border-[#E9D5C4] rounded-full shadow-md hover:bg-[#FBE9D8] hover:border-[#C58D70] transition-all z-40 active:scale-95"
        >
          <ArrowUp className="w-4 h-4 text-[#C58D70]" />
        </button>
      )}
    </div>
  );
}
