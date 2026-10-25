import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Globe, Database, Brain, Wrench, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return <Code2 className="w-4 h-4 text-[#C58D70]" />;
      case 'Web Development':
        return <Globe className="w-4 h-4 text-[#C58D70]" />;
      case 'Database Technologies':
        return <Database className="w-4 h-4 text-[#C58D70]" />;
      case 'AI and Data Science':
        return <Brain className="w-4 h-4 text-[#C58D70]" />;
      case 'Development Tools':
        return <Wrench className="w-4 h-4 text-[#C58D70]" />;
      case 'Additional Skills':
        return <Sparkles className="w-4 h-4 text-[#C58D70]" />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#FFF8F1]/60 border-y border-[#E9D5C4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#C58D70] mb-2">
            Competencies
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#292522] tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-0.5 bg-[#C58D70] mt-3" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-[#FFF8F1] border border-[#E9D5C4] rounded-xl hover:border-[#C58D70] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  {getCategoryIcon(category.title)}
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#292522]">
                    {category.title}
                  </h3>
                </div>

                {/* Clean skill labels without pills or fake percentage bars */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium text-[#292522] bg-[#FBE9D8]/60 border border-[#E9D5C4] rounded"
                    >
                      {skill}
                    </span>
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
