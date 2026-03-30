import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { panelCarousel } from "../data/content";
import TitleReveal from "./TitleReveal";

export default function VideoCarouselSection() {
  const { title, slides } = panelCarousel;
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);
  const videoRefs = useRef([]);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const hoverCooldownRef = useRef(0);
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

  const handleHoverStep = (index) => {
    const now = Date.now();
    if (now - hoverCooldownRef.current < 450) {
      return;
    }
    hoverCooldownRef.current = now;
    setActiveIndex((prev) => {
      if (index === prev) return prev;
      const direction = index > prev ? 1 : -1;
      return clampIndex(prev + direction);
    });
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
    <section
      id="funciones"
      ref={sectionRef}
      className="section-spacing bg-[#F3F3F3]"
    >
      <Reveal className="container-shell">
        <div className="max-w-2xl md:mb-16">
          <TitleReveal className="font-semibold leading-[1.1] text-[23px] font-display md:text-[45px] md:min-w-[730px] md:leading-[1.1]">{title}</TitleReveal>
        </div>

        <div className="space-y-6">
          <div
            ref={trackRef}
            className="scrollbar-hide -mx-[calc(50vw-50%)] flex w-screen items-center gap-6 overflow-x-auto overflow-y-visible px-6 py-12 md:px-10"
          >
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
              <motion.div
                key={slide.title}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                onMouseEnter={() => handleHoverStep(index)}
                onFocus={() => setActiveIndex(index)}
                style={{ scale: cardScale }}
                className={`relative h-[460px] w-[342px] shrink-0 overflow-hidden rounded-xl bg-ink/10 shadow-card transition-all duration-500 md:h-[572px] md:w-[520px] ${
                  isActive
                    ? "opacity-100 md:w-[762px]"
                    : "opacity-100 md:w-[520px]"
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
                <div className="absolute bottom-6 left-6 right-6 text-white md:bottom-6 md:left-14 md:right-6">
                  <div className="flex items-center gap-2 text-[13px] font-semibold leading-[17px] md:text-[17px] md:leading-[19px]">
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
                    <p className="mt-2 text-[13px] leading-[1.1] text-white/85 max-w-[531px] md:leading-[20px] md:text-[15px] md:leading-normal">
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
