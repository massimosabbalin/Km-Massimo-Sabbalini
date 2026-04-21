import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { treatmentsData, Treatment } from "@/data/treatmentsData";

const TreatmentItem = ({ treatment, index }: { treatment: Treatment; index: number }) => {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="border border-border rounded-2xl overflow-hidden bg-card hover:border-primary/20 transition-all duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 flex-1 min-w-0 pr-4">
          <span className="font-display text-lg md:text-2xl text-foreground leading-tight">
            {treatment.name[language]}
          </span>
          <span className="font-body text-xs md:text-sm text-primary font-medium md:hidden">
            {treatment.price}
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span className="hidden md:block font-body text-base text-primary font-medium">
            {treatment.price}
          </span>
          <ChevronDown
            size={18}
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
                {treatment.description[language]}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Trattamenti = () => {
  const { t, language } = useLanguage();

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
            {language === 'IT' ? 'Torna alla Home' : 'Zurück zur Home'}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
               {language === 'IT' ? 'Listino Completo' : 'Komplette Preisliste'}
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              {t("treatments.title")} <span className="text-gold-gradient italic">{t("treatments.titleItalic")}</span>
            </h1>
            <div className="w-16 h-[1px] bg-gold-gradient" />
            <p className="mt-6 text-sm text-muted-foreground max-w-xl">
               {language === 'IT' 
                 ? 'Clicca su ogni trattamento per scoprire i dettagli e la descrizione completa.' 
                 : 'Klicken Sie auf jede Behandlung, um Details und die vollständige Beschreibung anzuzeigen.'}
            </p>
          </motion.div>

          {/* Laser Alessandrite special card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/laser-alessandrite"
              className="block border border-primary/30 rounded-2xl overflow-hidden bg-gradient-to-r from-card to-card hover:border-primary/50 transition-all duration-500 group"
            >
              <div className="p-6 md:p-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Sparkles size={22} className="text-primary" />
                  </div>
                  <div>
                    <span className="font-display text-2xl md:text-3xl text-foreground group-hover:text-gold-gradient transition-colors">
                      Laser Alessandrite
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      Candela GentlePro — {language === 'IT' ? 'Epilazione laser medicale · Prova gratuita' : 'Medizinische Laser-Haarentfernung · Kostenloser Test'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden sm:block font-body text-sm text-primary font-medium">{language === 'IT' ? 'Da € 40' : 'Ab € 40'}</span>
                  <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Regular treatments */}
          <div className="space-y-4">
            {treatmentsData.map((t, i) => (
              <TreatmentItem key={t.name.IT} treatment={t} index={i} />
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
              {t("cta.title")} {t("cta.titleItalic")}
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              {language === 'IT' ? 'Contattaci per un appuntamento personalizzato' : 'Kontaktieren Sie uns für einen persönlichen Termin'}
            </p>
            <a
              href={`https://wa.me/393296164667?text=${encodeURIComponent(t("nav.whatsappMessage"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-3.5 rounded-full text-xs tracking-[0.15em] uppercase font-medium hover:opacity-90 transition-opacity"
            >
              {t("nav.book")}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Trattamenti;
