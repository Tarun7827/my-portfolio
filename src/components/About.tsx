'use client';

import { aboutData } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Avatar/Image */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              {aboutData.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2">
              {aboutData.name}
            </h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 mb-6">
              {aboutData.title}
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              {aboutData.summary}
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href={`mailto:${aboutData.email}`}
                className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {aboutData.email}
              </a>
              <a
                href={`tel:${aboutData.phone}`}
                className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {aboutData.phone}
              </a>
              <a
                href={aboutData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Education */}
            <div className="mt-8 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                {aboutData.education.degree}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {aboutData.education.institution} • {aboutData.education.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
