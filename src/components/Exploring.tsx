import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Compass } from 'lucide-react';

export const Exploring: React.FC = () => {
  return (
    <section className="py-18">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#C58D70] mb-2">
            Interests & Horizons
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#292522] tracking-tight">
            What I'm Exploring
          </h2>
          <div className="w-12 h-0.5 bg-[#C58D70] mt-3" />
        </div>

        {/* Minimal Content Container */}
        <div className="p-6 sm:p-8 bg-[#FFF8F1] border border-[#E9D5C4] rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left 7 cols: Statement */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C58D70] uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Learning & Growth Philosophy</span>
              </div>
              <p className="text-base sm:text-lg text-[#292522] font-medium leading-relaxed">
                "{portfolioData.exploring.statement}"
              </p>
              <p className="text-xs text-[#71665E]">
                Driven by continuous learning, hackathons, and practical exploration of modern computing.
              </p>
            </div>

            {/* Right 5 cols: Clean Interest Tags */}
            <div className="md:col-span-5 flex flex-wrap gap-2.5">
              {portfolioData.exploring.items.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-2 text-xs sm:text-sm font-medium text-[#292522] bg-[#FBE9D8]/80 border border-[#E9D5C4] rounded-lg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
