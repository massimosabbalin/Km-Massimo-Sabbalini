import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

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
            {t("about.subtitle")}
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-10 leading-tight">
            {t("about.title")}
            <br />
            <span className="text-gold-gradient italic">{t("about.titleItalic")}</span>
          </h2>

          <div className="w-24 h-[1px] bg-gold-gradient mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 text-left mb-16">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("about.p1")}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("about.p2")}
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("about.p3")}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed italic">
                {t("about.quote")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-12 pt-12 border-t border-primary/10">
            {[
              { number: "15+", label: t("about.stat1") },
              { number: "8+", label: t("about.stat2") },
              { number: "10k+", label: t("about.stat3") },
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
