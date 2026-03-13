import Reveal from "./Reveal";
import phoneMock from "../assets/Mask group.svg";

export default function AppDownloadSection() {
  return (
    <section id="app" className="section-spacing bg-white">
      <div className="px-6 md:px-10 mb-16">
        <Reveal>
          <div className="mx-auto w-full max-w-[1300px]">
            <div className="rounded-[28px] bg-[#EAEDF3] px-8 py-10 md:h-[420px] md:px-14 md:py-0 overflow-visible md:w-[1300px]">
              <div className="flex flex-col gap-10 md:h-full md:flex-row md:items-center md:justify-between">
                <div className="max-w-[620px]">
                  <div className="text-[20px] font-semibold text-ink md:text-[20px]">
                    <div>Descargá la app de ZOCO Tickets</div>
                    <div className="mt-2 h-px w-full bg-[repeating-linear-gradient(to_right,rgba(20,24,22,0.4)_0_6px,transparent_6px_12px)]" />
                  </div>
                  <h2 className="mt-4 text-[32px] font-display text-ink md:text-[26px]">
                    Gestioná tu evento desde cualquier lugar.
                  </h2>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="inline-flex h-10 items-center gap-2 rounded-[10px] bg-[#2D3035] px-4 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-white"
                      >
                        <path d="M16.37 12.68c.02 2.06 1.83 2.74 1.85 2.75-.01.05-.29 1-1.03 1.98-.63.85-1.3 1.7-2.33 1.72-1.01.02-1.34-.58-2.5-.58-1.17 0-1.52.56-2.48.6-.99.04-1.74-.93-2.38-1.78-1.29-1.74-2.27-4.9-.95-7.04.66-1.05 1.85-1.71 3.13-1.73.98-.02 1.9.63 2.5.63.59 0 1.69-.77 2.85-.65.49.02 1.86.2 2.74 1.5-.07.04-1.64.94-1.62 2.6ZM14.66 5.4c.54-.62.91-1.49.81-2.4-.78.03-1.73.5-2.29 1.12-.5.56-.94 1.46-.82 2.32.87.06 1.74-.42 2.3-1.04Z" />
                      </svg>
                      App Store
                    </button>
                    <button className="inline-flex h-10 items-center gap-2 rounded-[10px] bg-[#2D3035] px-4 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-white"
                      >
                        <path d="M3.6 2.9a1.6 1.6 0 0 0-.6 1.3v15.7c0 .5.2 1 .6 1.3l9.2-9.2L3.6 2.9Zm10.2 8.3 3 3 3.6-2.1c.5-.3.5-1 0-1.3l-3.6-2.1-3 3ZM13.8 12.7l-9.2 9.2c.3.2.7.1 1.1-.1l11.7-6.8-3.6-2.3ZM4.6 2.1l9.2 9.2 3.6-2.3-11.7-6.8c-.4-.2-.8-.3-1.1-.1Z" />
                      </svg>
                      Google Play
                    </button>
                  </div>
                </div>
                <div className="relative w-full max-w-[505px] md:h-[487px] md:w-[505px] md:self-end  md:translate-x-6">
                  <img
                    src={phoneMock}
                    alt="Mockup de la app"
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
