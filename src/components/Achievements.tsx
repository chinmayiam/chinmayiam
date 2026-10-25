import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Award, ShieldCheck } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getIcon = (id: string, isHighlight?: boolean) => {
    if (isHighlight) {
      return <Trophy className="w-5 h-5 text-[#C58D70]" />;
    }
    if (id === 'reverse-engineering-2nd') {
      return <Award className="w-5 h-5 text-[#C58D70]" />;
    }
    return <ShieldCheck className="w-5 h-5 text-[#C58D70]" />;
  };

  return (
    <section id="achievements" className="py-20 bg-[#FFF8F1]/60 border-y border-[#E9D5C4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#C58D70] mb-2">
            Recognition
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#292522] tracking-tight">
            Achievements
          </h2>
          <p className="text-sm sm:text-base text-[#71665E] mt-2 max-w-2xl">
            Milestones from my journey of learning, innovation, and technical exploration.
          </p>
          <div className="w-12 h-0.5 bg-[#C58D70] mt-3" />
        </div>

        {/* 3 Clean Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.achievements.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-xl border transition-all flex flex-col justify-between ${
                item.isHighlight
                  ? 'bg-[#FFF8F1] border-[#C58D70] ring-1 ring-[#C58D70]/30 shadow-xs'
                  : 'bg-[#FFF8F1] border-[#E9D5C4] hover:border-[#C58D70]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2 bg-[#FBE9D8] rounded-md border border-[#E9D5C4]">
                    {getIcon(item.id, item.isHighlight)}
                  </div>
                  {item.isHighlight ? (
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C58D70] bg-[#FBE9D8] px-2.5 py-0.5 rounded border border-[#E9D5C4]">
                      Featured Award
                    </span>
                  ) : item.year ? (
                    <span className="text-xs font-medium text-[#71665E]">
                      {item.year}
                    </span>
                  ) : null}
                </div>

                <p className="text-xs uppercase tracking-wider font-semibold text-[#71665E] mb-1.5">
                  {item.category}
                </p>

                <h3 className="text-lg font-bold text-[#292522] leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#71665E] leading-relaxed">
                  {item.recognition}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E9D5C4]/60">
                <p className="text-xs text-[#71665E]/90 italic leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
