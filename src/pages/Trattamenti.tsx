import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import baFillerLabbra from "@/assets/ba-filler-labbra.jpg";
import baMandibolare from "@/assets/ba-mandibolare.jpg";
import baBiorivitalizzazione from "@/assets/ba-biorivitalizzazione.jpg";
import baRinofiller from "@/assets/ba-rinofiller.jpg";
import baZigomi from "@/assets/ba-zigomi.jpg";
import baMento from "@/assets/ba-mento.jpg";

const allTreatments = [
  {
    name: "Filler Labbra",
    price: "€ 350",
    description: "Trattamento con acido ialuronico per labbra più piene, definite e naturali. Dona volume e idratazione duratura.",
    image: baFillerLabbra,
  },
  {
    name: "Botox Viso",
    price: "€ 300",
    description: "Riduce le rughe d'espressione su fronte, contorno occhi e glabella per un aspetto più fresco e rilassato.",
    image: baMandibolare,
  },
  {
    name: "Solco Nasale Labiale",
    price: "€ 350",
    description: "Riempimento del solco naso-labiale con filler di ultima generazione per un viso più armonioso e giovane.",
    image: baFillerLabbra,
  },
  {
    name: "Definizione Mandibolare",
    price: "€ 400",
    description: "Rimodellamento della linea mandibolare per un profilo più definito, strutturato e simmetrico.",
    image: baMandibolare,
  },
  {
    name: "Biorivitalizzazione",
    price: "€ 250",
    description: "Trattamento rigenerante che restituisce luminosità, elasticità e idratazione profonda alla pelle del viso e del collo.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Rinofiller",
    price: "€ 400",
    description: "Rimodellamento non chirurgico del naso con filler per correggere piccoli difetti e migliorare il profilo senza intervento.",
    image: baRinofiller,
  },
  {
    name: "Zigomi",
    price: "€ 400",
    description: "Volumizzazione degli zigomi con acido ialuronico per un volto più scolpito e proporzioni più armoniose.",
    image: baZigomi,
  },
  {
    name: "Occhiaie",
    price: "€ 350",
    description: "Trattamento specifico per attenuare occhiaie e borse sotto gli occhi, donando uno sguardo luminoso e riposato.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Filler Mento",
    price: "€ 350",
    description: "Proiezione e definizione del mento per un profilo bilanciato e un viso più proporzionato.",
    image: baMento,
  },
  {
    name: "Ringiovanimento Viso",
    price: "€ 500",
    description: "Con o senza laser ablativo per una pelle visibilmente più giovane.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Trattamento Macchie e Acne",
    price: "€ 200",
    description: "Protocolli mirati per ridurre discromie e imperfezioni.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Radiofrequenza",
    price: "€ 250",
    description: "Rassodamento cutaneo profondo senza bisturi.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Blefaroplastica",
    price: "Da € 1.500",
    description: "Chirurgica e non chirurgica per ringiovanire lo sguardo.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Spectra Hollywood Peeling",
    price: "€ 300",
    description: "Peeling laser per una pelle luminosa come le star.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Lifting Viso 4D",
    price: "Da € 2.000",
    description: "Tensore tridimensionale per un ringiovanimento globale.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Fili di Trazione",
    price: "Da € 800",
    description: "Effetto lifting immediato senza chirurgia.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Lipofiller",
    price: "Da € 1.200",
    description: "Rimodellamento con il proprio grasso autologo.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Ultraformer",
    price: "€ 500",
    description: "Ultrasuoni focalizzati per lifting e rassodamento.",
    image: baBiorivitalizzazione,
  },
];

const TreatmentItem = ({ treatment, index }: { treatment: typeof allTreatments[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="border border-border rounded-2xl overflow-hidden bg-card hover:border-primary/20 transition-all duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <span className="font-display text-xl md:text-2xl text-foreground truncate">{treatment.name}</span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span className="font-body text-sm md:text-base text-primary font-medium">{treatment.price}</span>
          <ChevronDown
            size={20}
            className={`text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-4">
              <div className="w-full h-[1px] bg-border" />
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {treatment.description}
              </p>
              <div className="relative aspect-[16/9] max-w-lg rounded-xl overflow-hidden">
                <img
                  src={treatment.image}
                  alt={`Prima e dopo ${treatment.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-4 right-4 flex justify-between">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/60 bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">Prima</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">Dopo</span>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground/50 italic">
                Foto prima e dopo — risultati reali (le foto verranno aggiornate)
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Trattamenti = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            Torna alla Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Listino Completo
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              Tutti i <span className="text-gold-gradient italic">Trattamenti</span>
            </h1>
            <div className="w-16 h-[1px] bg-gold-gradient" />
            <p className="mt-6 text-sm text-muted-foreground max-w-xl">
              Clicca su ogni trattamento per scoprire i dettagli, la descrizione e le foto prima e dopo.
            </p>
          </motion.div>

          <div className="space-y-4">
            {allTreatments.map((t, i) => (
              <TreatmentItem key={t.name} treatment={t} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 text-center p-10 rounded-2xl bg-card border border-border"
          >
            <p className="font-display text-3xl text-foreground mb-3">
              Prenota la tua Consulenza
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Contattaci per un appuntamento personalizzato
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-3.5 rounded-full text-xs tracking-[0.15em] uppercase font-medium hover:opacity-90 transition-opacity"
            >
              Prenota Ora
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Trattamenti;
