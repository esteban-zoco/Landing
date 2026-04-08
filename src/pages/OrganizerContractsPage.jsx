import { useEffect, useMemo, useState } from "react";
import "./OrganizerContractsPage.css";
import zocoLogo from "../assets/logo/zocotickets.png";
import freeContractRaw from "../data/contracts/free-contract.txt?raw";
import commercialContractRaw from "../data/contracts/commercial-contract.txt?raw";

const isHeadingLine = (line) => {
  if (!line) return false;
  if (/^CAP[ÍI]TULO\b/i.test(line)) return true;
  if (/^(CL[ÁA]USULA|\d+\.\s*CL[ÁA]USULA)\b/i.test(line)) return true;
  if (/^\d+\.\s+[A-ZÁÉÍÓÚÜÑ]/.test(line)) return true;
  if (/^[a-z]\)\s+[A-ZÁÉÍÓÚÜÑ]/.test(line)) return true;

  // Headings in all caps (short enough to avoid classifying full paragraphs)
  if (line.length <= 120 && /^[A-ZÁÉÍÓÚÜÑ0-9 .,:;()\-–—]+$/.test(line)) {
    return true;
  }

  return false;
};

const parseContractSections = (rawText) => {
  const lines = rawText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const sections = [];
  let currentSection = null;

  lines.forEach((line) => {
    if (!currentSection || isHeadingLine(line)) {
      currentSection = { title: line, paragraphs: [] };
      sections.push(currentSection);
      return;
    }

    currentSection.paragraphs.push(line);
  });

  return sections;
};

const drawJustifiedLine = (doc, line, x, y, targetWidth, justify) => {
  const normalized = line.trim().replace(/\s+/g, " ");
  if (!justify || !normalized.includes(" ")) {
    doc.text(normalized, x, y);
    return;
  }

  const words = normalized.split(" ");
  const gapCount = words.length - 1;
  if (gapCount <= 0) {
    doc.text(normalized, x, y);
    return;
  }

  const baseText = words.join(" ");
  const baseWidth = doc.getTextWidth(baseText);
  const extraSpace = targetWidth - baseWidth;

  if (extraSpace <= 0) {
    doc.text(baseText, x, y);
    return;
  }

  const regularSpaceWidth = doc.getTextWidth(" ");
  const extraPerGap = extraSpace / gapCount;

  let cursorX = x;
  words.forEach((word, index) => {
    doc.text(word, cursorX, y);
    cursorX += doc.getTextWidth(word);
    if (index < gapCount) {
      cursorX += regularSpaceWidth + extraPerGap;
    }
  });
};

const downloadPdf = async ({ filename, title, body }) => {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 44;
  const marginTop = 52;
  const marginBottom = 44;
  const maxTextWidth = pageWidth - marginX * 2;
  const lineHeight = 15;

  let y = marginTop;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  const titleLines = doc.splitTextToSize(title, maxTextWidth);
  titleLines.forEach((line) => {
    doc.text(line, marginX, y);
    y += lineHeight + 1;
  });

  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);

  const paragraphs = body
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/\n+/g, " ").trim())
    .filter(Boolean);

  paragraphs.forEach((paragraph) => {
    const lines = doc.splitTextToSize(paragraph, maxTextWidth);

    lines.forEach((line, index) => {
      if (y > pageHeight - marginBottom) {
        doc.addPage();
        y = marginTop;
      }

      const isLastLineOfParagraph = index === lines.length - 1;
      drawJustifiedLine(
        doc,
        line,
        marginX,
        y,
        maxTextWidth,
        !isLastLineOfParagraph
      );
      y += lineHeight;
    });

    y += 4;
  });

  doc.save(filename);
};

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
        rawText: freeContractRaw,
        downloadName: "contrato-eventos-gratuitos-zoco.pdf",
      },
      {
        id: "commercial",
        tag: "Organizador con Venta",
        title:
          "Contrato Comercial de Prestación de Servicios de Venta Electrónica de Entradas y Procesamiento de Pagos",
        subtitle:
          "Texto completo del contrato comercial aplicable a organizadores que venden entradas y procesan pagos con ZOCO.",
        sections: commercialSections,
        rawText: commercialContractRaw,
        downloadName: "contrato-comercial-zoco.pdf",
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
                    <div className="contracts-item-header">
                      <div className="contracts-item-heading">
                        <span className="contracts-item-tag">{contract.tag}</span>
                        <h2>{contract.title}</h2>
                        <p>{contract.subtitle}</p>
                      </div>
                      <div className="contracts-item-actions">
                        <button
                          type="button"
                          className="contracts-download-btn"
                          onClick={(event) => {
                            event.stopPropagation();
                            void downloadPdf({
                              filename: contract.downloadName,
                              title: contract.title,
                              body: contract.rawText,
                            });
                          }}
                        >
                          Descargar
                        </button>
                        <button
                          type="button"
                          className="contracts-toggle-btn"
                          onClick={() =>
                            setOpenId((prev) => (prev === contract.id ? "" : contract.id))
                          }
                          aria-expanded={isOpen}
                          aria-label={
                            isOpen
                              ? `Cerrar ${contract.tag}`
                              : `Abrir ${contract.tag}`
                          }
                        >
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

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
