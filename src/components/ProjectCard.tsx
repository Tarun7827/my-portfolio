'use client';

import { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-zinc-900"
    >
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          {project.company && (
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              {project.company} {project.year && `• ${project.year}`}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-zinc-700 dark:text-zinc-300 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Platforms */}
        {project.platforms && project.platforms.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.platforms.slice(0, 3).map((platform) => (
              <span
                key={platform}
                className="px-2 py-1 text-xs font-medium rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              >
                {platform}
              </span>
            ))}
            {project.platforms.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium rounded-md bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                +{project.platforms.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-md bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* Hover indicator */}
        <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
          <span>View details</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
