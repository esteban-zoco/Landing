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
        <div className="mx-auto mb-6 max-w-[342px] text-center md:max-w-3xl">
          <h2 className="mx-auto max-w-[342px] text-[24px] font-display font-semibold leading-[1.25] md:max-w-[741px] md:text-[45px] md:leading-[1.1]">
            {posSection.title}
          </h2>
        </div>
        <div className="relative">
          <motion.div
            style={{ scale, y }}
            className="relative z-20 mx-auto w-[342px] max-w-[342px] md:w-auto md:max-w-5xl"
          >
            <img
              src={posSection.image}
              alt="Punto de venta integrado"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="relative z-0 mx-auto -mt-20 w-[342px] min-h-[623px] rounded-3xl bg-[#F3F3F3] px-6 pb-6 pt-16 text-left md:-mt-40 md:w-auto md:max-w-[1180px] md:min-h-0 md:p-10 md:pt-28 md:text-center min-w-[140px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ul className="divide-y divide-ink mt-8 md:mt-0 mx-auto max-w-[292px] md:max-w-[725px]">
            {posSection.features.map((feature) => (
              <li key={feature.title} className="mt-0 py-4 md:mt-6 md:py-7">
                <div className="mx-auto max-w-[292px] md:max-w-[725px]">
                  <h3 className="text-[18px] font-display font-semibold leading-[21px] md:text-[30px] md:leading-normal">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.1] font-normal text-ink md:leading-[22px] md:mt-3 md:text-[18px] md:leading-normal">
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
