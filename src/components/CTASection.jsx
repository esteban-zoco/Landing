import Reveal from "./Reveal";
import Button from "./ui/Button";
import boletoWp from "../assets/Boletowp.svg";

export default function CTASection() {
  return (
    <section id="ctasection" className="section-spacing bg-white">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-10 md:py-24 mt-10 mb-10">
            <img
              src={boletoWp}
              alt=""
              className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-auto -translate-x-1/2 -translate-y-1/2 opacity-40 brightness-90"
            />
            <div className="relative z-10 mx-auto w-full max-w-[960px]">
              <h2 className="text-3xl text-[23px] leading-[1.1] font-display font-semibold text-ink md:text-[45px] w-full max-w-[901px] md:w-[901px] mx-auto">
              Empezá a vender entradas hoy mismo.
              </h2>
              <p className="mt-7 text-[13px] font-medium uppercase leading-[1.1]  tracking-[10%] text-ink md:text-[18px] max-w-[899px] mx-auto">
                Configurá tu evento en minutos y empezá a vender sin complicaciones. Sin costo por ticket. Sin coMISIONES.
              </p>
              <div className="mt-6">
                <Button
                  size="md"
                  href="https://wa.me/5493813545650"
                  target="_blank"
                  rel="noreferrer"
                  className="gap-2 px-5 py-2.5 text-sm"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-white"
                  >
                    <path d="M12.04 2C6.52 2 2.03 6.3 2.03 11.6c0 2.1.72 4.15 2.05 5.82L2 22l4.77-2.49a10.46 10.46 0 0 0 5.27 1.42h.01c5.52 0 10.01-4.3 10.01-9.6C22.06 6.3 17.57 2 12.04 2Zm0 17.1h-.01c-1.67 0-3.3-.45-4.7-1.3l-.34-.2-2.83 1.47.76-2.86-.22-.33a8.55 8.55 0 0 1-1.4-4.65c0-4.7 4.01-8.51 8.74-8.51 4.72 0 8.73 3.82 8.73 8.51 0 4.7-4.01 8.5-8.73 8.5Zm4.95-6.23c-.27-.13-1.62-.78-1.87-.87-.25-.1-.43-.13-.61.13-.18.26-.7.87-.86 1.05-.16.17-.32.2-.59.07-.27-.13-1.15-.42-2.19-1.34-.82-.73-1.37-1.63-1.53-1.9-.16-.26-.02-.4.12-.53.12-.12.27-.3.41-.45.14-.16.18-.26.27-.43.09-.17.04-.33-.02-.46-.06-.13-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.46h-.53c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.29.94 2.53 1.07 2.7.13.17 1.84 2.79 4.45 3.92.62.26 1.1.42 1.47.54.62.2 1.18.17 1.63.1.5-.08 1.62-.64 1.85-1.26.23-.62.23-1.15.16-1.26-.06-.11-.25-.17-.52-.3Z" />
                  </svg>
                  Hablar por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
