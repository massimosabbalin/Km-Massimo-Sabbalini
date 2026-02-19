import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import treatmentFace from "@/assets/treatment-face.jpg";

const treatments = [
  { name: "Filler Labbra 1 Fiala", price: "€ 290" },
  { name: "Filler Labbra ½ Fiala", price: "€ 180" },
  { name: "Botox Completo", price: "€ 400" },
  { name: "Botox Fronte", price: "€ 300" },
  { name: "Botox Contorno Occhi", price: "€ 250" },
  { name: "Botox Solo Glabellare", price: "€ 180" },
  { name: "Solco Nasale Labiale", price: "€ 300" },
  { name: "Definizione Mandibolare", price: "€ 350" },
  { name: "Biorivitalizzazione Viso", price: "€ 250" },
  { name: "Biorivitalizzazione Viso + Collo", price: "€ 400" },
  { name: "Rinofiller", price: "€ 400" },
  { name: "Zigomi", price: "€ 390" },
  { name: "Occhiaie", price: "€ 350" },
  { name: "Filler Mento", price: "€ 290" },
  { name: "Prodotto Sgonfia/Drena Occhiaie", price: "€ 100/seduta" },
];

const additionalTreatments = [
  "Ringiovanimento Viso con o senza Laser Ablativo",
  "Trattamento Macchie e Acne",
  "Radiofrequenza",
  "Blefaroplastica Chirurgica/Non Chirurgica",
  "Spectra Hollywood Peeling",
  "Lifting Viso 4D",
  "Fili di Trazione",
  "Lipofiller",
  "Ultraformer",
];

const TreatmentsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const visibleTreatments = showAll ? treatments : treatments.slice(0, 8);

  return (
    <section id="trattamenti" className="py-32 relative" ref={ref}>
      {/* Decorative line */}
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block sticky top-32"
          >
            <img
              src={treatmentFace}
              alt="Trattamento estetico"
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute inset-0 border border-primary/10" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-display text-2xl text-foreground mb-2">
                Consulenza Personalizzata
              </p>
              <p className="text-sm text-muted-foreground">
                Ogni trattamento viene studiato su misura per le tue esigenze
              </p>
            </div>
          </motion.div>

          {/* Price list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="space-y-0">
              {visibleTreatments.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-baseline justify-between py-5 border-b border-border group hover:border-primary/30 transition-colors duration-300"
                >
                  <span className="font-display text-lg md:text-xl text-foreground group-hover:text-gold-gradient transition-colors">
                    {t.name}
                  </span>
                  <span className="font-body text-sm text-primary tracking-wider ml-4 whitespace-nowrap">
                    {t.price}
                  </span>
                </motion.div>
              ))}
            </div>

            {!showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="mt-8 font-body text-xs tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors duration-300"
              >
                Vedi tutti i trattamenti →
              </button>
            )}

            {showAll && (
              <div className="mt-12">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
                  Altri Trattamenti Disponibili
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {additionalTreatments.map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-3 py-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-primary/50 rotate-45 flex-shrink-0" />
                      <span className="text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 p-8 bg-card border border-border">
              <p className="font-display text-2xl text-foreground mb-3">
                Prenota la tua Consulenza
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Referente: Alessia — Contattaci per un appuntamento personalizzato
              </p>
              <a
                href="https://wa.me/393342447375?text=Buongiorno%2C%20vorrei%20informazioni%20sui%20trattamenti."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-3.5 text-xs tracking-[0.15em] uppercase font-medium hover:opacity-90 transition-opacity"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contattaci su WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
