import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const zones = [
  {
    name: "Zona Piccola",
    areas: "Attaccatura capelli, guance, baffetto, orecchie, mento, mani, piedi, basette",
    prices: [
      { sessions: "1 Seduta", price: "€ 40" },
      { sessions: "2 Sedute", price: "€ 70" },
      { sessions: "4 Sedute", price: "€ 125" },
    ],
  },
  {
    name: "Zona Media",
    areas: "Spalle, ascelle, glutei, inguine, ½ braccio, viso totale, addome",
    prices: [
      { sessions: "1 Seduta", price: "€ 95" },
      { sessions: "2 Sedute", price: "€ 160" },
      { sessions: "4 Sedute", price: "€ 310" },
    ],
  },
  {
    name: "Zona Grande",
    areas: "Coscia, ½ gamba, torace, schiena, braccio intero",
    prices: [
      { sessions: "1 Seduta", price: "€ 150" },
      { sessions: "2 Sedute", price: "€ 270" },
      { sessions: "4 Sedute", price: "€ 520" },
    ],
  },
];

const features = [
  "Tecnologia Candela GentlePro di ultima generazione",
  "Laser Alessandrite medicale certificato",
  "Adatto a tutti i fototipi",
  "Trattamento rapido e poco invasivo",
  "Risultati duraturi fin dalle prime sedute",
  "Prova gratuita disponibile",
];

const LaserAlessandrite = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/trattamenti"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            Tutti i Trattamenti
          </Link>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles size={20} className="text-primary" />
              </div>
              <p className="font-body text-xs tracking-[0.4em] uppercase text-primary">
                Epilazione Laser Medicale
              </p>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              Laser <span className="text-gold-gradient italic">Alessandrite</span>
            </h1>
            <div className="w-16 h-[1px] bg-gold-gradient" />
            <p className="mt-6 text-base text-muted-foreground max-w-2xl leading-relaxed">
              Epilazione laser definitiva con tecnologia <strong className="text-foreground">Candela GentlePro</strong>, il gold standard mondiale per l'epilazione medicale. Trattamento sicuro, efficace e confortevole per tutte le zone del corpo.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 grid sm:grid-cols-2 gap-3"
          >
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <Check size={16} className="text-primary shrink-0" />
                <span className="text-sm text-foreground/80">{f}</span>
              </div>
            ))}
          </motion.div>

          {/* Price zones */}
          <div className="space-y-6">
            {zones.map((zone, zi) => (
              <motion.div
                key={zone.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * zi + 0.3 }}
                className="border border-border rounded-2xl overflow-hidden bg-card"
              >
                <div className="p-6 md:p-8">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                    {zone.name}
                  </h2>
                  <p className="text-xs text-muted-foreground mb-6">
                    A scelta tra: {zone.areas}
                  </p>

                  <div className="space-y-3">
                    {zone.prices.map((p) => (
                      <div
                        key={p.sessions}
                        className="flex items-center justify-between py-3 px-4 rounded-xl bg-background/50 border border-border/50"
                      >
                        <span className="font-body text-sm text-foreground/80">{p.sessions}</span>
                        <span className="font-display text-xl md:text-2xl text-primary font-medium">{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Prova gratuita banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/10 to-card border border-primary/20 text-center"
          >
            <Sparkles size={28} className="text-primary mx-auto mb-4" />
            <p className="font-display text-3xl md:text-4xl text-foreground mb-3">
              Prova <span className="text-gold-gradient italic">Gratuita</span>
            </p>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
              Prenota la tua prova gratuita per scoprire i benefici del Laser Alessandrite Candela GentlePro
            </p>
            <a
              href="https://wa.me/393296164667?text=Buongiorno,%20vorrei%20delle%20info%20sui%20vostri%20trattamenti%20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-10 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Prenota la Prova Gratuita
            </a>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 text-center"
          >
            <p className="text-xs text-muted-foreground/60">
              Via Cassa di Risparmio 8, Bolzano · Info e prenotazioni: 329 616 4667 — Kristina
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LaserAlessandrite;
