import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Intro overlay with logo animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-none"
        style={{ pointerEvents: "none" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 1.1] }}
          transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
          className="flex flex-col items-center"
        >
          <img src={logo} alt="KM" className="h-24 md:h-32 w-auto mb-4" />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-gold-gradient"
          />
        </motion.div>
      </motion.div>

      {/* Background image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
          className="w-full h-full"
        >
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6"
        >
          Medicina & Chirurgia Estetica
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6"
        >
          <span className="text-foreground">La Bellezza è</span>
          <br />
          <span className="text-gold-gradient italic">un'Arte</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Dott. Massimo Sabbalini — Chirurgia Plastica e Medicina Estetica d'eccellenza.
          Risultati naturali, tecniche all'avanguardia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/393342447375?text=Buongiorno%2C%20vorrei%20prenotare%20una%20consulenza."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient text-primary-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            Prenota Consulenza
          </a>
          <a
            href="#trattamenti"
            className="border border-primary/30 text-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary/10 transition-all duration-300"
          >
            Scopri i Trattamenti
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
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
