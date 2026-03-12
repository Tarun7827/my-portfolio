'use client';

import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 dark:text-white mb-4">
          Professional Experience
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
          9+ years of building exceptional software experiences
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-600/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white dark:ring-zinc-900 z-10"></div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="inline-block bg-white dark:bg-zinc-950 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-full">
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {exp.period}
                      </p>
                    </div>

                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-zinc-700 dark:text-zinc-300 flex items-start gap-2"
                        >
                          <span className={`text-blue-600 dark:text-blue-400 mt-1.5 ${index % 2 === 0 ? 'md:order-2' : ''}`}>•</span>
                          <span className="flex-1">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.projects && exp.projects.length > 0 && (
                      <div>
                        <p className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">
                          Key Projects:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((project) => (
                            <span
                              key={project}
                              className="px-3 py-1 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
