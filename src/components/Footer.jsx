import Reveal from "./Reveal";
import { footerLinks } from "../data/content";
import zocoLogoSolo from "../assets/Logo ZOCO (solo) 2.svg";
import facebookIcon from "../assets/facebook-3.svg";
import instagramIcon from "../assets/instagram-2.svg";
import youtubeIcon from "../assets/youtube-2.svg";

export default function Footer() {
  return (
    <footer className="bg-white pb-10">
      <div className="container-shell md:min-w-[1380px]">
        <Reveal>
          <div className="border-t border-ink/15 pt-6 md:pt-8">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4 md:gap-6">
                <img
                  src={zocoLogoSolo}
                  alt="ZOCO"
                  className="h-[26px] w-[112px] md:h-[33px] md:w-[142px]"
                />
                <div className="flex items-center gap-2 md:gap-3">
                    <img src={facebookIcon} alt="" className="h-6 w-6 md:h-[33px] md:w-[33px]" />
                    <img src={instagramIcon} alt="" className="h-6 w-6 md:h-[33px] md:w-[33px]" />
                    <img src={youtubeIcon} alt="" className="h-6 w-6 md:h-[33px] md:w-[33px]" />
                </div>
              </div>
              <p className="text-[14px] font-semibold text-ink/50 md:text-[24px]">
                La única plataforma sin cargos de servicios ni por ticket
              </p>
            </div>
            <div className="mt-6 flex flex-col items-start gap-2 text-[14px] text-ink/50 md:mt-[70px] md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-6 md:text-[18px]">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-ink">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-6 text-center text-[12px] text-ink/40 md:text-[18px]">
              Copyright © ZOCO 2025
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
