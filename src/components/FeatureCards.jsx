import Reveal from "./Reveal";

export default function FeatureCards() {
  return (
    <section id="servicios" className="section-spacing bg-white">
      <div className="container-shell">
        <Reveal>
          <div className="mb-16 max-w-[1080px]">
            <h2 className="mt-3 font-semibold text-3xl font-display md:text-[45px]">
              No somos una ticketera más. <br />
              Conectamos todo lo que un evento necesita.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[369px_1fr]">
          <div className="group relative max-h-[547px] overflow-hidden rounded-3xl bg-[#F8F8F8] px-6 pb-8 pt-6 shadow-card transition-colors duration-500">
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 18% 18%, rgba(183,229,186,0.95) 0%, rgba(183,229,186,0) 60%), radial-gradient(circle at 82% 20%, rgba(92,168,124,0.9) 0%, rgba(92,168,124,0) 58%), radial-gradient(circle at 20% 85%, rgba(40,135,96,0.9) 0%, rgba(40,135,96,0) 62%), #1A5140",
              }}
            />
            <div className="relative z-10">
              <div className="flex justify-center rounded-2xl p-0 transition-all duration-500 group-hover:-translate-y-4">
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

          <div className="grid gap-6 lg:grid-cols-[299px_486px]">
            <div className="group relative h-[263px] w-full overflow-hidden rounded-3xl bg-[#F3F3F3] px-6 py-5 transition-colors duration-500 lg:w-[299px]">
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 20% 15%, rgba(27,127,220,0.95) 0%, rgba(27,127,220,0) 60%), radial-gradient(circle at 85% 20%, rgba(13,136,211,0.9) 0%, rgba(13,136,211,0) 55%), radial-gradient(circle at 20% 85%, rgba(6,91,152,0.9) 0%, rgba(6,91,152,0) 62%), #0F202A",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-[30px] font-medium leading-tight text-ink transition-colors duration-500 group-hover:text-white">
                  Cero cargos
                  <br />
                  para el
                  <br />
                  organizador
                </h3>
                <p className="mt-4 text-sm text-white/90 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  Vendé entradas sin pagar comisiones ni cargos ocultos. Toda la
                  ganancia es para el organizador.
                </p>
              </div>
            </div>

            <div className="group relative h-[263px] w-full overflow-hidden rounded-3xl bg-[#F3F3F3] px-6 py-5 transition-colors duration-500 lg:w-[486px]">
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 75% 20%, rgba(27,127,220,0.8) 0%, rgba(27,127,220,0) 60%), radial-gradient(circle at 20% 70%, rgba(13,136,211,0.85) 0%, rgba(13,136,211,0) 60%), #0F202A",
                }}
              />
              <div className="relative z-10 flex h-full items-center">
                <div className="max-w-[240px]">
                  <h3 className="text-[30px] font-medium leading-tight text-ink transition-colors duration-500 group-hover:text-white">
                    Gestioná todo en
                    un solo panel
                  </h3>
                  <p className="mt-4 text-sm text-white/90 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Administrá entradas, accesos, invitados y ventas desde un
                    solo lugar.
                  </p>
                </div>
                <div className="ml-auto flex h-full items-end">
                  <img
                    src="https://zoco-ticket-images.s3.us-east-2.amazonaws.com/Videos-landing/Group+375.svg"
                    alt="Gestión en un solo panel"
                    className="h-[210px] w-[170px] rounded-2xl object-cover transition-transform duration-500 group-hover:translate-x-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
