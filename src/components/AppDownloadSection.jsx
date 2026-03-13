import Reveal from "./Reveal";
import { appDownload } from "../data/content";

export default function AppDownloadSection() {
  return (
    <section id="app" className="section-spacing bg-white">
      <div className="container-shell">
        <Reveal>
          <div className="card-surface flex flex-col items-center gap-8 rounded-3xl px-8 py-12 md:flex-row md:justify-between md:px-12">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
                App ZOCO
              </p>
              <h2 className="mt-3 text-3xl font-display md:text-4xl">
                {appDownload.title}
              </h2>
              <p className="mt-4 text-base text-ink/70">
                {appDownload.description}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-[8px] border border-ink/10 bg-white px-6 py-3 text-sm font-medium transition hover:border-ink/20">
                  {appDownload.appStore}
                </button>
                <button className="rounded-[8px] border border-ink/10 bg-white px-6 py-3 text-sm font-medium transition hover:border-ink/20">
                  {appDownload.googlePlay}
                </button>
              </div>
            </div>
            <div className="relative w-full max-w-sm">
              <div className="absolute -left-8 -top-6 h-28 w-28 rounded-full bg-mint/60 blur-2xl" />
              <img
                src={appDownload.image}
                alt="Mockup de la app"
                className="relative h-80 w-full rounded-3xl object-cover shadow-card"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
