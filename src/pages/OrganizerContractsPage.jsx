import { useEffect, useMemo, useState } from "react";
import "./OrganizerContractsPage.css";
import zocoLogo from "../assets/logo/zocotickets.png";
import freeContractRaw from "../data/contracts/free-contract.txt?raw";
import commercialContractRaw from "../data/contracts/commercial-contract.txt?raw";

const parseContractSections = (rawText) =>
  rawText
    .split(/\n{2,}/)
    .map((block) =>
      block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
    )
    .filter((lines) => lines.length > 0)
    .map((lines) => ({
      title: lines[0],
      paragraphs: lines.slice(1),
    }));

export default function OrganizerContractsPage() {
  const [openId, setOpenId] = useState("");
  const freeSections = useMemo(() => parseContractSections(freeContractRaw), []);
  const commercialSections = useMemo(
    () => parseContractSections(commercialContractRaw),
    []
  );

  const contracts = useMemo(
    () => [
      {
        id: "free",
        tag: "Organizador Gratuito",
        title:
          "Contrato de Prestación de Servicios Tecnológicos para Gestión de Eventos Gratuitos",
        subtitle:
          "Texto completo del contrato aplicable a organizadores de eventos gratuitos.",
        sections: freeSections,
      },
      {
        id: "commercial",
        tag: "Organizador con Venta",
        title:
          "Contrato Comercial de Prestación de Servicios de Venta Electrónica de Entradas y Procesamiento de Pagos",
        subtitle:
          "Texto completo del contrato comercial aplicable a organizadores que venden entradas y procesan pagos con ZOCO.",
        sections: commercialSections,
      },
    ],
    [commercialSections, freeSections]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contracts-page">
      <header className="contracts-hero">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-[72px] lg:min-w-[1440px] contracts-hero-inner">
          <div className="contracts-topbar">
            <a href="/" className="contracts-back-link">
              Volver al inicio
            </a>
            <img src={zocoLogo} alt="ZOCO Tickets" className="contracts-logo" />
          </div>
          <span className="contracts-pill">Documentación Comercial</span>
          <h1 className="contracts-title">Contratos para Organizadores</h1>
          <p className="contracts-subtitle">
            Elegí el tipo de contrato según tu modalidad de evento y desplegá su contenido.
          </p>
        </div>
      </header>

      <main className="contracts-content">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-[72px] lg:min-w-[1440px]">
          <section className="contracts-card">
            <div className="contracts-accordion">
              {contracts.map((contract) => {
                const isOpen = openId === contract.id;
                return (
                  <article
                    key={contract.id}
                    className={`contracts-item ${isOpen ? "is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="contracts-item-header"
                      onClick={() =>
                        setOpenId((prev) => (prev === contract.id ? "" : contract.id))
                      }
                      aria-expanded={isOpen}
                    >
                      <div className="contracts-item-heading">
                        <span className="contracts-item-tag">{contract.tag}</span>
                        <h2>{contract.title}</h2>
                        <p>{contract.subtitle}</p>
                      </div>
                      <span className="contracts-item-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    <div className="contracts-item-panel">
                      <div className="contracts-item-content">
                        {contract.sections.map((section, sectionIndex) => (
                          <section
                            key={`${contract.id}-${section.title}-${sectionIndex}`}
                            className="contracts-clause"
                          >
                            <h3>{section.title}</h3>
                            {section.paragraphs.map((paragraph, paragraphIndex) => (
                              <p
                                key={`${contract.id}-${sectionIndex}-${paragraphIndex}`}
                              >
                                {paragraph}
                              </p>
                            ))}
                          </section>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
