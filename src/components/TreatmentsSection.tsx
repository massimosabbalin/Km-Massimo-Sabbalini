import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import baFillerLabbra from "@/assets/ba-filler-labbra.jpg";
import baMandibolare from "@/assets/ba-mandibolare.jpg";
import baBiorivitalizzazione from "@/assets/ba-biorivitalizzazione.jpg";
import baRinofiller from "@/assets/ba-rinofiller.jpg";
import baZigomi from "@/assets/ba-zigomi.jpg";
import baMento from "@/assets/ba-mento.jpg";

const treatments = [
  {
    name: "Filler Labbra",
    description: "Trattamento con acido ialuronico per labbra più piene, definite e naturali. Dona volume e idratazione duratura.",
    image: baFillerLabbra,
  },
  {
    name: "Botox Viso",
    description: "Riduce le rughe d'espressione su fronte, contorno occhi e glabella per un aspetto più fresco e rilassato.",
    image: baMandibolare,
  },
  {
    name: "Solco Nasale Labiale",
    description: "Riempimento del solco naso-labiale con filler di ultima generazione per un viso più armonioso e giovane.",
    image: baFillerLabbra,
  },
  {
    name: "Definizione Mandibolare",
    description: "Rimodellamento della linea mandibolare per un profilo più definito, strutturato e simmetrico.",
    image: baMandibolare,
  },
  {
    name: "Biorivitalizzazione",
    description: "Trattamento rigenerante che restituisce luminosità, elasticità e idratazione profonda alla pelle del viso e del collo.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Rinofiller",
    description: "Rimodellamento non chirurgico del naso con filler per correggere piccoli difetti e migliorare il profilo senza intervento.",
    image: baRinofiller,
  },
  {
    name: "Zigomi",
    description: "Volumizzazione degli zigomi con acido ialuronico per un volto più scolpito e proporzioni più armoniose.",
    image: baZigomi,
  },
  {
    name: "Occhiaie",
    description: "Trattamento specifico per attenuare occhiaie e borse sotto gli occhi, donando uno sguardo luminoso e riposato.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Filler Mento",
    description: "Proiezione e definizione del mento per un profilo bilanciato e un viso più proporzionato.",
    image: baMento,
  },
];

const additionalTreatments = [
  { name: "Ringiovanimento Viso", desc: "Con o senza laser ablativo per una pelle visibilmente più giovane." },
  { name: "Trattamento Macchie e Acne", desc: "Protocolli mirati per ridurre discromie e imperfezioni." },
  { name: "Radiofrequenza", desc: "Rassodamento cutaneo profondo senza bisturi." },
  { name: "Blefaroplastica", desc: "Chirurgica e non chirurgica per ringiovanire lo sguardo." },
  { name: "Spectra Hollywood Peeling", desc: "Peeling laser per una pelle luminosa come le star." },
  { name: "Lifting Viso 4D", desc: "Tensore tridimensionale per un ringiovanimento globale." },
  { name: "Fili di Trazione", desc: "Effetto lifting immediato senza chirurgia." },
  { name: "Lipofiller", desc: "Rimodellamento con il proprio grasso autologo." },
  { name: "Ultraformer", desc: "Ultrasuoni focalizzati per lifting e rassodamento." },
];

const TreatmentCard = ({ treatment, index, inView }: { treatment: typeof treatments[0]; index: number; inView: boolean }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.08 * index }}
      className="group rounded-2xl border border-border overflow-hidden bg-card hover:border-primary/30 transition-all duration-500"
    >
      {/* Before/After image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={treatment.image}
          alt={`Prima e dopo ${treatment.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex justify-between">
          <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/60 bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">Prima</span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-primary bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">Dopo</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-gold-gradient transition-colors">
          {treatment.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {treatment.description}
        </p>
        <a
          href="https://wa.me/393342447375?text=Buongiorno%2C%20vorrei%20informazioni%20sul%20trattamento%20di%20" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-xs tracking-[0.15em] uppercase text-primary hover:text-foreground transition-colors"
        >
          Richiedi info →
        </a>
      </div>
    </motion.div>
  );
};

const TreatmentsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

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

        {/* Treatment cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <TreatmentCard key={t.name} treatment={t} index={i} inView={inView} />
          ))}
        </div>

        {/* Additional treatments */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="mx-auto flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors duration-300"
          >
            {showAll ? "Nascondi" : "Altri Trattamenti Disponibili"}
            <ChevronDown size={16} className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
          </button>

          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {additionalTreatments.map((t) => (
                <div
                  key={t.name}
                  className="p-5 rounded-xl border border-border bg-card/50 hover:border-primary/20 transition-all"
                >
                  <h4 className="font-display text-lg text-foreground mb-1">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* CTA box centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 max-w-2xl mx-auto text-center p-10 rounded-2xl bg-card border border-border"
        >
          <p className="font-display text-3xl text-foreground mb-3">
            Prenota la tua Consulenza
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Contattaci per un appuntamento personalizzato
          </p>
          <a
            href="https://wa.me/393342447375?text=Buongiorno%2C%20vorrei%20informazioni%20sui%20trattamenti."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-3.5 rounded-full text-xs tracking-[0.15em] uppercase font-medium hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contattaci su WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
