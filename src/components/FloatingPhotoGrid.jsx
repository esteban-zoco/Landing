import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { floatingPhotos } from "../data/content";
import Reveal from "./Reveal";

export default function FloatingPhotoGrid() {
  const [revealed, setRevealed] = useState(false);
  const timerRef = useRef(null);

  const triggerReveal = () => {
    setRevealed(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setRevealed(false);
    }, 20000);
  };

  useEffect(() => {
    const media = window.matchMedia("(hover: none)");
    if (media.matches) {
      triggerReveal();
      const interval = setInterval(triggerReveal, 24000);
      return () => {
        clearInterval(interval);
      };
    }
    return undefined;
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <section
      className="section-spacing"
      onMouseEnter={triggerReveal}
      onFocus={triggerReveal}
    >
      <div className="container-shell">
        <Reveal>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
                Experiencia visual
              </p>
              <h2 className="mt-2 text-3xl font-display md:text-4xl">
                Una atmósfera que eleva cada momento.
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm text-ink/60 md:block">
              Imágenes editoriales que se revelan suavemente al interactuar con
              la sección.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-[repeat(4,185px)] lg:justify-between lg:gap-6">
          {floatingPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              onMouseEnter={triggerReveal}
              onFocus={triggerReveal}
              className="relative aspect-square overflow-hidden rounded-2xl bg-stone/60"
              initial={false}
              animate={{
                opacity: 1,
              }}
            >
              <motion.img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover"
                animate={
                  revealed
                    ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                    : { opacity: 0.15, scale: 1.05, filter: "blur(6px)" }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.04,
                }}
              />
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={revealed ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
