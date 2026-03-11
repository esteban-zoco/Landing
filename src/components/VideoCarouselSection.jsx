import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { panelCarousel } from "../data/content";

export default function VideoCarouselSection() {
  const { title, slides } = panelCarousel;
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);
  const videoRefs = useRef([]);

  const clampIndex = (nextIndex) => {
    if (nextIndex < 0) {
      return slides.length - 1;
    }
    if (nextIndex >= slides.length) {
      return 0;
    }
    return nextIndex;
  };

  const goTo = (nextIndex) => {
    setActiveIndex(clampIndex(nextIndex));
  };

  useEffect(() => {
    const card = cardRefs.current[activeIndex];
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  return (
    <section className="section-spacing bg-[#F3F3F3]">
      <div className="container-shell">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <h2 className="font-semibold text-3xl font-display md:text-4xl">{title}</h2>
          </div>
        </Reveal>

        <div className="space-y-6">
          <div className="scrollbar-hide -mx-[calc(50vw-50%)] flex w-screen items-center snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-visible px-6 py-12 md:px-10">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
              <div
                key={slide.title}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className={`relative h-[420px] w-[670px] shrink-0 snap-center overflow-hidden rounded-3xl bg-ink/10 shadow-card transition-all duration-500 ${
                  isActive ? "scale-[1.06] opacity-100" : "scale-[0.92] opacity-70"
                }`}
              >
                <video
                  ref={(node) => {
                    videoRefs.current[index] = node;
                  }}
                  className="h-full w-full object-cover"
                  src={slide.videoUrl}
                  poster={slide.poster}
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40" />
                    <span>{slide.title}</span>
                  </div>
                  {isActive ? (
                    <p className="mt-2 text-sm text-white/85 max-w-[445px]">
                      {slide.description}
                    </p>
                  ) : null}
                </div>
              </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              className="flex h-10 w-10 items-center justify-center text-ink transition hover:text-ink/70"
              aria-label="Anterior"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 6L9 12L15 18" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              className="flex h-10 w-10 items-center justify-center text-ink transition hover:text-ink/70"
              aria-label="Siguiente"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6L15 12L9 18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
