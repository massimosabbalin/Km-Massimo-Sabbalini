import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIntroComplete(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Full-screen intro overlay */}
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            {/* Particle-like decorations */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.4, 0],
                  scale: [0, 1.5, 2],
                  x: [0, (i % 2 === 0 ? 1 : -1) * 80 * (i + 1)],
                  y: [0, (i % 3 === 0 ? -1 : 1) * 60 * (i + 1)],
                }}
                transition={{
                  duration: 3,
                  delay: 0.8 + i * 0.15,
                  ease: "easeOut",
                }}
                className="absolute w-1 h-1 rounded-full bg-primary"
              />
            ))}

            {/* Logo reveal */}
            <motion.div className="flex flex-col items-center relative">
              {/* Glow ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0, 0.3, 0.15, 0],
                  scale: [0.5, 1.2, 1.5, 2],
                }}
                transition={{ duration: 3.5, ease: "easeOut" }}
                className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full border border-primary/20"
              />

              {/* Logo image */}
              <motion.img
                src={logo}
                alt="Dott. Massimo Sabbalini"
                initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
                animate={{
                  opacity: [0, 1, 1, 1],
                  scale: [0.7, 1, 1, 1.05],
                  filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(0px)"],
                }}
                transition={{ duration: 3, times: [0, 0.3, 0.7, 1], ease: "easeOut" }}
                className="h-28 md:h-40 w-auto mb-6 relative z-10"
              />

              {/* Gold line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "140px", opacity: [0, 1, 1, 0] }}
                transition={{ duration: 3, delay: 0.5, times: [0, 0.2, 0.7, 1] }}
                className="h-[1px] bg-gold-gradient"
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -5] }}
                transition={{ duration: 2.5, delay: 0.8, times: [0, 0.3, 0.7, 1] }}
                className="mt-4 font-body text-[10px] tracking-[0.5em] uppercase text-primary/60"
              >
                {t("hero.subtitle")}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 3 }}
          className="w-full h-full"
        >
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/50" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.5 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.8 }}
          className="font-display text-4xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[0.95] mb-6"
        >
          <span className="text-foreground">{t("hero.title")}</span>
          <br />
          <span className="text-gold-gradient italic">{t("hero.titleItalic")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.1 }}
          className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`https://wa.me/393296164667?text=${encodeURIComponent(t("nav.whatsappMessage"))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient text-primary-foreground px-10 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            {t("hero.ctaBook")}
          </a>
          <a
            href="#trattamenti"
            className="border border-primary/30 text-foreground px-10 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary/10 transition-all duration-300"
          >
            {t("hero.ctaDiscover")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary/0 via-primary to-primary/0"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
