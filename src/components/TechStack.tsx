'use client';

import { techStack } from '@/data/portfolio';

export default function TechStack() {
  const categories = Object.entries(techStack);

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 dark:text-white mb-4">
          Tech Stack
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map(([category, items], index) => (
            <div
              key={category}
              className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 text-sm bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
