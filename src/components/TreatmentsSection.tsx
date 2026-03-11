import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import baFillerLabbra from "@/assets/ba-filler-labbra.jpg";
import baMandibolare from "@/assets/ba-mandibolare.jpg";
import baBiorivitalizzazione from "@/assets/ba-biorivitalizzazione.jpg";
import baRinofiller from "@/assets/ba-rinofiller.jpg";

const featuredTreatments = [
  {
    name: "Filler Labbra",
    description: "Trattamento con acido ialuronico per labbra più piene, definite e naturali.",
    image: baFillerLabbra,
  },
  {
    name: "Botox Viso",
    description: "Riduce le rughe d'espressione per un aspetto più fresco e rilassato.",
    image: baMandibolare,
  },
  {
    name: "Biorivitalizzazione",
    description: "Trattamento rigenerante che restituisce luminosità e idratazione profonda.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Rinofiller",
    description: "Rimodellamento non chirurgico del naso con filler di ultima generazione.",
    image: baRinofiller,
  },
];

const TreatmentsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trattamenti" className="py-32 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-primary/30" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            I Nostri Servizi
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Trattamenti <span className="text-gold-gradient italic">Esclusivi</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold-gradient mx-auto" />
        </motion.div>

        {/* 4 Featured treatment cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTreatments.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group rounded-2xl border border-border overflow-hidden bg-card hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={t.image}
                  alt={`Prima e dopo ${t.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex justify-between">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/60 bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">Prima</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">Dopo</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold-gradient transition-colors">
                  {t.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            to="/trattamenti"
            className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-10 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
          >
            Mostra Tutti i Trattamenti
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
