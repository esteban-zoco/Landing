import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { floatingPhotos } from "../data/content";
import zocoLogo from "../assets/logo/zocoticket 1.svg";
import Reveal from "./Reveal";

export default function FloatingPhotoGrid() {
  const [activeIds, setActiveIds] = useState(() => new Set());
  const timersRef = useRef(new Map());
  const sectionRef = useRef(null);
  const hasIntroRef = useRef(false);
  const isInView = useInView(sectionRef, { margin: "-20% 0px -20% 0px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.6], [0.55, 1]);

  const activate = (id, duration = 30000) => {
    setActiveIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    if (timersRef.current.has(id)) {
      clearTimeout(timersRef.current.get(id));
    }
    const timeout = setTimeout(() => {
      setActiveIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      timersRef.current.delete(id);
    }, duration);
    timersRef.current.set(id, timeout);
  };

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timeout) => clearTimeout(timeout));
      timersRef.current.clear();
    };
  }, []);

  useEffect(() => {
    if (!isInView || hasIntroRef.current) return;
    hasIntroRef.current = true;
    setActiveIds(new Set(floatingPhotos.map((photo) => photo.id)));
    const timeout = setTimeout(() => {
      setActiveIds(new Set());
    }, 1200);
    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative h-screen bg-white">
      <Reveal className="relative mx-auto h-full max-w-none px-6 md:px-10">
        <div className="pt-10 text-center lg:hidden">
          <div className="mx-auto w-full max-w-[951px]">
            <p className="text-[22px] font-medium uppercase tracking-[0.2em] text-ink/70">
              Vende entradas y gestiona tus eventos.
            </p>
            <p className=" text-[15px] font-medium uppercase tracking-[0.18em] text-ink/70 ">
              Unica plataforma 100% gratuita. Sin cargos de servicio. 
              Sin costo por ticket. Sin contratos de permanencia.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
          <div className="mx-auto w-full max-w-[971px] text-center">
            <p className="text-[22px] font-medium uppercase tracking-[0.2em] text-ink/70">
              Vende entradas y gestiona tus eventos.
            </p>
            <p className=" text-[22px] font-medium uppercase tracking-[0.18em] text-ink/70 ">
              Unica plataforma 100% gratuita. Sin cargos de servicio. Sin costo
              por ticket. Sin contratos de permanencia.
            </p>
          </div>
        </div>

        <div className="hidden h-full lg:block">
          {floatingPhotos.map((photo, index) => {
            const isActive = activeIds.has(photo.id);
            const positions = [
              "lg:top-12 lg:left-10", // left top
              "lg:top-28 lg:left-[26%]", // inner left
              "lg:top-10 lg:left-1/2 lg:-translate-x-1/2", // center top
              "lg:top-12 lg:right-12", // right top
              "lg:top-[38%] lg:left-10", // left mid
              "lg:top-32 lg:right-[28%]", // inner right
              "lg:top-[44%] lg:right-12", // right mid
              "lg:bottom-16 lg:left-10", // left bottom
              "lg:bottom-28 lg:left-[25%]", // inner bottom left
              "lg:bottom-20 lg:left-1/2 lg:-translate-x-1/2", // bottom center
              "lg:bottom-20 lg:right-12", // bottom right
            ];
            return (
              <motion.div
                key={photo.id}
                onMouseEnter={() => activate(photo.id)}
                onFocus={() => activate(photo.id)}
                onTouchStart={() => {
                  activate(photo.id, 6000);
                }}
                style={{ scale: imageScale }}
                className={`absolute h-[185px] w-[185px] overflow-hidden rounded-2xl bg-stone/60 ${positions[index % positions.length]}`}
              >
                <motion.img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  animate={
                    isActive
                      ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                      : { opacity: 0.10, scale: 1.06, filter: "blur(6px)" }
                  }
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                  <motion.div
                    className="absolute inset-0 bg-white/45"
                    animate={isActive ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
              </motion.div>
            );
          })}
        </div>

        <div className="grid h-full content-center gap-4 pt-8 sm:grid-cols-3 lg:hidden">
          {floatingPhotos.map((photo) => {
            const isActive = activeIds.has(photo.id);
            return (
              <motion.div
                key={photo.id}
                onMouseEnter={() => activate(photo.id)}
                onFocus={() => activate(photo.id)}
                onTouchStart={() => {
                  activate(photo.id, 6000);
                }}
                style={{ scale: imageScale }}
                className="relative aspect-square overflow-hidden rounded-2xl bg-stone/60"
              >
                <motion.img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  animate={
                    isActive
                      ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                      : { opacity: 0.15, scale: 1.06, filter: "blur(6px)" }
                  }
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/45"
                  animate={isActive ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
