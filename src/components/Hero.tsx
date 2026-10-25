import React from 'react';
import { ArrowRight, Mail, Compass, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Typographic Hero Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#71665E] flex items-center gap-2">
                <span className="w-6 h-px bg-[#C58D70]" />
                {portfolioData.personal.name}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#292522] leading-[1.15] tracking-tight text-balance">
                {portfolioData.personal.title}
              </h1>

              <p className="text-sm sm:text-base font-medium text-[#C58D70] pt-1">
                {portfolioData.personal.tagline}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#71665E] leading-relaxed max-w-2xl">
              {portfolioData.personal.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#292522] bg-[#FFF8F1] border border-[#E9D5C4] rounded-md shadow-xs hover:bg-[#F2DEC9] hover:border-[#C58D70] active:scale-[0.99] transition-all cursor-pointer"
              >
                Explore My Projects
                <ArrowRight className="w-4 h-4 text-[#C58D70]" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#71665E] bg-transparent border border-[#E9D5C4] rounded-md hover:text-[#292522] hover:bg-[#FFF8F1]/70 transition-all cursor-pointer"
              >
                Get In Touch
                <Mail className="w-4 h-4 text-[#71665E]" />
              </button>
            </div>

            {/* Quick Context Strip */}
            <div className="pt-6 border-t border-[#E9D5C4]/70 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#71665E]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C58D70]" />
                <span>GM University, Karnataka</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C58D70]" />
                <span>Information Science & Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C58D70]" />
                <span>Open for Technical Internships & Collaboration</span>
              </div>
            </div>
          </div>

          {/* Photo Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer decorative card frame in cream */}
              <div className="p-3 sm:p-4 bg-[#FFF8F1] border border-[#E9D5C4] rounded-2xl shadow-xs transition-transform duration-300 hover:shadow-md">
                <div className="overflow-hidden rounded-xl border border-[#E9D5C4]/80 aspect-4/5 relative bg-[#FBE9D8]/50">
                  <img
                    src={portfolioData.personal.photoUrl}
                    alt="Chinmayi AM - Information Science and Engineering student at GM University"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                </div>

                {/* Photo Caption Strip */}
                <div className="mt-3.5 px-2 flex items-center justify-between text-xs text-[#71665E]">
                  <div>
                    <p className="font-semibold text-[#292522]">Chinmayi AM</p>
                    <p className="text-[11px] text-[#71665E]">Information Science & Engineering</p>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 bg-[#FBE9D8] rounded text-[#292522] border border-[#E9D5C4]">
                    GM University
                  </span>
                </div>
              </div>

              {/* Subtle aesthetic accent badge */}
              <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#FFF8F1] border border-[#E9D5C4] rounded-lg text-xs font-medium text-[#292522] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C58D70]" />
                <span>Innovating with Purpose</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
