import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6">
            Chi Siamo
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-10 leading-tight">
            L'Eccellenza della
            <br />
            <span className="text-gold-gradient italic">Chirurgia e Medicina Estetica</span>
          </h2>

          <div className="w-24 h-[1px] bg-gold-gradient mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 text-left mb-16">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Il <span className="text-foreground font-medium">Dott. Massimo Sabbalini</span> è uno specialista di fama internazionale in Chirurgia Plastica, Ricostruttiva ed Estetica. Con oltre quindici anni di esperienza clinica, la sua visione professionale si fonda sull'armonia tra rigore scientifico e sensibilità artistica.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ogni percorso terapeutico è concepito come un'opera unica, dove l'obiettivo non è stravolgere ma valorizzare l'identità e la bellezza naturale di ciascun paziente, attraverso protocolli personalizzati e minimamente invasivi.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                L'approccio del Dott. Sabbalini integra le più moderne innovazioni tecnologiche con una dedizione costante alla sicurezza e al benessere. L'eccellenza dei risultati è garantita dall'utilizzo esclusivo di dispositivi e prodotti certificati ai massimi standard qualitativi.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed italic">
                "La vera bellezza risiede nell'equilibrio. La mia missione è restituire fiducia e armonia, rispettando l'unicità di ogni volto e di ogni corpo."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-12 pt-12 border-t border-primary/10">
            {[
              { number: "15+", label: "Anni di Esperienza" },
              { number: "8+", label: "Sedi in Italia" },
              { number: "10k+", label: "Pazienti Seguiti" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl text-gold-gradient mb-2">{stat.number}</p>
                <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
