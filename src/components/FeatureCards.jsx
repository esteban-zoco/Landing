import { motion } from "framer-motion";
import { useState } from "react";
import { featureCards } from "../data/content";
import Reveal from "./Reveal";

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.01 },
};

export default function FeatureCards() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="servicios" className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
              Servicios integrales
            </p>
            <h2 className="mt-3 text-3xl font-display md:text-4xl">
              No somos una ticketera más. <br />
              Conectamos todo lo que un evento necesita.
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {featureCards.map((card, index) => {
            const isActive = activeIndex === index;
            return (
            <motion.article
              key={card.title}
              className="group relative overflow-hidden rounded-3xl bg-stone/80 p-6 shadow-card"
              initial="rest"
              whileHover="hover"
              animate={isActive ? "hover" : "rest"}
              variants={cardVariants}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveIndex(isActive ? null : index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveIndex(isActive ? null : index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
            >
              <motion.div
                className={`absolute inset-0 opacity-0 ${card.hoverColor}`}
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 0.95 },
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="relative flex h-full flex-col gap-6">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="h-44 w-full rounded-2xl object-cover"
                  variants={{
                    rest: { x: 0, y: 0 },
                    hover: {
                      x: card.motion.axis === "x" ? card.motion.value : 0,
                      y: card.motion.axis === "y" ? card.motion.value : 0,
                    },
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="mt-auto">
                  <motion.h3
                    className="text-xl font-semibold"
                    variants={{
                      rest: { y: 0, color: "rgb(15, 20, 18)" },
                      hover: { y: -4, color: "rgb(255, 255, 255)" },
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    className="mt-3 text-sm"
                    variants={{
                      rest: {
                        opacity: 0.7,
                        y: 6,
                        color: "rgba(15, 20, 18, 0.7)",
                      },
                      hover: {
                        opacity: 1,
                        y: 0,
                        color: "rgba(255, 255, 255, 0.9)",
                      },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
            </motion.article>
          )})}
        </div>
      </div>
    </section>
  );
}
