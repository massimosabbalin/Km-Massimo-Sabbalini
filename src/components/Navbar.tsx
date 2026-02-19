import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Chi Siamo", href: "#about" },
  { label: "Trattamenti", href: "#trattamenti" },
  { label: "Le Nostre Sedi", href: "#sedi" },
  { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Dott. Massimo Sabbalini" className="h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-xs tracking-[0.2em] uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/393342447375?text=Buongiorno%2C%20vorrei%20prenotare%20una%20consulenza."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient text-primary-foreground px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-medium hover:opacity-90 transition-opacity"
          >
            Prenota Ora
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/393342447375?text=Buongiorno%2C%20vorrei%20prenotare%20una%20consulenza."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-gradient text-primary-foreground px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium text-center mt-2"
              >
                Prenota Ora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
