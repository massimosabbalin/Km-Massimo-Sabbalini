import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LaserAlessandrite = () => {
  return (
    <main className="min-h-screen bg-[#131313] text-[#e5e2e1] font-body-md overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <header className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-40 grayscale-[20%]" 
            alt="luxury medical clinic interior" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKIuioTR-5AnJ1LqXd4tbNcaZfONuwl7Pvn_KQgs-4zHr2n3M495sNO_nOR3zTeYk7uUK1wtT6xWckgMAblRfNJbaBD1Tn5UowK1y0YFtPIc8TmYQ_gG7LeR4iC2Vtgy05YQ8MpPLgTxbjy22hrAhecSXQ5QtrPRNfNFg2E4d5mnnQDk2DkdKHsc1iEZl-YI3c8cYWKnIMHA90lYQHwNx9MOTn8vwclfJ3oLj1a47-Yj0jwqQFn_6nkqhJKsHHntBbNrZs_l1_nJ-5" 
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#131313] via-[#131313]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20 md:pt-20">
          <div className="max-w-3xl">
            <Link
              to="/trattamenti"
              className="inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.15em] uppercase text-primary mb-6 md:mb-8 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft size={12} />
              Tutti i Trattamenti
            </Link>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-label-caps text-[10px] md:text-xs text-primary mb-4 md:mb-6 block"
            >
              DOTT. MASSIMO SABBALINI — MEDICINA E CHIRURGIA ESTETICA
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display-lg text-3xl sm:text-4xl md:text-display-lg text-[#e5e2e1] mb-6 md:mb-8 leading-tight"
            >
              Il Gold Standard dell'Epilazione Medica: <span className="text-[#d4af37] italic">Laser Alessandrite</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-body-lg text-sm md:text-body-lg text-[#d0c5af] mb-8 md:mb-10 max-w-xl leading-relaxed"
            >
              L'eccellenza tecnologica di Candela GentlePro per risultati definitivi sulla pelle chiara. Precisione clinica e comfort superiore.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6"
            >
              <a className="bg-primary text-[#3c2f00] px-8 md:px-10 py-4 font-label-caps text-xs md:text-sm text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all" href="#pricing">
                SCOPRI I PREZZI
              </a>
              <a className="border border-[#4d4635] text-[#e5e2e1] px-8 md:px-10 py-4 font-label-caps text-xs md:text-sm text-center hover:bg-[#2a2a2a] transition-all" href="#technology">
                TECNOLOGIA
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Section 1: Tecnologia Candela */}
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto" id="technology">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative group order-2 md:order-1">
            <div className="absolute -inset-2 md:-inset-4 border border-[#2A2A2A] translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <img 
              className="relative z-10 w-full h-[350px] md:h-[600px] object-cover grayscale-[30%]" 
              alt="professional medical laser device" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQjX1x53vFAL-fVL_avzOmjVjmwK2LkcMRMvTbap8MPUiLbtXk17uA7flfLtv_vsVbfGGAzVrrXWMRLm_yqJbjLhcz5fBb5O0ExgxhBIMWZB2enD3XfKTqBB_89cNuiiEQ0-hZK-vhh46XRwJw2hqGgJ0IWhyQKKgvPYiLyqbr5QH2_AGG-Ac9bANhIPN2lTsriO8wltyZvSrWjT8g32dlFcfW2A6y3mldcJMgC4OjZrpp1wQVOKhgOFH_dmjU1ZJJHIP_PrmkLFLE" 
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="font-label-caps text-[#d4af37] mb-3 md:mb-4 block uppercase tracking-widest text-[10px] md:text-xs">Medical Precision</span>
            <h2 className="font-headline-xl text-3xl md:text-headline-xl text-[#e5e2e1] mb-6 md:mb-8">Tecnologia Candela GentlePro</h2>
            <div className="space-y-4 md:space-y-6 font-body-lg text-sm md:text-body-lg text-[#d0c5af] leading-relaxed">
              <p>
                Il Laser Alessandrite di Candela rappresenta l'apice dell'innovazione medica nel campo dell'epilazione. A differenza dei sistemi a diodo commerciali, la lunghezza d'onda di 755nm è specificamente ottimizzata per il massimo assorbimento della melanina.
              </p>
              <p>
                Questa tecnologia è il trattamento d'elezione per i fototipi chiari, garantendo una rimozione dei peli più rapida e profonda, agendo direttamente sul bulbo pilifero senza danneggiare i tessuti circostanti.
              </p>
              <ul className="space-y-3 md:space-y-4 mt-6 md:mt-8">
                {[
                  "Efficacia superiore su peli sottili e chiari",
                  "Approvato FDA per la sicurezza clinica",
                  "Riduzione permanente dei peli in meno sedute"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 md:gap-4">
                    <span className="material-symbols-outlined text-[#d4af37] text-xl">check_circle</span>
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Perché scegliere l'Alessandrite? */}
      <section className="py-20 md:py-32 bg-[#0e0e0e]" id="benefits">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <div className="mb-12 md:mb-20">
            <h2 className="font-headline-xl text-3xl md:text-headline-xl text-[#e5e2e1] mb-4">Perché scegliere l'Alessandrite?</h2>
            <div className="w-16 md:w-24 h-px bg-[#f2ca50] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: "bolt", title: "Massima Efficacia", desc: "Risultati visibili fin dalla prima seduta, riducendo drasticamente il numero totale." },
              { icon: "ac_unit", title: "Comfort", desc: "Sistema di raffreddamento criogenico DCD™ integrato per un'esperienza quasi indolore." },
              { icon: "verified_user", title: "Sicurezza", desc: "Protocolli medici rigorosi e supervisione costante dello specialista." },
              { icon: "target", title: "Precisione", desc: "Trattamento mirato che non interferisce con la pelle circostante." }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-[#131313] p-8 md:p-10 border border-[#2a2a2a] hover:border-[#f2ca50]/30 transition-all duration-500 gold-shimmer group text-left sm:text-center">
                <div className="w-12 h-12 rounded-full border border-[#d4af37] flex items-center justify-center mb-6 mx-auto sm:mx-auto group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[#d4af37]">{benefit.icon}</span>
                </div>
                <h3 className="font-headline-md text-[#e5e2e1] mb-3 text-xl md:text-2xl">{benefit.title}</h3>
                <p className="font-body-md text-xs md:text-sm text-[#d0c5af] leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Come funziona Step by Step */}
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto" id="procedure">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="font-headline-xl text-3xl md:text-headline-xl text-[#e5e2e1] mb-8 md:mb-12">Il Percorso Clinico</h2>
            <div className="space-y-10 md:space-y-16">
              {[
                { step: "01", title: "Consulenza Iniziale", desc: "Analisi del fototipo e della tipologia di pelo per calibrare i parametri del laser." },
                { step: "02", title: "Preparazione e Test", desc: "Detersione della zona e test spot per assicurare la massima tollerabilità cutanea." },
                { step: "03", title: "La Seduta", desc: "Applicazione del laser con impulsi precisi assistiti dal raffreddamento criogenico." },
                { step: "04", title: "Post-Trattamento", desc: "Applicazione di lozioni lenitive e pianificazione del follow-up personalizzato." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 md:gap-8 group">
                  <div className="flex-shrink-0 text-[#d4af37] font-serif text-3xl md:text-4xl opacity-50 group-hover:opacity-100 transition-opacity">{item.step}</div>
                  <div>
                    <h4 className="font-headline-md text-[#e5e2e1] text-lg md:text-xl mb-2">{item.title}</h4>
                    <p className="font-body-md text-xs md:text-sm text-[#d0c5af] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center mt-10 md:mt-0">
            <div className="w-full h-full border border-[#2a2a2a] absolute inset-0 rotate-2 scale-95 md:rotate-3"></div>
            <img 
              className="w-full h-[350px] md:h-[700px] object-cover relative z-10 rounded-sm" 
              alt="aesthetic doctor consulting" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZSHKSskDBP8cqHfA9Vl4Ej1eSGa3h62aLNDUZSzUks8luS2xQcuc2JXLP4afBHTbQDXzc7YeXGWoLfagf0bqzqphqEbgviRyLi_ViFS3PKXrzPu1Uichy5kKoVcjsAMez-Lk5LqGxL0T7c15iClXng3vBwbAuh8I3Ztl0PLVyyFton79YGgiHY9M7KVIlaXVG5VXkRTKF6ipLTr5AlzesaYw4h7rQGJfKb1vyb8-qGdwD1-66M1IgL6VgqqsA0jyEoVj6Srm_z8do" 
            />
          </div>
        </div>
      </section>

      {/* Section 4: Listino Prezzi */}
      <section className="py-20 md:py-32 bg-[#1b1b1c]" id="pricing">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-20">
            <span className="font-label-caps text-[#d4af37] mb-3 block tracking-widest uppercase text-[10px] md:text-xs">Investimento nella tua pelle</span>
            <h2 className="font-headline-xl text-3xl md:text-headline-xl text-[#e5e2e1] mb-4">Listino Trattamenti</h2>
            <p className="font-body-md text-sm md:text-base text-[#d0c5af]">Protocolli personalizzati basati su eccellenza medica.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2a2a2a] border border-[#2a2a2a]">
            {[
              { 
                name: "Zona Piccola", 
                desc: "Viso, mani, orecchie o piccole aree specifiche.", 
                prices: [{ s: "1 seduta", p: "€40" }, { s: "2 sedute", p: "€70" }, { s: "4 sedute", p: "€125", highlight: true }] 
              },
              { 
                name: "Zona Media", 
                desc: "Ascelle, inguine parziale, avambracci o collo.", 
                prices: [{ s: "1 seduta", p: "€95" }, { s: "2 sedute", p: "€160" }, { s: "4 sedute", p: "€310", highlight: true }] 
              },
              { 
                name: "Zona Grande", 
                desc: "Gambe intere, braccia complete, schiena o petto.", 
                prices: [{ s: "1 seduta", p: "€150" }, { s: "2 sedute", p: "€270" }, { s: "4 sedute", p: "€520", highlight: true }] 
              }
            ].map((zone, idx) => (
              <div key={idx} className="bg-[#131313] p-8 md:p-12 hover:bg-[#202020] transition-colors duration-500">
                <h3 className="font-headline-md text-xl md:text-2xl text-[#e5e2e1] mb-6 md:mb-8">{zone.name}</h3>
                <p className="font-body-md text-xs md:text-sm text-[#d0c5af] mb-10 md:min-h-[48px] leading-relaxed">{zone.desc}</p>
                <div className="space-y-4 md:space-y-6">
                  {zone.prices.map((price, pidx) => (
                    <div key={pidx} className={`flex justify-between items-center pb-4 border-b border-[#2a2a2a] ${price.highlight ? 'text-[#f2ca50]' : ''}`}>
                      <span className="font-label-caps uppercase tracking-wider text-[10px] md:text-xs">{price.s}</span>
                      <span className="font-display text-xl md:text-2xl font-medium">{price.p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/#contatti"
              className="inline-flex items-center gap-3 border border-primary/50 text-[#e5e2e1] px-10 py-5 rounded-full text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary/10 transition-all duration-300"
            >
              Maggiori Informazioni
            </a>
            <a
              href="https://wa.me/393296164667?text=Buongiorno,%20vorrei%20delle%20info%20sul%20trattamento%20Laser%20Alessandrite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold-gradient text-[#131313] px-10 py-5 rounded-full text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Prenota su WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LaserAlessandrite;
