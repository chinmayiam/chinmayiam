import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin, Github, ExternalLink, Copy, Check, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = 'Please enter your name';
    if (!formState.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formState.message.trim()) errs.message = 'Please enter a message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate real mailto intent so user's actual email client dispatches the message
    const subjectLine = formState.subject.trim()
      ? encodeURIComponent(formState.subject)
      : encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const bodyContent = encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    );

    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subjectLine}&body=${bodyContent}`;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#FFF8F1]/60 border-t border-[#E9D5C4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#C58D70] mb-2">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#292522] tracking-tight">
            Let's Connect.
          </h2>
          <p className="text-sm sm:text-base text-[#71665E] mt-2 max-w-2xl leading-relaxed">
            I'm always open to connecting with fellow developers, exploring innovative ideas, collaborating on projects, and discovering opportunities to learn and grow.
          </p>
          <div className="w-12 h-0.5 bg-[#C58D70] mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 bg-[#FFF8F1] border border-[#E9D5C4] rounded-xl hover:border-[#C58D70] transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[#FBE9D8] rounded-md border border-[#E9D5C4]">
                  <Mail className="w-4 h-4 text-[#C58D70]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#71665E]">
                    Email
                  </p>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-sm sm:text-base font-bold text-[#292522] hover:text-[#C58D70] transition-colors break-all"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#E9D5C4]/70">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#292522] bg-[#FBE9D8] border border-[#E9D5C4] rounded-md hover:bg-[#F2DEC9] transition-colors"
                >
                  Send Email
                  <ExternalLink className="w-3 h-3 text-[#C58D70]" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#71665E] hover:text-[#292522] hover:bg-[#FBE9D8] rounded-md transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 bg-[#FFF8F1] border border-[#E9D5C4] rounded-xl hover:border-[#C58D70] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#FBE9D8] rounded-md border border-[#E9D5C4]">
                  <Linkedin className="w-4 h-4 text-[#C58D70]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#71665E]">
                    Professional Network
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#292522]">
                    LinkedIn Profile
                  </p>
                </div>
              </div>

              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold text-[#292522] bg-[#FBE9D8] border border-[#E9D5C4] rounded-md hover:bg-[#F2DEC9] hover:border-[#C58D70] transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C58D70]" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-6 bg-[#FFF8F1] border border-[#E9D5C4] rounded-xl hover:border-[#C58D70] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#FBE9D8] rounded-md border border-[#E9D5C4]">
                  <Github className="w-4 h-4 text-[#C58D70]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#71665E]">
                    Code Repositories
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#292522]">
                    GitHub Profile
                  </p>
                </div>
              </div>

              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold text-[#292522] bg-[#FBE9D8] border border-[#E9D5C4] rounded-md hover:bg-[#F2DEC9] hover:border-[#C58D70] transition-colors"
              >
                <span>Explore My GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C58D70]" />
              </a>
            </div>
          </div>

          {/* Direct Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#FFF8F1] border border-[#E9D5C4] rounded-xl">
              <h3 className="text-base sm:text-lg font-bold text-[#292522] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-[#71665E] mb-6">
                Fill in your details to launch a pre-composed message directly in your email client.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#71665E] mb-1">
                      Your Name <span className="text-[#C58D70]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => {
                        setFormState({ ...formState, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-3.5 py-2.5 text-sm text-[#292522] bg-[#FBE9D8]/50 border border-[#E9D5C4] rounded-md focus:outline-hidden focus:border-[#C58D70] focus:ring-1 focus:ring-[#C58D70] placeholder-[#71665E]/60 transition-all"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#71665E] mb-1">
                      Your Email <span className="text-[#C58D70]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({ ...formState, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-3.5 py-2.5 text-sm text-[#292522] bg-[#FBE9D8]/50 border border-[#E9D5C4] rounded-md focus:outline-hidden focus:border-[#C58D70] focus:ring-1 focus:ring-[#C58D70] placeholder-[#71665E]/60 transition-all"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-[#71665E] mb-1">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Internship Inquiry / Hackathon Collaboration"
                    className="w-full px-3.5 py-2.5 text-sm text-[#292522] bg-[#FBE9D8]/50 border border-[#E9D5C4] rounded-md focus:outline-hidden focus:border-[#C58D70] focus:ring-1 focus:ring-[#C58D70] placeholder-[#71665E]/60 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#71665E] mb-1">
                    Message <span className="text-[#C58D70]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => {
                      setFormState({ ...formState, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Hello Chinmayi, I saw your projects and would love to discuss..."
                    className="w-full px-3.5 py-2.5 text-sm text-[#292522] bg-[#FBE9D8]/50 border border-[#E9D5C4] rounded-md focus:outline-hidden focus:border-[#C58D70] focus:ring-1 focus:ring-[#C58D70] placeholder-[#71665E]/60 transition-all resize-y"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#292522] bg-[#FBE9D8] border border-[#E9D5C4] rounded-md hover:bg-[#F2DEC9] hover:border-[#C58D70] transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C58D70]" />
                    <span>Open in Email Client</span>
                  </button>
                </div>

                {sentNotice && (
                  <p className="text-xs text-emerald-800 bg-emerald-50/80 border border-emerald-200 p-2.5 rounded-md mt-2">
                    Your email client is opening with your formatted message addressed to {portfolioData.personal.email}. If it did not launch automatically, you can send an email directly using the details on the left.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
