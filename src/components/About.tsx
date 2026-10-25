import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { BookOpen, School, Cpu, Target } from 'lucide-react';

export const About: React.FC = () => {
  const getCardIcon = (label: string) => {
    switch (label) {
      case 'Field':
        return <BookOpen className="w-4 h-4 text-[#C58D70]" />;
      case 'University':
        return <School className="w-4 h-4 text-[#C58D70]" />;
      case 'Interests':
        return <Cpu className="w-4 h-4 text-[#C58D70]" />;
      case 'Focus':
        return <Target className="w-4 h-4 text-[#C58D70]" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-[#FFF8F1]/60 border-y border-[#E9D5C4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#C58D70] mb-2">
            Overview
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#292522] tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-[#C58D70] mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-[#292522]">
            {portfolioData.about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-base text-[#71665E] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Minimal Info Cards Column (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolioData.about.infoCards.map((card) => (
              <div
                key={card.label}
                className="p-5 bg-[#FFF8F1] border border-[#E9D5C4] rounded-xl hover:border-[#C58D70] transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  {getCardIcon(card.label)}
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#71665E]">
                    {card.label}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#292522] leading-snug">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
