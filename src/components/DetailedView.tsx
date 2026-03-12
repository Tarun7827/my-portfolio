'use client';

import { useEffect } from 'react';
import { Project } from '@/data/portfolio';

interface DetailedViewProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailedView({ project, isOpen, onClose }: DetailedViewProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-zinc-700 dark:text-zinc-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              {project.company && <span>{project.company}</span>}
              {project.company && project.year && <span>•</span>}
              {project.year && <span>{project.year}</span>}
            </div>
          </div>

          {/* Image placeholder */}
          {project.image && (
            <div className="mb-6 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          {/* Detailed Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
              About the Project
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                Key Achievements
              </h3>
              <ul className="space-y-2">
                {project.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Platforms */}
          {project.platforms && project.platforms.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
