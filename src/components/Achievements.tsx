'use client';

import { achievements } from '@/data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 dark:text-white mb-4">
          Key Achievements
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
          Highlights of my professional journey and impact on projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="group p-6 bg-white dark:bg-zinc-950 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {achievement.title}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
