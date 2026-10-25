import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Github, ArrowRight, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#C58D70] mb-2">
            Portfolio
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#292522] tracking-tight">
            My Projects
          </h2>
          <p className="text-sm sm:text-base text-[#71665E] mt-2 max-w-2xl">
            Projects that reflect my curiosity, creativity, and interest in solving real-world problems.
          </p>
          <div className="w-12 h-0.5 bg-[#C58D70] mt-3" />
        </div>

        {/* 2-Column Grid on Desktop, 1-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 bg-[#FFF8F1] border border-[#E9D5C4] rounded-xl hover:border-[#C58D70] hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Category & Status Bar */}
                <div className="flex items-center justify-between gap-2 text-xs font-semibold text-[#C58D70] uppercase tracking-wider mb-3">
                  <span>{project.category}</span>
                  {project.status && (
                    <span className="text-[11px] font-normal text-[#71665E] lowercase tracking-normal">
                      · {project.status}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-[#292522] mb-3 group-hover:text-[#C58D70] transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#71665E] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Small Technology Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs text-[#292522] bg-[#FBE9D8]/70 border border-[#E9D5C4] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-[#E9D5C4]/70 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#292522] hover:text-[#C58D70] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C58D70] transition-transform group-hover:translate-x-1" />
                </button>

                {/* GitHub button only if repository is available (Project 1 & 2) */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#292522] bg-[#FBE9D8] border border-[#E9D5C4] rounded-md hover:bg-[#F2DEC9] hover:border-[#C58D70] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-[#C58D70]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
