import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FlagIt = () => (
  <svg viewBox="0 0 3 2" className="w-5 h-5 rounded-full object-cover">
    <rect width="1" height="2" fill="#009246" />
    <rect width="1" height="2" x="1" fill="#fff" />
    <rect width="1" height="2" x="2" fill="#ce2b37" />
  </svg>
);

const FlagDe = () => (
  <svg viewBox="0 0 5 3" className="w-5 h-5 rounded-full object-cover">
    <rect width="5" height="3" y="0" fill="#000" />
    <rect width="5" height="2" y="1" fill="#D00" />
    <rect width="5" height="1" y="2" fill="#FFCE00" />
  </svg>
);

const LanguageSelector = ({ mobile = false, setMobileOpen }: { mobile?: boolean; setMobileOpen?: (open: boolean) => void }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "IT", label: "Italiano", flag: <FlagIt /> },
    { code: "DE", label: "Deutsch", flag: <FlagDe /> },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="relative" onMouseEnter={() => !mobile && setIsOpen(true)} onMouseLeave={() => !mobile && setIsOpen(false)}>
      <motion.button
        onClick={() => mobile && setIsOpen(!isOpen)}
        className={`flex items-center gap-2 group transition-all ${mobile ? "px-6 py-4 bg-white/5 rounded-xl w-full justify-between" : "px-3 py-1.5 rounded-full hover:bg-white/5"}`}
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ 
              y: [0, -2, 0],
              rotate: [0, 1, -1, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="shadow-sm"
          >
            {currentLang.flag}
          </motion.div>
          <span className={`font-body text-[10px] tracking-[0.2em] uppercase font-bold ${mobile ? "text-lg md:text-xl" : "text-foreground"}`}>
            {currentLang.code}
          </span>
        </div>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""} text-muted-foreground group-hover:text-primary`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: mobile ? 10 : 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`${
              mobile 
                ? "mt-2 space-y-2 w-full" 
                : "absolute top-full right-0 mt-2 w-32 bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-[100]"
            } p-1`}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as "IT" | "DE");
                  setIsOpen(false);
                  if (mobile && setMobileOpen) setMobileOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  language === lang.code 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <div className="shrink-0">{lang.flag}</div>
                <span className="font-body text-[10px] tracking-widest uppercase font-bold">
                  {lang.label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: "IT", label: "Italiano", flag: <FlagIt /> },
    { code: "DE", label: "Deutsch", flag: <FlagDe /> },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="fixed bottom-6 left-6 z-[100] md:hidden">
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-full left-0 mb-3 w-32 bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-1"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as "IT" | "DE");
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-colors ${
                    language === lang.code 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  <div className="shrink-0">{lang.flag}</div>
                  <span className="font-body text-[10px] tracking-widest uppercase font-bold">
                    {lang.code}
                  </span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-background/40 backdrop-blur-xl border border-white/10 rounded-full py-2 px-4 shadow-xl text-white group"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={isOpen ? {} : { 
                y: [0, -2, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              {currentLang.flag}
            </motion.div>
            <span className="font-body text-[10px] tracking-[0.2em] uppercase font-bold">
              {currentLang.code}
            </span>
          </div>
          <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""} text-muted-foreground group-hover:text-primary`} />
        </motion.button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { language, t } = useLanguage();

  const navItems = [
    { label: t("nav.home"), href: "/", isRoute: true },
    { label: t("nav.treatments"), href: "/trattamenti", isRoute: true },
    { label: t("nav.results"), href: "/risultati", isRoute: true },
    { label: t("nav.laser"), href: "/laser-alessandrite", isRoute: true },
    { label: t("nav.locations"), href: "/#sedi" },
    { label: t("nav.blog"), href: "/blog", isRoute: true },
  ];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        mobileOpen ? "bg-[#131313]" : scrolled ? "bg-background/95 backdrop-blur-md shadow-lg shadow-primary/5" : "bg-transparent"
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
          
          <div className="px-4 border-l border-white/10">
            <LanguageSelector />
          </div>

          <a
            href={`https://wa.me/393296164667?text=${encodeURIComponent(t("nav.whatsappMessage"))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient text-primary-foreground px-6 py-2.5 rounded-full text-xs tracking-[0.15em] uppercase font-medium hover:opacity-90 transition-opacity"
          >
            {t("nav.book")}
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

            <div className="flex-1 flex flex-col justify-center items-center gap-8 px-6 pt-10 pb-20 overflow-y-auto">
              <div className="w-full space-y-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    {item.isRoute ? (
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-display text-4xl tracking-wider uppercase text-foreground hover:text-gold-gradient transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-display text-4xl tracking-wider uppercase text-foreground hover:text-gold-gradient transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>


              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-10"
              >
                <a
                  href={`https://wa.me/393296164667?text=${encodeURIComponent(t("nav.whatsappMessage"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="bg-gold-gradient text-primary-foreground px-12 py-5 rounded-full text-sm tracking-[0.2em] uppercase font-medium shadow-xl shadow-primary/20 block text-center"
                >
                  {t("nav.book")}
                </a>
              </motion.div>
            </div>

            <div className="p-8 border-t border-white/5 w-full bg-black/20 text-center">
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-bold">
                KM CLINIC • DOTT. SABBALINI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <MobileLanguageSwitcher />
    </motion.header>
  );
};

export default Navbar;
