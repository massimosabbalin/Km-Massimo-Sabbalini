import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import doctorImg from "@/assets/doctor.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={doctorImg}
                alt="Dott. Massimo Sabbalini"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 border border-primary/20" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 hidden md:block"
            >
              <img
                src={clinicImg}
                alt="Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-primary/20" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Chi Siamo
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Eccellenza nella
              <br />
              <span className="text-gold-gradient italic">Medicina Estetica</span>
            </h2>
            <div className="w-16 h-[1px] bg-gold-gradient mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Il Dott. Massimo Sabbalini è specialista in Chirurgia Plastica e Medicina Estetica,
              con anni di esperienza e una visione che unisce scienza e arte.
              Ogni trattamento è personalizzato per valorizzare la bellezza naturale di ciascun paziente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Utilizziamo tecniche all'avanguardia e prodotti di altissima qualità per garantire
              risultati eccellenti e naturali. La sicurezza e il benessere dei nostri pazienti
              sono la nostra priorità assoluta.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "15+", label: "Anni Esperienza" },
                { number: "5", label: "Sedi in Italia" },
                { number: "10k+", label: "Pazienti Soddisfatti" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="font-display text-3xl text-gold-gradient">{stat.number}</p>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
