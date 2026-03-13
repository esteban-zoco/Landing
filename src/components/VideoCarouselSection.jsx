import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { panelCarousel } from "../data/content";

export default function VideoCarouselSection() {
  const { title, slides } = panelCarousel;
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);
  const videoRefs = useRef([]);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });
  const cardScaleRaw = useTransform(scrollYProgress, [0, 0.6], [0.75, 1]);
  const cardScale = useSpring(cardScaleRaw, {
    stiffness: 140,
    damping: 24,
    mass: 0.9,
  });

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
    const track = trackRef.current;
    const card = cardRefs.current[activeIndex];
    if (track && card) {
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const trackWidth = track.clientWidth;
      const nextLeft = cardLeft - (trackWidth - cardWidth) / 2;
      track.scrollTo({ left: Math.max(0, nextLeft), behavior: "smooth" });
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

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (prefersReduced.matches) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => clampIndex(prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section ref={sectionRef} className="section-spacing bg-[#F3F3F3]">
      <Reveal className="container-shell">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-semibold text-3xl font-display md:text-4xl">{title}</h2>
        </div>

        <div className="space-y-6">
          <div
            ref={trackRef}
            className="scrollbar-hide -mx-[calc(50vw-50%)] flex w-screen items-center snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-visible px-6 py-12 md:px-10"
          >
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
              <motion.div
                key={slide.title}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                style={{ scale: cardScale }}
                className={`relative h-[572px] w-[520px] shrink-0 snap-center overflow-hidden rounded-3xl bg-ink/10 shadow-card transition-all duration-500 ${
                  isActive
                    ? "h-[572px] w-[762px] opacity-100"
                    : "h-[572px] w-[520px] opacity-100"
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
                {!isActive ? (
                  <div className="pointer-events-none absolute inset-0 bg-black/60 backdrop-blur-[10px]" />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-14 right-6 text-white">
                  <div className="flex items-center gap-2 text-[20px] font-semibold">
                    {slide.icon ? (
                      <img
                        src={slide.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-6 w-6"/>
                    ) : null}

                    <span>{slide.title}</span>
                  </div>
                  {isActive ? (
                    <p className="mt-2 text-[18px] text-white/85 max-w-[445px]">
                      {slide.description}
                    </p>
                  ) : null}
                </div>
              </motion.div>
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
      </Reveal>
    </section>
  );
}
