import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import FloatingPhotoGrid from "./components/FloatingPhotoGrid";
import FeatureCards from "./components/FeatureCards";
import VideoCarouselSection from "./components/VideoCarouselSection";
import POSSection from "./components/POSSection";
import EventTypesCarousel from "./components/EventTypesCarousel";
import CTASection from "./components/CTASection";
import AppDownloadSection from "./components/AppDownloadSection";
import Footer from "./components/Footer";
import OrganizerTermsPage from "./pages/OrganizerTermsPage";
import OrganizerContractsPage from "./pages/OrganizerContractsPage";

export default function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isOrganizerTermsPage = [
    "/terminos-y-condiciones-organizador",
    "/terminos-y-condiciones",
    "/termsandcondition",
  ].includes(normalizedPath);
  const isOrganizerContractsPage = [
    "/contratos",
    "/contratos-organizador",
    "/contracts",
  ].includes(normalizedPath);
  const isLegalPage = isOrganizerTermsPage || isOrganizerContractsPage;

  useEffect(() => {
    if (isLegalPage) {
      return undefined;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (prefersReduced.matches) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [isLegalPage]);

  if (isOrganizerTermsPage) {
    return <OrganizerTermsPage />;
  }
  if (isOrganizerContractsPage) {
    return <OrganizerContractsPage />;
  }

  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="space-y-0">
        <HeroVideo />
        <FloatingPhotoGrid />
        <FeatureCards />
        <VideoCarouselSection />
        <POSSection />
        <EventTypesCarousel />
        <CTASection />
        <AppDownloadSection />
      </main>
      <Footer />
    </div>
  );
}
