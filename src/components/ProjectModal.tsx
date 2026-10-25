import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="bg-[#FFF8F1] border border-[#E9D5C4] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#71665E] hover:text-[#292522] hover:bg-[#FBE9D8] rounded-md transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C58D70]">
            {project.category}
          </span>
          <h3 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-[#292522]">
            {project.title}
          </h3>
          {project.status && (
            <span className="inline-block text-xs font-medium text-[#71665E] bg-[#FBE9D8] px-2.5 py-0.5 rounded border border-[#E9D5C4]">
              Status: {project.status}
            </span>
          )}
        </div>

        {/* Modal Body */}
        <div className="mt-6 space-y-5 text-sm sm:text-base text-[#71665E] leading-relaxed">
          <p>{project.longDescription || project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#292522] mb-3">
                Key Concepts & Innovations
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#292522]">
                    <CheckCircle2 className="w-4 h-4 text-[#C58D70] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#292522] mb-2.5">
              Technologies & Methodologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-medium text-[#292522] bg-[#FBE9D8] border border-[#E9D5C4] rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-[#E9D5C4] flex flex-wrap items-center justify-between gap-4">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#292522] bg-[#FBE9D8] border border-[#E9D5C4] rounded-md hover:bg-[#F2DEC9] hover:border-[#C58D70] transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
              <ExternalLink className="w-3.5 h-3.5 text-[#C58D70]" />
            </a>
          ) : (
            <span className="text-xs text-[#71665E] italic">
              Project repository link will be available upon deployment.
            </span>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#71665E] hover:text-[#292522] hover:bg-[#FBE9D8] rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
