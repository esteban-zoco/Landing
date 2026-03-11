import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "../data/content";
import zocoLogo from "../assets/logo/zocoticket 1.svg";
import Button from "./ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-surface shadow-sm py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#" className="flex items-center gap-2">
          <img src={zocoLogo} alt="ZOCO tickets" className="h-6 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm transition ${
                scrolled
                  ? "text-ink/70 hover:text-ink"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button
            size="sm"
            variant={scrolled ? "primary" : "secondary"}
            className={
              scrolled
                ? ""
                : "!bg-white !text-ink shadow-none hover:!bg-white"
            }
          >
            DESCARGÁ LA APP
          </Button>
        </div>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden"
          >
            <div className="container-shell flex flex-col gap-4 pb-6 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base text-ink/70"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant={scrolled ? "primary" : "secondary"}
                className={
                  scrolled
                    ? "w-full"
                    : "w-full !bg-white !text-ink shadow-none hover:!bg-white"
                }
              >
                DESCARGÁ LA APP
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

