import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { eventTypes } from "../data/content";
import Reveal from "./Reveal";

export default function EventTypesCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-35% 0px -35% 0px" });
  const items = useMemo(() => [...eventTypes, ...eventTypes], []);
  const baseCardWidth = 345;
  const compressedCardWidth = 700;
  const compressedScaleX = 1;
  const overlap = 55;
  const maxOffset = (compressedCardWidth - baseCardWidth) / 2;
  const expandedSpacing = 380;
  const carouselShift = `calc(${expandedSpacing}px - (100% - ${baseCardWidth}px) / 2)`;
  const postExpandShift = expandedSpacing * (items.length / 2);
  const midIndex = (items.length - 1) / 2;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const dragBounds = { left: -postExpandShift, right: 0 };
  const cardVariants = {
    hidden: (index) => ({
      opacity: 0.9,
      x: clamp((index - midIndex) * overlap, -maxOffset, maxOffset),
      scaleX: compressedScaleX,
      scaleY: 0.98,
    }),
    show: (index) => ({
      opacity: 1,
      x: (index - midIndex) * expandedSpacing,
      scaleX: 1,
      scaleY: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <motion.section
      id="eventos"
      className="section-spacing bg-white"
      initial={{ opacity: 0, y: 52 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <Reveal className="w-full">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-6 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-16">
            <h2 className="max-w-[502px] font-semibold text-3xl font-display leading-tight md:text-[36px]">
              ZOCO tickets funciona para todo tipo de eventos.
            </h2>
            <p className="max-w-[548px] text-sm leading-relaxed text-ink/60 md:text-[15px]">
              Sea un festival multitudinario, una noche de boliche o un evento
              deportivo, ZOCO tickets te permite gestionar la venta de entradas y
              el control de accesos desde un solo lugar.
            </p>
          </div>
        </div>
        <div
          className="mx-auto w-full max-w-[1440px] overflow-hidden px-6 md:px-10 translate-x-0 md:-translate-x-[var(--carousel-shift)]"
          style={{ "--carousel-shift": carouselShift }}
        >
          <motion.div
            ref={ref}
            className="relative h-[480px] w-full cursor-grab active:cursor-grabbing"
            drag={isInView ? "x" : false}
            dragConstraints={dragBounds}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            {items.map((item, index) => (
              <motion.article
                key={`${item.title}-${index}`}
                custom={index}
                variants={cardVariants}
                style={{ zIndex: items.length - index, transformOrigin: "center" }}
                className="absolute left-1/2 top-0 h-[480px] w-[345px] -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-card"
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
                  </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Reveal>
    </motion.section>
  );
}
