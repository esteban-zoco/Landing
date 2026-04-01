import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import polygonIcon from "../assets/Polygon 2.svg";
import panelMobileImage from "../assets/computadora.svg";
import scanMobileImage from "../assets/Mask group (1).svg";
import TitleReveal from "./TitleReveal";

export default function FeatureCards() {
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const setCardRef = (index) => (element) => {
    cardRefs.current[index] = element;
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    let rafId = null;

    const updateActiveCard = () => {
      if (mediaQuery.matches) {
        setActiveIndex(-1);
        return;
      }

      const anchorLine = window.innerHeight * 0.45;
      let bestIndex = -1;

      cardRefs.current.forEach((element, index) => {
        if (!element) {
          return;
        }
        const rect = element.getBoundingClientRect();
        if (rect.top <= anchorLine && rect.bottom >= anchorLine) {
          bestIndex = index;
        }
      });

      if (bestIndex === -1) {
        let bestDistance = Number.POSITIVE_INFINITY;
        cardRefs.current.forEach((element, index) => {
          if (!element) {
            return;
          }
          const rect = element.getBoundingClientRect();
          if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
            return;
          }
          const midPoint = rect.top + rect.height / 2;
          const distance = Math.abs(midPoint - anchorLine);
          if (distance < bestDistance) {
            bestDistance = distance;
            bestIndex = index;
          }
        });
      }

      setActiveIndex(bestIndex);
    };

    const scheduleUpdate = () => {
      if (rafId !== null) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        updateActiveCard();
      });
    };

    const handleChange = () => {
      if (mediaQuery.matches) {
        setActiveIndex(-1);
        return;
      }
      scheduleUpdate();
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("orientationchange", scheduleUpdate);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("orientationchange", scheduleUpdate);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);
  return (
    <section id="servicios" className="section-spacing bg-white">
      <Reveal className="container-shell !max-w-[1280px]">
        <div className="mb-10 max-w-[342px] md:mb-16 md:max-w-[1080px]">
          <TitleReveal className="mt-0 font-semibold text-[23px] font-display leading-[25px] md:mt-3 md:text-[45px] md:leading-[1.1]">
            No solo somos una ticketera.<br />
            Somos todo el sistema de tu evento.
          </TitleReveal>
        </div>

        <div className="grid gap-6 justify-items-center lg:justify-items-stretch lg:grid-cols-[369px_1fr]">
            <div
              ref={setCardRef(0)}
              data-card-index={0}
              data-active={activeIndex === 0}
              className="group relative h-[423px] w-[340px] overflow-hidden rounded-[15px] bg-[#F3F3F3] px-5 pb-5 pt-5 shadow-card transition-all duration-700 md:duration-500 hover:h-[414px] data-[active=true]:h-[414px] md:h-[547px] md:w-full md:rounded-3xl md:px-6 md:pb-8 md:pt-[33px] md:hover:h-[547px] md:data-[active=true]:h-[547px]"
            >
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-700 md:duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 18% 18%, rgba(183,229,186,0.95) 0%, rgba(183,229,186,0) 60%), radial-gradient(circle at 82% 20%, rgba(92,168,124,0.9) 0%, rgba(92,168,124,0) 58%), radial-gradient(circle at 20% 85%, rgba(40,135,96,0.9) 0%, rgba(40,135,96,0) 62%), #1A5140",
              }}
            />
            <div className="relative z-10 flex h-full flex-col items-center justify-center md:block md:h-auto">
              <div className="flex justify-center rounded-2xl p-0 transition-all duration-700 md:duration-500">
                <img
                  src="https://zoco-ticket-images.s3.us-east-2.amazonaws.com/Videos-landing/Mask+group+(11).jpg"
                  alt="Vista previa de evento"
                  className="h-[300px] w-[298px] rounded-xl object-cover transition-all duration-700 md:duration-500 group-hover:h-[198px] group-data-[active=true]:h-[235px] group-hover:w-[230px] group-data-[active=true]:w-[298px] md:h-[382px] md:w-[293px] md:group-hover:h-[304px] md:group-data-[active=true]:h-[304px] md:group-hover:w-[293px] md:group-data-[active=true]:w-[293px]"
                />
              </div>
              <div className="mx-auto w-[298px] md:mx-0 md:w-[293px]">
                <h3 className="mt-4 text-[23px] font-medium leading-[25px] text-ink transition-colors duration-700 md:duration-500 group-hover:text-white group-data-[active=true]:text-white md:mt-6 md:text-[30px] md:leading-[1] md:ml-[15px]">
                  Creá tu evento y vendé en minutos
                </h3>
                <p className="mt-3 translate-y-3 text-[14px] leading-none text-white/90 opacity-0 transition-all duration-700 md:duration-500 group-hover:translate-y-0 group-data-[active=true]:translate-y-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 md:mt-4 md:text-sm md:leading-normal md:ml-[15px]">
                    Configurá tu evento y empezá a vender entradas en minutos con un proceso de compra simple y sin fricciones.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-6 lg:grid-cols-[299px_486px]">
              <div
                ref={setCardRef(1)}
                data-card-index={1}
                data-active={activeIndex === 1}
                className="group relative flex h-[95px] w-[340px] items-center justify-center overflow-hidden rounded-[15px] bg-[#F3F3F3] px-5 py-3 transition-all duration-700 md:duration-500 hover:h-[180px] data-[active=true]:h-[180px] md:h-[263px] md:w-full md:items-center md:justify-center md:rounded-3xl md:px-6 md:py-5 md:hover:h-[263px] md:data-[active=true]:h-[263px] lg:w-[299px]"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-700 md:duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 15%, rgba(27,127,220,0.95) 0%, rgba(27,127,220,0) 60%), radial-gradient(circle at 85% 20%, rgba(13,136,211,0.9) 0%, rgba(13,136,211,0) 55%), radial-gradient(circle at 20% 85%, rgba(6,91,152,0.9) 0%, rgba(6,91,152,0) 62%), #0F202A",
                  }}
                />
                <div className="relative z-10 w-[298px] max-w-[298px] text-left md:w-full md:max-w-[220px] mx-auto md:mx-0">
                  <h3 className="text-[23px] max-w-[240px] font-medium leading-[25px] text-ink transition-colors duration-700 md:duration-500 group-hover:text-white group-data-[active=true]:text-white md:text-[30px] md:leading-tight">
                    Vendé entradas sin pagar nada
                  </h3>
                  <p className="mt-0 max-h-0 overflow-hidden max-w-[298px] text-[14px] leading-none text-white/90 opacity-0 transition-all duration-700 md:duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100 group-hover:max-h-[120px] group-data-[active=true]:max-h-[120px] group-hover:mt-3 group-data-[active=true]:mt-3 md:mt-4 md:text-sm md:leading-normal md:max-h-none md:overflow-visible">
                    Vendé entradas sin pagar comisiones ni cargos ocultos. Toda la ganancia es para el organizador.
                  </p>
                </div>
              </div>

              <div
                ref={setCardRef(2)}
                data-card-index={2}
                data-active={activeIndex === 2}
                className="group relative h-[277px] w-[340px] max-w-[340px] overflow-hidden rounded-[15px] bg-[#F3F3F3] px-5 py-5 transition-all duration-700 md:duration-500 hover:h-[282px] data-[active=true]:h-[282px] md:h-[263px] md:w-full md:max-w-none md:rounded-3xl md:px-6 md:py-6 md:hover:h-[263px] md:data-[active=true]:h-[263px] lg:w-[486px]"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-700 md:duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 15%, rgba(90,90,90,0.55) 0%, rgba(90,90,90,0) 60%), radial-gradient(circle at 20% 75%, rgba(40,40,40,0.85) 0%, rgba(40,40,40,0) 65%), #0F0F12",
                  }}
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="relative z-10 max-w-[298px] md:max-w-[320px] mx-auto md:mx-0">
                    <h3 className="text-[23px] font-medium leading-[25px] text-ink transition-colors duration-700 md:duration-500 group-hover:text-white group-data-[active=true]:text-white md:text-[30px] md:leading-[1.15] md:max-w-[264px]">
                      Control total de tu evento en tiempo real
                    </h3>
                    <p className="mt-2 max-w-[298px] text-[14px] leading-none text-white/90 opacity-0 transition-all duration-700 md:duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100 md:mt-3 md:text-sm md:leading-normal">
                      Administrá entradas, accesos, invitados y ventas desde un solo lugar.
                    </p>
                    <a
                      href="#funciones"
                      className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-700 md:duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100 group/link"
                    >
                      <img src={polygonIcon} alt="" className="h-3 w-3" />
                      <span className="underline-offset-4 group-hover/link:underline">
                        Descubrir funciones
                      </span>
                    </a>
                  </div>
                  <div className="relative mt-4 flex w-full -translate-y-20 justify-center transition-transform duration-700 md:duration-500 group-hover:-translate-y-8 group-data-[active=true]:-translate-y-8 md:absolute md:bottom-0 md:right-6 md:mt-0 md:w-auto md:translate-y-0 md:justify-end md:group-hover:translate-y-0 md:group-data-[active=true]:translate-y-0 md:group-hover:translate-x-4 md:group-data-[active=true]:translate-x-4">
                    <img
                      src={panelMobileImage}
                      alt="GestiÃ³n en un solo panel"
                      className="md:hidden h-[198px] w-[230px] rounded-2xl object-cover transition-all duration-700 md:duration-500 group-hover:h-[198px] group-data-[active=true]:h-[198px] group-hover:w-[230px] group-data-[active=true]:w-[230px] md:h-[210px] md:w-[170px] md:group-hover:h-[210px] md:group-data-[active=true]:h-[210px] md:group-hover:w-[170px] md:group-data-[active=true]:w-[170px]"
                    />
                    <img
                      src="https://zoco-ticket-images.s3.us-east-2.amazonaws.com/Videos-landing/Group+375.svg"
                      alt="GestiÃ³n en un solo panel"
                      className="hidden md:block h-[150px] w-[120px] rounded-2xl object-cover transition-all duration-700 md:duration-500 group-hover:h-[198px] group-data-[active=true]:h-[198px] group-hover:w-[230px] group-data-[active=true]:w-[230px] md:h-[210px] md:w-[170px] md:group-hover:h-[210px] md:group-data-[active=true]:h-[210px] md:group-hover:w-[170px] md:group-data-[active=true]:w-[170px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[528px_257px]">
              <div
                ref={setCardRef(3)}
                data-card-index={3}
                data-active={activeIndex === 3}
                className="group relative h-[277px] w-[340px] max-w-[340px] overflow-hidden rounded-[15px] bg-[#F3F3F3] py-5 transition-all duration-700 md:duration-500 hover:h-[282px] data-[active=true]:h-[282px] md:h-[263px] md:w-full md:max-w-none md:rounded-3xl md:py-6 md:hover:h-[263px] md:data-[active=true]:h-[263px] lg:w-[528px]"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-700 md:duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 20%, rgba(90,90,90,0.6) 0%, rgba(90,90,90,0) 55%), radial-gradient(circle at 20% 85%, rgba(32,32,32,0.9) 0%, rgba(32,32,32,0) 62%), #0F0F12",
                  }}
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="relative z-10 mx-auto w-full max-w-[298px] px-3  md:max-w-[435px] md:px-6 lg:px-0">
                    <h3 className="text-[23px] max-w-[230px] font-medium leading-[25px] text-ink transition-colors duration-700 md:max-w-[408px] md:duration-500 group-hover:text-white group-data-[active=true]:text-white md:text-[28px] md:leading-[1.1]">
                      Ingresos rápidos, sin filas
                    </h3>
                    <p className="mt-2 text-[14px] leading-none text-white/90 opacity-0 transition-all duration-700 md:duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100 md:mt-3 md:text-sm md:leading-normal">
                      Validá tickets con rapidez desde la app de escáner.
                      Ingreso ágil, sin filas y con registro inmediato de
                      asistencia.
                    </p>
                    <a
                      href="#appdownloader"
                      className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-700 md:duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100 group/link"
                    >
                      <img src={polygonIcon} alt="" className="h-3 w-3" />
                      <span className="underline-offset-4 group-hover/link:underline">
                        Obtené la app
                      </span>
                    </a>
                  </div>
                  <div className="relative z-0 mx-auto mt-4 h-[176px] w-[340px] -translate-y-16 transition-all duration-700 md:duration-500 group-hover:-translate-y-16 group-data-[active=true]:-translate-y-16 group-hover:h-[176px] group-data-[active=true]:h-[176px] group-hover:w-[340px] group-data-[active=true]:w-[340px] md:absolute md:bottom-[-23px] md:left-1/2 md:mt-0 md:h-[180px] md:w-[435px] md:-translate-x-1/2 md:translate-y-0 md:group-hover:translate-y-0 md:group-data-[active=true]:translate-y-0 md:group-hover:h-[180px] md:group-data-[active=true]:h-[180px] md:group-hover:w-[435px] md:group-data-[active=true]:w-[435px]">
                    <div className="absolute bottom-[-40px] left-0 h-[120px] w-full rounded-t-[22px] rounded-b-none bg-white shadow-card transition-all duration-700 md:duration-500 group-hover:h-[104px] group-data-[active=true]:h-[104px] md:bottom-0 md:h-[160px] " />
                    <img
                      src={scanMobileImage}
                      alt="App de escaneo"
                      className="md:hidden relative bottom-0 h-full w-full rounded-[18px] object-cover shadow-card transition-all duration-700 md:duration-500 group-hover:bottom-[-40px] group-data-[active=true]:bottom-[-40px]"
                    />
                    <img
                      src="https://zoco-ticket-images.s3.us-east-2.amazonaws.com/Videos-landing/e470f6db-1b35-4642-83ea-9ae3037edeed+copia+2+1.svg"
                      alt="App de escaneo"
                      className="hidden md:block relative h-full w-full rounded-[18px] object-cover md:ml-[25px]"
                    />
                  </div>
                </div>
              </div>

              <div
                ref={setCardRef(4)}
                data-card-index={4}
                data-active={activeIndex === 4}
                className="group relative flex h-[80px] w-[340px] items-center justify-center overflow-hidden rounded-[15px] bg-[#F3F3F3] px-5 py-3 transition-all duration-700 md:duration-500 hover:h-[140px] data-[active=true]:h-[140px] md:h-[263px] md:w-full md:items-center md:justify-center md:rounded-3xl md:px-6 md:py-6 md:hover:h-[263px] md:data-[active=true]:h-[263px] lg:w-[257px]"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-700 md:duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100 "
                  style={{
                    background:
                      "radial-gradient(circle at 20% 15%, rgba(117,72,210,0.95) 0%, rgba(117,72,210,0) 60%), radial-gradient(circle at 85% 20%, rgba(38,21,152,0.9) 0%, rgba(38,21,152,0) 55%), radial-gradient(circle at 20% 85%, rgba(1,0,148,0.9) 0%, rgba(1,0,148,0) 62%), #080523",
                  }}
                />
                <div className="relative z-10 mt-0 w-[298px] max-w-[298px] text-left transition-transform duration-700 md:duration-500 md:group-hover:-translate-y-2 md:group-data-[active=true]:-translate-y-2 md:mt-4 md:w-full md:max-w-[298px] mx-auto md:mx-0">
                  <h3 className="translate-y-0 text-[23px] font-medium leading-[25px] text-ink transition-all duration-700 md:duration-500 group-hover:translate-y-0 group-data-[active=true]:translate-y-0 group-hover:text-white group-data-[active=true]:text-white md:translate-y-16 md:text-[30px] md:leading-tight">
                    Aceptá todos los medios de pago
                  </h3>
                  <p className="mt-0 max-h-0 overflow-hidden text-[14px] leading-none text-white/90 opacity-0 transition-all duration-700 md:duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100 group-hover:max-h-[120px] group-data-[active=true]:max-h-[120px] group-hover:mt-3 group-data-[active=true]:mt-3 md:mt-4 md:text-sm md:leading-normal md:max-h-none md:overflow-visible">
                    Cobrá tus entradas de forma simple y segura con todas las
                    tarjetas y billeteras virtuales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
