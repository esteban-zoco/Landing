import Reveal from "./Reveal";
import Button from "./ui/Button";

export default function CTASection() {
  return (
    <section className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <div className="rounded-3xl bg-sage px-8 py-16 text-white shadow-card md:px-14 md:py-20">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Listo para escalar
              </p>
              <h2 className="mt-4 text-3xl font-display md:text-4xl">
                Tu próximo evento merece una plataforma a la altura.
              </h2>
              <p className="mt-4 text-base text-white/80">
                Activá tu cuenta premium y empezá a vender entradas en minutos.
              </p>
              <div className="mt-8">
                <Button size="lg" className="bg-white text-sage hover:bg-mint">
                  Empezar ahora
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
