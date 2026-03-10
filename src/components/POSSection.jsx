import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import { posSection } from "../data/content";

export default function POSSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.6], [1.12, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, 40]);

  return (
    <section id="pos" ref={ref} className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
              Punto de venta
            </p>
            <h2 className="mt-3 text-3xl font-display md:text-4xl">
              {posSection.title}
            </h2>
            <p className="mt-4 text-base text-ink/70">
              {posSection.description}
            </p>
          </div>
        </Reveal>
        <motion.div style={{ scale, y }} className="overflow-hidden rounded-3xl">
          <img
            src={posSection.image}
            alt="Punto de venta integrado"
            className="h-[60vh] w-full object-cover md:h-[70vh]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
