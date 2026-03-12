import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { eventTypes } from "../data/content";
import Reveal from "./Reveal";

export default function EventTypesCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [paused, setPaused] = useState(false);
  const items = [...eventTypes, ...eventTypes];

  return (
    <section id="eventos" className="section-spacing">
      <Reveal className="container-shell">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
              Versatilidad
            </p>
            <h2 className="mt-3 text-3xl font-display md:text-4xl">
              ZOCO tickets funciona para todo tipo de eventos.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink/60">
            Al llegar, las cards se expanden y luego se desplazan suavemente en
            un carrusel continuo.
          </p>
        </div>
        <div
          ref={ref}
          className="scrollbar-hide overflow-x-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <div
            className={`flex min-w-max gap-6 pb-2 ${
              isInView && !paused ? "animate-marquee" : ""
            } ${paused ? "animate-paused" : ""}`}
          >
            {items.map((item, index) => (
              <motion.article
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, scaleX: 0.85, x: -18 }}
                animate={
                  isInView
                    ? { opacity: 1, scaleX: 1, x: 0 }
                    : { opacity: 0, scaleX: 0.85, x: -18 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative h-64 w-72 shrink-0 overflow-hidden rounded-3xl bg-white shadow-card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs text-white/80">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
