import Reveal from "./Reveal";
import polygonIcon from "../assets/Polygon 2.svg";

export default function FeatureCards() {
  return (
    <section id="servicios" className="section-spacing bg-white">
      <Reveal className="container-shell !max-w-[1280px]">
        <div className="mb-16 max-w-[1080px]">
          <h2 className="mt-3 font-semibold text-3xl font-display md:text-[45px]">
            No somos una ticketera más. <br />
            Conectamos todo lo que un evento necesita.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[369px_1fr]">
            <div className="group relative h-[547px] overflow-hidden rounded-3xl bg-[#F3F3F3] px-6 pb-8 pt-[33px] shadow-card transition-colors duration-500">
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 18% 18%, rgba(183,229,186,0.95) 0%, rgba(183,229,186,0) 60%), radial-gradient(circle at 82% 20%, rgba(92,168,124,0.9) 0%, rgba(92,168,124,0) 58%), radial-gradient(circle at 20% 85%, rgba(40,135,96,0.9) 0%, rgba(40,135,96,0) 62%), #1A5140",
              }}
            />
            <div className="relative z-10">
              <div className="flex justify-center rounded-2xl p-0 transition-all duration-500">
                <img
                  src="https://zoco-ticket-images.s3.us-east-2.amazonaws.com/Videos-landing/Mask+group+(11).jpg"
                  alt="Vista previa de evento"
                  className="h-[382px] w-[293px] rounded-xl object-cover transition-all duration-500 group-hover:h-[304px]"
                />
              </div>
              <div className="mx-auto w-[293px]">
                <h3 className="mt-6 text-[30px] font-medium leading-[1] text-ink transition-colors duration-500 group-hover:text-white ">
                  Creá y publicá gratis tus eventos
                </h3>
                <p className="mt-4 translate-y-3 text-sm text-white/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Configurá tu evento y empezá a vender entradas en minutos con
                  un proceso de compra simple y sin fricciones.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-6 lg:grid-cols-[299px_486px]">
              <div className="group relative flex h-[263px] w-full items-center justify-center overflow-hidden rounded-3xl bg-[#F3F3F3] px-6 py-5 transition-colors duration-500 lg:w-[299px]">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 15%, rgba(27,127,220,0.95) 0%, rgba(27,127,220,0) 60%), radial-gradient(circle at 85% 20%, rgba(13,136,211,0.9) 0%, rgba(13,136,211,0) 55%), radial-gradient(circle at 20% 85%, rgba(6,91,152,0.9) 0%, rgba(6,91,152,0) 62%), #0F202A",
                  }}
                />
                <div className="relative z-10 w-full max-w-[220px] text-left">
                  <h3 className="text-[30px] font-medium leading-tight text-ink transition-colors duration-500 group-hover:text-white">
                    Cero cargos
                    <br />
                    para el
                    <br />
                    organizador
                  </h3>
                  <p className="mt-4 text-sm text-white/90 opacity-0 transition-all duration-500 group-hover:opacity-100 max-w-[220px]">
                    Vendé entradas sin pagar comisiones ni cargos ocultos. Toda
                    la ganancia es para el organizador.
                  </p>
                </div>
              </div>

              <div className="group relative h-[263px] w-full overflow-hidden rounded-3xl bg-[#F3F3F3] px-6 py-6 transition-colors duration-500 lg:w-[486px]">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 15%, rgba(90,90,90,0.55) 0%, rgba(90,90,90,0) 60%), radial-gradient(circle at 20% 75%, rgba(40,40,40,0.85) 0%, rgba(40,40,40,0) 65%), #0F0F12",
                  }}
                />
                <div className="relative z-10 h-full">
                  <div className="relative z-10 max-w-[320px]">
                    <h3 className="text-[30px] font-medium leading-[1.15] text-ink transition-colors duration-500 group-hover:text-white">
                      Gestioná todo en
                      <br />
                      un solo panel
                    </h3>
                    <p className="mt-3 text-sm text-white/90 opacity-0 transition-all duration-500 group-hover:opacity-100 max-w-[220px] ">
                      Administrá entradas, accesos, invitados y ventas desde un
                      solo lugar.
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <img src={polygonIcon} alt="" className="h-3 w-3" />
                      <span>Descubrir funciones</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-6 z-0 flex items-end transition-transform duration-500 group-hover:translate-x-4">
                    <img
                      src="https://zoco-ticket-images.s3.us-east-2.amazonaws.com/Videos-landing/Group+375.svg"
                      alt="Gestión en un solo panel"
                      className="h-[210px] w-[170px] rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[528px_257px]">
              <div className="group relative h-[263px] w-full overflow-hidden rounded-3xl bg-[#F3F3F3] py-6 transition-colors duration-500 lg:w-[528px]">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 20%, rgba(90,90,90,0.6) 0%, rgba(90,90,90,0) 55%), radial-gradient(circle at 20% 85%, rgba(32,32,32,0.9) 0%, rgba(32,32,32,0) 62%), #0F0F12",
                  }}
                />
                <div className="relative z-10 h-full">
                  <div className="relative z-10 mx-auto w-full max-w-[435px] px-6 lg:px-0">
                    <h3 className="text-[28px] font-medium leading-[1.1] text-ink transition-colors duration-500 group-hover:text-white">
                      Escaneá entradas al instante
                    </h3>
                    <p className="mt-3 text-sm text-white/90 opacity-0 transition-all duration-500 group-hover:opacity-100">
                      Validá tickets con rapidez desde la app de escáner.
                      Ingreso ágil, sin filas y con registro inmediato de
                      asistencia.
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <img src={polygonIcon} alt="" className="h-3 w-3" />
                      <span>Obtené la app</span>
                    </div>
                  </div>
                  <div className="absolute bottom-[-23px] left-1/2 z-0 h-[180px] w-[435px] -translate-x-1/2 transition-transform duration-500 group-hover:translate-y-4">
                    <div className="absolute bottom-0 left-0 h-[160px] w-full rounded-t-[22px] rounded-b-none bg-white shadow-card transition-all duration-500 group-hover:h-[104px]" />
                    <img
                      src="https://zoco-ticket-images.s3.us-east-2.amazonaws.com/Videos-landing/e470f6db-1b35-4642-83ea-9ae3037edeed+copia+2+1.svg"
                      alt="App de escaneo"
                      className="relative h-full w-full rounded-[18px] object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="group relative flex h-[263px] w-full items-center justify-center overflow-hidden rounded-3xl bg-[#F3F3F3] px-6 py-6 transition-colors duration-500 lg:w-[257px]">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 15%, rgba(117,72,210,0.95) 0%, rgba(117,72,210,0) 60%), radial-gradient(circle at 85% 20%, rgba(38,21,152,0.9) 0%, rgba(38,21,152,0) 55%), radial-gradient(circle at 20% 85%, rgba(1,0,148,0.9) 0%, rgba(1,0,148,0) 62%), #080523",
                  }}
                />
                <div className="relative z-10 w-full max-w-[210px] text-left transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="translate-y-16 text-[30px] font-medium leading-tight text-ink transition-all duration-500 group-hover:translate-y-0 group-hover:text-white">
                    Pagos
                    <br />
                    integrados
                  </h3>
                  <p className="mt-4 text-sm text-white/90 opacity-0 transition-all duration-500 group-hover:opacity-100">
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
