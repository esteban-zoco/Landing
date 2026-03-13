import Reveal from "./Reveal";
import { footerLinks } from "../data/content";
import zocoLogoSolo from "../assets/Logo ZOCO (solo) 2.svg";
import facebookIcon from "../assets/facebook-3.svg";
import instagramIcon from "../assets/instagram-2.svg";
import youtubeIcon from "../assets/youtube-2.svg";

export default function Footer() {
  return (
    <footer className="pb-10 bg-white ">
      <div className="container-shell min-w-[1380px] ">
        <Reveal>
          <div className="border-t border-ink/15 pt-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-6">
                <img
                  src={zocoLogoSolo}
                  alt="ZOCO"
                  className="h-[33px] w-[142px]"
                />
                <div className="flex items-center gap-3">
            
                    <img src={facebookIcon} alt="" className="h-[33px]  w-[33px]" />
                    <img src={instagramIcon} alt="" className="h-[33px] w-[33px]" />
                    <img src={youtubeIcon} alt="" className="h-[33px] w-[33px]" />
                </div>
              </div>
              <p className="text-[24px] font-semibold text-ink/50">
                La única plataforma sin cargos de servicios ni por ticket
              </p>
            </div>
            <div className="mt-[70px] flex flex-wrap items-center justify-center gap-6 text-[18px] text-ink/50">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-ink">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-6 text-center text-[18px] text-ink/40">
              Copyright © ZOCO 2025
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
