'use client';

import { useEffect, useMemo } from 'react';
import { Project } from '@/data/portfolio';
import MediaCarousel, { MediaItem } from './MediaCarousel';

interface DetailedViewProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

function PlatformIcon({ platform }: { platform: string }) {
  const key = platform.toLowerCase();

  // Determine platform type
  const getPlatformType = () => {
    if (key.includes('android')) return 'android';
    if (key.includes('ios') || key.includes('iphone') || key.includes('apple')) return 'ios';
    if (key.includes('github') || key.includes('git')) return 'github';
    if (key.includes('web') || key.includes('site')) return 'website';
    return 'website'; // default
  };

  const platformType = getPlatformType();

  switch (platformType) {
    case 'android':
      return (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.6 9.48l1.42-2.46a.5.5 0 0 0-.87-.5l-1.45 2.51a7.07 7.07 0 0 0-7.38 0L7.87 6.52a.5.5 0 1 0-.87.5l1.42 2.46A6.27 6.27 0 0 0 6 13.5V18a2 2 0 0 0 2 2h1v1.5a.5.5 0 0 0 1 0V20h4v1.5a.5.5 0 0 0 1 0V20h1a2 2 0 0 0 2-2v-4.5a6.27 6.27 0 0 0-2.4-4.02ZM9 11a.75.75 0 1 1 .75-.75A.76.76 0 0 1 9 11Zm6 0a.75.75 0 1 1 .75-.75A.76.76 0 0 1 15 11Z" />
        </svg>
      );

    case 'ios':
      return (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.71 17.34c-.37.85-.55 1.23-1.04 1.99-.68 1.04-1.64 2.34-2.84 2.35-1.06 0-1.33-.69-2.78-.69s-1.77.7-2.83.7c-1.2.01-2.12-1.12-2.81-2.16-1.53-2.32-1.69-4.49-1.67-4.6.04-1.1.53-2.11 1.32-2.78.71-.6 1.67-1.03 2.63-1.04 1.03-.02 1.99.7 2.78.7.78 0 1.83-.86 3.09-.73.53.02 2.02.21 2.98 1.58-.08.05-1.78 1.04-1.76 3.06.02 2.41 2.12 3.2 2.14 3.21ZM13.25 5.3c.52-.65.88-1.55.78-2.45-.76.03-1.7.5-2.25 1.14-.49.57-.92 1.5-.81 2.38.86.07 1.75-.43 2.28-1.07Z" />
        </svg>
      );

    case 'github':
      return (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );

    case 'website':
    default:
      return (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
          <path
            d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"
            strokeWidth="1.8"
          />
        </svg>
      );
  }
}

export default function DetailedView({ project, isOpen, onClose }: DetailedViewProps) {
  // Combine images and videos into media array
  const mediaItems = useMemo<MediaItem[]>(() => {
    const items: MediaItem[] = [];
    
    if (project?.image && project.image.length > 0) {
      project.image.forEach((img) => {
        items.push({ type: 'image', src: img, alt: project.title });
      });
    }
    
    if (project?.video && project.video.length > 0) {
      project.video.forEach((vid) => {
        items.push({ type: 'video', src: vid, alt: project.title });
      });
    }
    
    return items;
  }, [project]);

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

          {/* Media Carousel */}
          {/* {mediaItems.length > 0 && ( */}
            <MediaCarousel media={mediaItems} title={project.title} />
          {/* )} */}

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

          {/* Platform Links */}
          {project.platformLinks && project.platformLinks.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                Platform Links
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.platformLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-4 py-2 text-sm font-medium hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white transition-colors"
                  >
                    <PlatformIcon platform={link.platform} />
                    <span>{link.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
