import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#C58D70] mb-2">
            Academic Background
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#292522] tracking-tight">
            Education
          </h2>
          <div className="w-12 h-0.5 bg-[#C58D70] mt-3" />
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {portfolioData.education.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-[#FFF8F1] border border-[#E9D5C4] rounded-xl hover:border-[#C58D70] transition-all relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left: Degree & Institution Details */}
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#C58D70] uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4" />
                    <span>{item.level}</span>
                    {item.year && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1 text-[#71665E]">
                          <Calendar className="w-3 h-3" />
                          {item.year}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#292522]">
                    {item.degreeOrStage}
                  </h3>

                  <p className="text-sm font-medium text-[#71665E]">
                    {item.institution}
                    {item.location && <span>, {item.location}</span>}
                  </p>

                  {item.details && (
                    <p className="text-xs sm:text-sm text-[#71665E]/90 pt-1 leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>

                {/* Right: Academic Scores & CGPA (Strictly separate as specified) */}
                <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
                  {item.performance.map((score, i) => (
                    <div
                      key={i}
                      className="px-4 py-3 bg-[#FBE9D8]/70 border border-[#E9D5C4] rounded-lg min-w-[130px] flex flex-col justify-center"
                    >
                      <span className="text-[11px] font-medium text-[#71665E]">
                        {score.label}
                      </span>
                      <span className="text-xl font-bold text-[#292522] tracking-tight tabular-nums mt-0.5">
                        {score.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
