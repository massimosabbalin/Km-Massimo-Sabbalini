import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
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
    name: "Filler Labbra 1 Fiala",
    price: "€ 290",
    description: "Trattamento d'eccellenza con acido ialuronico per ridefinire volume e contorno labiale. L'utilizzo di una fiala intera permette di correggere asimmetrie e donare un'idratazione profonda, garantendo un risultato armonioso che rispetta le proporzioni naturali del tuo volto.",
    image: baFillerLabbra,
  },
  {
    name: "Filler Labbra ½ Fiala",
    price: "€ 180",
    description: "Ideale per chi desidera un tocco di freschezza estremamente naturale. Questo trattamento mirato permette di idratare e definire leggermente il contorno senza stravolgere i volumi, perfetto per un primo approccio alla medicina estetica labiale.",
    image: baFillerLabbra,
  },
  {
    name: "Botox Completo",
    price: "€ 400",
    description: "Protocollo avanzato per la distensione delle rughe d'espressione. Agisce su fronte, glabella e contorno occhi per eliminare i segni della stanchezza e dello stress, restituendo uno sguardo fresco e riposato senza alterare la naturale espressività.",
    image: baMandibolare,
  },
  {
    name: "Botox Fronte",
    price: "€ 300",
    description: "Trattamento specifico per le rughe orizzontali della fronte. Attraverso micro-iniezioni di precisione, la pelle appare visibilmente più distesa e giovane, regalando un effetto refresh immediato al terzo superiore del viso.",
    image: baMandibolare,
  },
  {
    name: "Botox Contorno Occhi",
    price: "€ 250",
    description: "Mirato all'eliminazione delle cosiddette 'zampe di gallina'. Il trattamento distende la zona perioculare, rendendo lo sguardo più aperto e luminoso, con un impatto significativo sulla freschezza complessiva del volto.",
    image: baMandibolare,
  },
  {
    name: "Botox Solo Glabellare",
    price: "€ 180",
    description: "Dedicato alla correzione delle rughe tra le sopracciglia che conferiscono un aspetto corrucciato. Il trattamento rilassa i muscoli responsabili della contrazione, donando un'espressione più serena e distesa.",
    image: baMandibolare,
  },
  {
    name: "Solco Nasale Labiale",
    price: "€ 300",
    description: "Riempimento mirato dei solchi che partono dal naso verso i lati della bocca. Grazie all'utilizzo di filler biocompatibili, si attenua la pesantezza del viso, ripristinando la compattezza e la giovinezza della zona medio-facciale.",
    image: baFillerLabbra,
  },
  {
    name: "Rinofiller",
    price: "€ 400",
    description: "Rimodellamento non chirurgico del profilo nasale. Permette di correggere piccoli difetti, sollevare la punta o regolarizzare il dorso in pochi minuti, ottenendo un'armonia del volto immediata senza ricorrere alla chirurgia.",
    image: baRinofiller,
  },
  {
    name: "Zigomi",
    price: "€ 390",
    description: "Ripristino dei volumi della regione malare per un effetto lifting naturale. Il trattamento scolpisce il volto e ridefinisce i punti luce, restituendo struttura e giovinezza a un viso che ha perso la sua naturale proiezione.",
    image: baZigomi,
  },
  {
    name: "Filler Mento",
    price: "€ 290",
    description: "Trattamento di profiloplastica non chirurgica. Proiettando e definendo la zona mentoniera, si migliora l'equilibrio del profilo e si harmonizza il rapporto tra naso, labbra e mento per un viso più proporzionato.",
    image: baMento,
  },
  {
    name: "Definizione Mandibolare",
    price: "€ 350",
    description: "Scolpisce e ridefinisce l'angolo e la linea mandibolare. Questo trattamento è molto richiesto per conferire forza al profilo e correggere i cedimenti tissutali della parte inferiore del viso, donando un aspetto più tonico e giovanile.",
    image: baMandibolare,
  },
  {
    name: "Occhiaie (Tear Trough)",
    price: "€ 350",
    description: "Correzione specialistica dell'infossamento sotto gli occhi. L'utilizzo di filler specifici permette di eliminare l'ombra scura del solco lacrimale, cancellando istantaneamente l'apparenza stanca e donando nuova vitalità allo sguardo.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Biorivitalizzazione Viso",
    price: "€ 250",
    description: "Vero e proprio 'booster' di giovinezza. Un cocktail di vitamine, minerali e acido ialuronico che bioristruttura la pelle dall'interno, restituendo elasticità, compattezza e una luminosità naturale straordinaria.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Biorivitalizzazione Viso + Collo",
    price: "€ 400",
    description: "Protocollo rigenerante esteso che non trascura una delle zone più delicate come il collo. Stimola la produzione di nuovo collagene ed elastina, prevenendo la lassità cutanea e migliorando visibilmente la trama della pelle.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Prodotto Sgonfia/Drena Occhiaie",
    price: "€ 100",
    description: "Trattamento specifico per chi soffre di borse e gonfiore perioculare. Grazie a principi attivi drenanti e antinfiammatori, si favorisce lo sgonfiamento della zona, rendendo il contorno occhi riposato e levigato.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Ringiovanimento Viso Laser",
    price: "Su richiesta",
    description: "Soluzioni laser personalizzate (ablative o non ablative) per trattare crono e foto-invecchiamento. Leviga la superficie cutanea, elimina le rughe sottili e riduce drasticamente la dimensione dei pori per una pelle di porcellana.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Trattamento Macchie e Acne",
    price: "Su richiesta",
    description: "Intervento medico mirato su discromie e cicatrici. Combinando diverse tecnologie, si agisce sulla radice dell'inestetismo per uniformare il colorito e levigare le irregolarità causate dall'acne o dal sole.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Radiofrequenza Medica",
    price: "Su richiesta",
    description: "Lifting non chirurgico che sfrutta l'energia termica per contrarre le fibre di collagene esistenti e stimolarne la sintesi di nuove. Risultato? Una pelle visibilmente più soda, densa e compatta sin dalle prime sedute.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Blefaroplastica (Chirurgica / Non)",
    price: "Su richiesta",
    description: "Tecniche avanzate per eliminare l'eccesso cutaneo delle palpebre che appesantisce lo sguardo. È possibile intervenire con il laser (Plexr) per lievi cedimenti o con approccio chirurgico per risultati definitivi e trasformativi.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Spectra Hollywood Peeling",
    price: "Su richiesta",
    description: "Il trattamento 'Red Carpet' per eccellenza. Utilizza una lozione al carbone attivato e laser per esfoliare la pelle, ridurre le imperfezioni e stimolare il collagene, lasciando il viso radioso e pronto per ogni occasione importante.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Lifting Viso 4D",
    price: "Su richiesta",
    description: "Approccio olistico che lavora su quattro dimensioni: volume, tono, superficie e struttura profonda. Utilizza tecnologie combinate per un ringiovanimento globale che rispetta l'anatomia dinamica del volto.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Fili di Trazione (Lifting con Fili)",
    price: "Su richiesta",
    description: "Consente di sollevare i tessuti rilassati di guance, collo e sopracciglia senza bisturi. I fili in materiale biocompatibile e riassorbibile anchorano i tessuti e al contempo stimolano una potente rigenerazione naturale.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Lipofiller Viso e Volume",
    price: "Su richiesta",
    description: "L'utilizzo del proprio tessuto adiposo purificato per ripristinare i volumi del volto in modo permanente. È un trattamento rigenerativo completo che, oltre al volume, apporta cellule staminali che migliorano la qualità della pelle.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Ultraformer III (Ultrasuoni Focalizzati)",
    price: "Su richiesta",
    description: "Il gold standard per il lifting non invasivo. Gli ultrasuoni focalizzati (HIFU) agiscono sullo strato SMAS (lo stesso su cui interviene il chirurgo) per sollevare e compattare i tessuti con risultati che durano nel tempo.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Cat Eye / Foxy Eye",
    price: "Su richiesta",
    description: "Una tecnica estetica di tendenza che mira a sollevare lateralmente la coda del sopracciglio e l'angolo esterno dell'occhio. Conferisce allo sguardo un'impronta più energica, seducente e marcatamente 'liftata'.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Liposuzione e Liposcultura HD",
    price: "Su richiesta",
    description: "Rimodellamento chirurgico di alta definizione per eliminare gli accumuli di grasso ostinato. La tecnica permette di scolpire la silhouette, evidenziando le linee naturali del corpo e garantendo risultati precisi e armoniosi.",
    image: baMandibolare,
  },
  {
    name: "Laser Zerona Corpo",
    price: "Su richiesta",
    description: "Innovativo laser a freddo approvato FDA che liquida il grasso all'interno delle cellule adipose. Indolore e non invasivo, è il trattamento d'elezione per ridurre le circonferenze e migliorare drasticamente la cellulite.",
    image: baMandibolare,
  },
  {
    name: "CM Slim (Tonificazione Muscolare)",
    price: "Su richiesta",
    description: "Equivale a migliaia di addominali o squat in una sola seduta. Utilizza onde elettromagnetiche per indurre contrazioni involontarie profonde, aumentando la massa muscolare e accelerando il metabolismo dei grassi.",
    image: baMandibolare,
  },
  {
    name: "Carbossiterapia Medica",
    price: "Su richiesta",
    description: "L'iniezione sottocutanea di CO2 medicale è fondamentale per ossigenare i tessuti, drenare i liquidi in eccesso e rompere le membrane delle cellule adipose, risultando efficacissima contro cellulite e gonfiore.",
    image: baMandibolare,
  },
  {
    name: "Mesoterapia Drenante/Lipolitica",
    price: "Su richiesta",
    description: "Iniezione di cocktail farmacologici mirati nel derma superficiale. Agisce localmente per sciogliere il grasso, migliorare la circolazione linfatica e ridurre l'effetto 'buccia d'arancia' con estrema precisione.",
    image: baMandibolare,
  },
  {
    name: "Rimozione Tatuaggi Q-Switched",
    price: "Su richiesta",
    description: "Sistema laser specialistico che frammenta il pigmento del tatuaggio in particelle microscopiche, permettendo al corpo di eliminarle naturalmente. Efficace anche su colori difficili, con minimo rischio cicatriziale.",
    image: baMandibolare,
  },
  {
    name: "Medicina Rigenerativa (PRP / Ozono)",
    price: "Su richiesta",
    description: "Protocolli biologici che utilizzano il potenziale del corpo stesso (fattori di crescita e ossigeno-ozono) per riparare i tessuti, combattere l'infiammazione cronica e invertire i processi di invecchiamento cellulare.",
    image: baBiorivitalizzazione,
  },
  {
    name: "Laser Capillari e Vascolare",
    price: "Su richiesta",
    description: "Trattamento di precisione per teleangectasie, angiomi e capillari delle gambe o del viso. Il laser colpisce selettivamente il vaso sanguigno facendolo riassorbire, senza danneggiare la pelle circostante.",
    image: baMandibolare,
  },
  {
    name: "Rimodellamento Glutei (Filler/Lipo)",
    price: "Su richiesta",
    description: "Per chi desidera glutei più alti, pieni e sodi. Attraverso l'uso di acido ialuronico specifico o il trasferimento di grasso autologo, si ottiene una proiezione ideale e una silhouette a clessidra impeccabile.",
    image: baMandibolare,
  },
  {
    name: "Chirurgia Dermatologica Estetica",
    price: "Su richiesta",
    description: "Rimozione professionale di nei, cheratosi, fibromi e altre formazioni cutanee benigne. L'approccio combina rigore oncologico e attenzione estetica per minimizzare ogni traccia dell'intervento sulla pelle.",
    image: baMandibolare,
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
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 flex-1 min-w-0 pr-4">
          <span className="font-display text-lg md:text-2xl text-foreground leading-tight">{treatment.name}</span>
          <span className="font-body text-xs md:text-sm text-primary font-medium md:hidden">{treatment.price}</span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span className="hidden md:block font-body text-base text-primary font-medium">{treatment.price}</span>
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
                {treatment.description}
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
              Clicca su ogni trattamento per scoprire i dettagli e la descrizione completa.
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
                      Candela GentlePro — Epilazione laser medicale · Prova gratuita disponibile
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden sm:block font-body text-sm text-primary font-medium">Da € 40</span>
                  <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Regular treatments */}
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
              href="https://wa.me/393296164667?text=Buongiorno,%20vorrei%20delle%20info%20sui%20vostri%20trattamenti%20"
              target="_blank"
              rel="noopener noreferrer"
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
