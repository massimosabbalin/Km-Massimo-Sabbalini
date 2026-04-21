import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

const resultsData = [
  { id: 1, src: '/risultati/1.png', alt: 'Trattamento occhiaie prima e dopo - Risultato naturale e luminoso Dott. Massimo Sabbalini', title: 'Correzione Occhiaie' },
  { id: 2, src: '/risultati/2.png', alt: 'Rinofiller profilo sinistro prima e dopo - Armonizzazione del naso senza chirurgia Dott. Massimo Sabbalini', title: 'Rinofiller Profilo Sx' },
  { id: 3, src: '/risultati/3.png', alt: 'Filler labbra prima e dopo - Definizione naturale Dott. Massimo Sabbalini', title: 'Filler Labbra Definizione' },
  { id: 4, src: '/risultati/4.png', alt: 'Filler labbra prima e dopo - Volume naturale e definizione Dott. Massimo Sabbalini', title: 'Filler Labbra Naturale' },
  { id: 5, src: '/risultati/5.png', alt: 'Filler labbra prima e dopo - Idratazione e volume Dott. Massimo Sabbalini', title: 'Filler Labbra Idratazione' },
  { id: 6, src: '/risultati/6.png', alt: 'Filler labbra prima e dopo - Effetto rimpolpante naturale', title: 'Filler Labbra Rimpolpante' },
  { id: 7, src: '/risultati/7.png', alt: 'Filler labbra con sorriso prima e dopo - Dott. Massimo Sabbalini', title: 'Filler Labbra in Sorriso' },
  { id: 8, src: '/risultati/8.png', alt: 'Filler labbra prima e dopo - Correzione asimmetrie Dott. Massimo Sabbalini', title: 'Filler Labbra Correzione' },
  { id: 9, src: '/risultati/9.png', alt: 'Filler labbra prima e dopo - Risultato estetico armonico Dott. Massimo Sabbalini', title: 'Filler Labbra Armonico' },
  { id: 10, src: '/risultati/10.png', alt: 'Rinofiller profilo donna prima e dopo - Proiezione naturale della punta Dott. Massimo Sabbalini', title: 'Rinofiller Donna Profilo' },
  { id: 11, src: '/risultati/11.png', alt: 'Trattamento rimodellamento glutei prima e dopo - Medicina estetica avanzata Dott. Massimo Sabbalini', title: 'Rimodellamento Glutei' },
  { id: 12, src: '/risultati/12.png', alt: 'Trattamento botox fronte prima e dopo - Riduzione rughe d\'espressione Dott. Massimo Sabbalini', title: 'Botox Fronte' },
  { id: 13, src: '/risultati/13.png', alt: 'Rinofiller e armonizzazione volto donna profilo prima e dopo Dott. Massimo Sabbalini', title: 'Armonizzazione Profilo' },
  { id: 14, src: '/risultati/14.png', alt: 'Rinofiller uomo profilo prima e dopo - Risultato maschile e naturale Dott. Massimo Sabbalini', title: 'Rinofiller Uomo' },
  { id: 15, src: '/risultati/15.png', alt: 'Trattamento occhiaie e sguardo stanco prima e dopo Dott. Massimo Sabbalini', title: 'Correzione Sguardo' },
  { id: 17, src: '/risultati/17.png', alt: 'Trattamento ringiovanimento perioculare prima e dopo Dott. Massimo Sabbalini', title: 'Ringiovanimento Occhi' },
  { id: 18, src: '/risultati/18.png', alt: 'Rinofiller uomo correzione profilo nasale prima e dopo Dott. Massimo Sabbalini', title: 'Profilo Nasale Uomo' },
  { id: 19, src: '/risultati/19.png', alt: 'Filler labbra e armonizzazione profilo prima e dopo Dott. Massimo Sabbalini', title: 'Armonizzazione Profilo Labbra' },
  { id: 20, src: '/risultati/20.png', alt: 'Trattamento medicina estetica prima e dopo Dott. Massimo Sabbalini', title: 'Risultato Trattamento' },
];

const Risultati = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = language === "IT" 
      ? "Risultati Trattamenti Prima e Dopo | Dott. Massimo Sabbalini" 
      : "Behandlungsergebnisse Vorher und Nachher | Dr. Massimo Sabbalini";
  }, [language]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
                {t("results.subtitle")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              {t("results.title")} <span className="font-medium text-primary">{t("results.titleAccent")}</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("results.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resultsData.map((result) => (
              <Dialog key={result.id}>
                <DialogTrigger asChild>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer group shadow-md hover:shadow-lg transition-all bg-muted/30 border border-border">
                    <img 
                      src={result.src} 
                      alt={result.alt} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                      <span className="text-white bg-black/50 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {t("results.enlarge")}
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0 flex justify-center items-center">
                  <DialogTitle className="sr-only">{result.title}</DialogTitle>
                  <img 
                    src={result.src} 
                    alt={result.alt} 
                    className="w-auto h-auto max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Risultati;
