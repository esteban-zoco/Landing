import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { eventTypes } from "../data/content";
import Reveal from "./Reveal";

export default function EventTypesCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const items = useMemo(() => eventTypes, []);
  const overlap = 220;
  const stackShift = ((items.length - 1) * overlap) / 2;
  const cardVariants = {
    hidden: (index) => ({
      opacity: 0.9,
      x: stackShift - index * overlap,
      scaleX: 0.86,
      scaleY: 0.98,
    }),
    show: () => ({
      opacity: 1,
      x: 0,
      scaleX: 1,
      scaleY: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section id="eventos" className="section-spacing">
      <Reveal className="container-shell">
        <div className="mb-10 flex flex-col gap-6 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-16">
          <h2 className="max-w-[420px] text-3xl font-display leading-tight md:text-[38px]">
            ZOCO tickets funciona para todo tipo de eventos.
          </h2>
          <p className="max-w-[360px] text-sm leading-relaxed text-ink/60 md:text-[15px]">
            Sea un festival multitudinario, una noche de boliche o un evento
            deportivo, ZOCO tickets te permite gestionar la venta de entradas y
            el control de accesos desde un solo lugar.
          </p>
        </div>
        <div
          ref={ref}
          className="scrollbar-hide overflow-x-auto"
        >
          <div
            className="mx-auto flex min-w-max max-w-[1100px] items-center justify-center gap-6 pb-2"
          >
            {items.map((item, index) => (
              <motion.article
                key={`${item.title}-${index}`}
                custom={index}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={cardVariants}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ zIndex: items.length - index, transformOrigin: "center" }}
                className="relative h-[480px] w-[345px] shrink-0 overflow-hidden rounded-3xl bg-white shadow-card"
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
