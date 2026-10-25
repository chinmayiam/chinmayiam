import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#FBE9D8] border-t border-[#E9D5C4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Identity & Motto */}
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-base font-bold tracking-tight text-[#292522]">
              {portfolioData.personal.name}
            </h4>
            <p className="text-xs text-[#71665E] italic">
              "Learning. Building. Growing."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-[#71665E]">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 hover:text-[#292522] hover:bg-[#FFF8F1] rounded-md transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 hover:text-[#292522] hover:bg-[#FFF8F1] rounded-md transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Email Chinmayi AM"
              className="p-2 hover:text-[#292522] hover:bg-[#FFF8F1] rounded-md transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-right">
            <p className="text-xs text-[#71665E]">
              &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
