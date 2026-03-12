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

  const scale = useTransform(scrollYProgress, [0, 0.6], [1.20, 0.82]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, 40]);

  return (
    <section id="pos" ref={ref} className="section-spacing bg-white">
      <Reveal className="container-shell">
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <h2 className="mx-auto max-w-[741px] text-[45px] font-display font-semibold leading-[1.1]">
            {posSection.title}
          </h2>
        </div>
        <div className="relative">
          <motion.div
            style={{ scale, y }}
            className="relative z-20 mx-auto max-w-5xl"
          >
            <img
              src={posSection.image}
              alt="Punto de venta integrado"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="relative z-0 mx-auto -mt-32 max-w-4xl rounded-3xl bg-[#F3F3F3] p-8 pt-16 text-center md:-mt-40 md:p-10 md:pt-28 min-w-[140px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ul className="divide-y divide-ink/20 max-w-[725px] align-center mx-auto">
            {posSection.features.map((feature) => (
              <li key={feature.title} className="py-4 md:py-7 mt-6">
                <div className="mx-auto max-w-[725px]">
                  <h3 className="text-[30px] font-display font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[18px] font-normal text-ink/70">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
