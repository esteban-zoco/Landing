import Reveal from "./Reveal";
import { footerLinks } from "../data/content";
import zocoLogoSolo from "../assets/Logo ZOCO (solo) 2.svg";
import facebookIcon from "../assets/facebook-3.svg";
import instagramIcon from "../assets/instagram-2.svg";
import youtubeIcon from "../assets/youtube-2.svg";
import appleLogo from "../assets/logosTiendas/apple-logo-svgrepo-com 1.svg";
import googlePlayLogo from "../assets/logosTiendas/google-play-store-svgrepo-com 1.svg";
import zocoLogoScrolled from "../assets/logo/zocotickets.png";

export default function Footer() {
  return (
    <footer className="bg-white pb-10">
      <div className="container-shell md:min-w-[1380px]">
        <Reveal>
          <div className="border-t border-ink/15 pt-6 md:pt-8">
            <div className="flex flex-col gap-6 md:gap-10">
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4 md:gap-6">
                  <img
                    src={zocoLogoScrolled}
                    alt="ZOCO"
                    className="h-[26px] w-[112px] md:h-[33px] md:w-[220px]"
                  />
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/10 md:h-8 md:w-8">
                      <img src={facebookIcon} alt="" className="h-6 w-6 md:h-[33px] md:w-[33px]" />
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/10 md:h-8 md:w-8">
                      <img src={instagramIcon} alt="" className="h-6 w-6 md:h-[33px] md:w-[33px]" />
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/10 md:h-8 md:w-8">
                      <img src={youtubeIcon} alt="" className="h-6 w-6 md:h-[33px] md:w-[33px]" />
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://apps.apple.com/us/app/zoco-tickets/id6758010461"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center gap-2 rounded-[10px] bg-[#2D3035] px-4 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#B1C20E]"
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
                    className="inline-flex h-9 items-center gap-2 rounded-[10px] bg-[#2D3035] px-4 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#B1C20E]"
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

              <p className="text-center text-[14px] font-semibold text-ink/50 md:text-[20px]">
                La única plataforma sin cargos por servicio ni por ticket
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center gap-2 text-[14px] text-ink/50 md:mt-8 md:flex-row md:flex-wrap md:justify-center md:gap-6 md:text-[18px]">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-ink">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-6 text-center text-[12px] text-ink/40 md:text-[18px]">
              Copyright © ZOCO 2026
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
