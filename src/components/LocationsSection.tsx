import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone } from "lucide-react";

const locations = [
  {
    city: "Bolzano (BZ)",
    address: "KM Esthetic Clinic - Via Cassa di Risparmio 8, 39100 Bolzano (BZ)",
    phone: "+39 329 6164667",
    mapQuery: "Via+Cassa+di+Risparmio+8+Bolzano+BZ",
  },
  {
    city: "Trento (TN)",
    address: "Via Malfatti 21, 38122 Trento (TN)",
    phone: "+39 329 6164667",
    mapQuery: "Via+Malfatti+21+Trento+TN",
  },
  {
    city: "Merano (BZ)",
    address: "Via Luis Zuegg 24/A, 39012 Merano (BZ)",
    phone: "+39 329 6164667",
    mapQuery: "Via+Luis+Zuegg+24/A+Merano+BZ",
  },
  {
    city: "Adria (RO)",
    address: "Piazza Cavour 8, 45011 Adria (RO)",
    phone: "+39 329 6164667",
    mapQuery: "Piazza+Cavour+8+Adria+RO",
  },
  {
    city: "Arco (TN)",
    address: "Via Linfano 52, 38062 Arco (TN)",
    phone: "+39 329 6164667",
    mapQuery: "Via+Linfano+52+Arco+TN",
  },
  {
    city: "Saletto (PD)",
    address: "Via Roma 28b, 35046 Saletto (Borgo Veneto) PD",
    phone: "+39 329 6164667",
    mapQuery: "Via+Roma+28b+Saletto+PD",
  },
  {
    city: "Cittadella (PD)",
    address: "Via Postunia di Levante 8, 35013 Cittadella (PD)",
    phone: "+39 329 6164667",
    mapQuery: "Via+Postunia+di+Levante+8+Cittadella+PD",
  },
];

const LocationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeLocation, setActiveLocation] = useState(0);
  const active = locations[activeLocation];

  return (
    <section id="sedi" className="py-32 relative bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Le Nostre Sedi
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Dove <span className="text-gold-gradient italic">Trovarci</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold-gradient mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-4"
          >
            {locations.map((loc, i) => (
              <button
                key={loc.city}
                onClick={() => setActiveLocation(i)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 group ${activeLocation === i
                  ? "border-primary/40 bg-secondary"
                  : "border-border hover:border-primary/20"
                  }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className={`font-display text-2xl mb-2 transition-colors ${activeLocation === i ? "text-gold-gradient" : "text-foreground"
                      }`}>
                      {loc.city}
                    </h3>
                    <a
                      href={`https://www.google.com/maps/search/${loc.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground text-sm mb-1 hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MapPin size={14} className="text-primary/60" />
                      {loc.address}
                    </a>
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone size={14} className="text-primary/60" />
                      {loc.phone}
                    </a>
                  </div>
                  <div className={`w-3 h-3 rounded-full mt-2 transition-colors ${activeLocation === i ? "bg-primary" : "bg-border"
                    }`} />
                </div>
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="sticky top-32"
          >
            <div className="relative aspect-[4/3] rounded-2xl border border-border overflow-hidden">
              <iframe
                key={activeLocation}
                title={`Mappa ${active.city}`}
                src={`https://www.google.com/maps?q=${active.mapQuery}&output=embed`}
                className="w-full h-full border-0 grayscale contrast-125 opacity-80"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href={`https://www.google.com/maps/search/${active.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-[0.15em] uppercase text-primary hover:text-foreground transition-colors"
              >
                Apri in Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
