'use client';

import { useState } from 'react';
import Image from 'next/image';

export type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
};

interface MediaCarouselProps {
  media: MediaItem[];
  title: string;
}

export default function MediaCarousel({ media, title }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  if (!media || media.length === 0) return null;

  const currentMedia = media[currentIndex];
  return (
    <div className="mb-6">
      <div className="relative group rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {/* Media Display */}
        <div className="relative w-full h-80 flex items-center justify-center">
          {currentMedia.type === 'image' ? (
            <Image
              src={currentMedia.src || ""}
              alt={currentMedia.alt || title}
              width={800}
              height={320}
              className="w-full h-full object-contain"
            />
          ) : (
           <iframe width="560" height="315" src={currentMedia.src} title="YouTube video player" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          // <iframe src={currentMedia.src} width="640" height="480"></iframe>  
          // <video
            //   src={currentMedia.src}
            //   controls
            //   className="w-full h-full object-contain"
            //   preload="metadata"
            // >
            //   Your browser does not support the video tag.
            // </video>
          )}
        </div>

        {/* Navigation Buttons - Only show if more than 1 item */}
        {media.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-white shadow-lg hover:bg-white dark:hover:bg-zinc-800 transition-all"
              aria-label="Previous media"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-white shadow-lg hover:bg-white dark:hover:bg-zinc-800 transition-all"
              aria-label="Next media"
            >
              <svg
                className="w-6 h-6"
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
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {media.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white dark:bg-white w-6'
                      : 'bg-white/50 dark:bg-white/50 hover:bg-white/75 dark:hover:bg-white/75'
                  }`}
                  aria-label={`Go to media ${index + 1}`}
                />
              ))}
            </div>

            {/* Media Counter */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-sm font-medium">
              {currentIndex + 1} / {media.length}
            </div>
          </>
        )}

        {/* Media Type Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 text-white text-xs font-medium uppercase">
          {currentMedia.type}
        </div>
      </div>
    </div>
  );
}
