import Reveal from "./Reveal";
import { footerLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="pb-10">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 border-t border-ink/10 pt-8 md:flex-row md:items-center">
            <div>
              <p className="font-display text-lg font-semibold">
                ZOCO<span className="text-fern"> tickets</span>
              </p>
              <p className="mt-2 text-sm text-ink/60">
                Plataforma premium para eventos con impacto real.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-ink/60">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-ink">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-xs text-ink/40">
              © 2026 ZOCO Tickets. Todos los derechos reservados.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
