import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./ui/Button";
import { heroContent } from "../data/content";
import arrowDown from "../assets/flecha-hacia-abajo-para-navegar 2.svg";

export default function HeroVideo() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.35], [1, 0.9]);
  const radius = useTransform(scrollYProgress, [0, 0.35], ["0px", "32px"]);
  const shadow = useTransform(
    scrollYProgress,
    [0, 0.35],
    [
      "0 0 0 rgba(0,0,0,0)",
      "0 35px 90px -60px rgba(12,16,14,0.6)",
    ]
  );
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.35], [0.35, 0.6]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  return (
    <section
      id="plataforma"
      ref={sectionRef}
      className="relative h-[110vh] bg-mist"
    >
      <div className="sticky top-0 h-screen">
        <motion.div
          style={{ scale, borderRadius: radius, boxShadow: shadow }}
          className="relative h-full w-full overflow-hidden bg-black"
        >
          <video
            className="h-full w-full object-cover"
            src={heroContent.videoUrl}
            poster={heroContent.posterUrl}
            preload="metadata"
            muted
            autoPlay
            loop
            playsInline
          />
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <motion.div
              style={{ opacity: contentOpacity, y: contentY }}
              className="max-w-[980px] px-6 text-white"
            >
             {/* <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/70">
                Plataforma integral de eventos
              </p>*/}
              <h1 className="mx-auto max-w-[908px] font-display text-[34px] font-semibold leading-[42px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[54px]">
                <span className="block">{heroContent.titleLine1}</span>
                <span className="block">{heroContent.titleLine2}</span>
              </h1>
              {/*<p className="mt-5 text-base text-white/80 md:text-lg">
                {heroContent.subtitle}
              </p>*/}
              <div className="mt-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="px-[16px] py-[8px] text-[15px] leading-[1]"
                >
                  {heroContent.primaryCta}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="gap-2 px-[16px] py-[8px] text-[15px] leading-[1]"
                >
                  <span>{heroContent.secondaryCta}</span>
                  <img src={arrowDown} alt="" className="h-3 w-3" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
