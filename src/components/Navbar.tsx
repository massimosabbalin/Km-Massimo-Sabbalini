import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Chi Siamo", href: "/#about" },
  { label: "Trattamenti", href: "/trattamenti", isRoute: true },
  { label: "Risultati", href: "/risultati", isRoute: true },
  { label: "Le Nostre Sedi", href: "/#sedi" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={isHome ? { y: -100 } : { y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: isHome ? 3.8 : 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/5" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Dott. Massimo Sabbalini" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className="font-body text-xs tracking-[0.2em] uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-xs tracking-[0.2em] uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="https://wa.me/393296164667?text=Buongiorno,%20vorrei%20delle%20info%20sui%20vostri%20trattamenti%20"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient text-primary-foreground px-6 py-2.5 rounded-full text-xs tracking-[0.15em] uppercase font-medium hover:opacity-90 transition-opacity"
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
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#131313] md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-foreground">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center gap-8 px-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-display text-3xl tracking-wider uppercase text-foreground hover:text-gold-gradient transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-display text-3xl tracking-wider uppercase text-foreground hover:text-gold-gradient transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <a
                  href="https://wa.me/393296164667?text=Buongiorno,%20vorrei%20delle%20info%20sui%20vostri%20trattamenti%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="bg-gold-gradient text-primary-foreground px-12 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-medium shadow-xl shadow-primary/20"
                >
                  Prenota Ora
                </a>
              </motion.div>
            </div>

            <div className="p-8 border-t border-border w-full text-center">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Dott. Massimo Sabbalini
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
