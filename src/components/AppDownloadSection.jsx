import Reveal from "./Reveal";
import phoneMock from "../assets/Mask group.svg";
import appleLogo from "../assets/logosTiendas/apple-logo-svgrepo-com 1.svg";
import googlePlayLogo from "../assets/logosTiendas/google-play-store-svgrepo-com 1.svg";

export default function AppDownloadSection() {
  return (
    <section id="appdownloader" className="section-spacing bg-white">
      <div className="mb-16 px-6 md:px-10">
        <Reveal>
          <div className="mx-auto w-full max-w-[1300px]">
            <div className="overflow-visible rounded-[28px] bg-[#EAEDF3] px-6 pt-6 md:pt-8 md:h-[420px] md:w-[1300px] md:px-14 md:py-0">
              <div className="flex flex-col items-center gap-10 md:h-full md:flex-row md:items-center md:justify-between">
                <div className="max-w-[620px] text-center md:text-left">
                  <div className="text-[17px] font-semibold text-ink md:text-[20px]">
                    <div>Controlá tu evento desde cualquier lugar</div>
                    <div className="mt-2 h-px w-full bg-[repeating-linear-gradient(to_right,rgba(20,24,22,0.4)_0_6px,transparent_6px_12px)]" />
                  </div>
                  <h2 className="mt-4 text-[23px] leading-[1.1] font-display text-ink md:text-[26px]">
                    Accedé a ventas, asistentes y métricas en tiempo real desde tu celular.
                  </h2>
                  <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                    <a
                      href="https://apps.apple.com/us/app/zoco-tickets/id6758010461"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-[10px] bg-[#2D3035] px-4 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#B1C20E]"
                    >
                      <img
                        src={appleLogo}
                        alt="App Store"
                        className="h-4 w-4 object-contain"
                        loading="lazy"
                      />
                      App Store
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.men7ar31.zocotickets"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-[10px] bg-[#2D3035] px-4 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#B1C20E]"
                    >
                      <img
                        src={googlePlayLogo}
                        alt="Google Play"
                        className="h-4 w-4 object-contain"
                        loading="lazy"
                      />
                      Google Play
                    </a>
                  </div>
                </div>
                <div className="relative mx-auto w-full max-w-[320px] md:mx-0 md:h-[487px] md:w-[505px] md:max-w-[505px] md:self-end md:translate-x-6">
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

