import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { eventTypes } from "../data/content";
import Reveal from "./Reveal";
import TitleReveal from "./TitleReveal";

function MobileEventCard({ item, isActive, cardRef }) {
  return (
    <motion.article
      initial={false}
      animate={{ height: isActive ? 420 : 88 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      ref={cardRef}
      className="relative w-full overflow-hidden rounded-[10px] bg-black shadow-card"
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <motion.div
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
        transition={{ duration: 0.35 }}
        className="absolute bottom-0 left-0 right-0 p-5 text-white"
      >
        <h3 className="text-[26px] font-semibold leading-[1.05]">
          {item.title}
        </h3>
        <p className="mt-2 text-[14px] text-white/85">{item.description}</p>
      </motion.div>
      <motion.div
        initial={false}
        animate={{ opacity: isActive ? 0 : 0.55 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-x-5 top-8 bottom-8 flex items-center text-[26px] font-semibold leading-[1.05] text-white"
      >
        {item.title}
      </motion.div>
    </motion.article>
  );
}

export default function EventTypesCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-35% 0px -35% 0px" });
  const items = useMemo(() => [...eventTypes, ...eventTypes], []);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : false
  );
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const mobileCardRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop) return undefined;

    let rafId = 0;
    const updateActive = () => {
      rafId = 0;
      const focusPoint = window.innerHeight * 0.45;
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      mobileCardRefs.current.forEach((node, index) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - focusPoint);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      setActiveMobileIndex(bestIndex);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isDesktop]);

  const baseCardWidth = isDesktop ? 345 : 270;
  const compressedCardWidth = isDesktop ? 700 : 560;
  const compressedScaleX = 1;
  const overlap = isDesktop ? 55 : 36;
  const maxOffset = (compressedCardWidth - baseCardWidth) / 2;
  const expandedSpacing = isDesktop ? 380 : 300;
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
        <div className="container-shell !max-w-[1280px]">
          <div className="mb-14 flex flex-col gap-6 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-16">
            <TitleReveal className="max-w-[502px] font-semibold text-[23px] font-display leading-tight md:text-[36px]">
             Una solución pensada para cada tipo de evento.
            </TitleReveal>
            <p className="max-w-[492px] leading-[22px] text-[15px] md:leading-[22px] text-ink md:text-[17px]">
Desde eventos masivos hasta experiencias más exclusivas, adaptá ZOCO a tu operación y vendé sin límites.  <strong>Elegí tu tipo de evento y empezá en minutos.</strong> 
            </p>
          </div>
        </div>
        <div className="md:hidden px-6">
          <div className="space-y-3">
            {eventTypes.map((item, index) => (
              <MobileEventCard
                key={item.title}
                item={item}
                isActive={index === activeMobileIndex}
                cardRef={(node) => {
                  mobileCardRefs.current[index] = node;
                }}
              />
            ))}
          </div>
        </div>
        <div
          className="mx-auto hidden w-full max-w-[1202px] overflow-hidden px-6 md:block md:px-10 translate-x-0 "
          style={{ "--carousel-shift": carouselShift }}
        >
          <motion.div
            ref={ref}
            className="relative h-[375px] w-full cursor-grab active:cursor-grabbing md:h-[480px]"
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
                className="absolute left-1/2 top-0 h-[375px] w-[270px] -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-card md:h-[480px] md:w-[345px]"
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
