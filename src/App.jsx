import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import FloatingPhotoGrid from "./components/FloatingPhotoGrid";
import FeatureCards from "./components/FeatureCards";
import POSSection from "./components/POSSection";
import EventTypesCarousel from "./components/EventTypesCarousel";
import CTASection from "./components/CTASection";
import AppDownloadSection from "./components/AppDownloadSection";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="space-y-0">
        <HeroVideo />
        <FloatingPhotoGrid />
        <FeatureCards />
        <POSSection />
        <EventTypesCarousel />
        <CTASection />
        <AppDownloadSection />
      </main>
      <Footer />
    </div>
  );
}
