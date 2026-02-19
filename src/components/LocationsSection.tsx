import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    city: "Trento",
    address: "Via Roma 42, 38122 Trento (TN)",
    phone: "+39 342 0560770",
    hours: "Lun-Ven 9:00-18:00",
    mapQuery: "Via+Roma+42+Trento+TN",
    lat: 46.0667,
    lng: 11.1167,
  },
  {
    city: "Bolzano",
    address: "Piazza Walther 15, 39100 Bolzano (BZ)",
    phone: "+39 342 0560770",
    hours: "Mar-Gio 9:00-17:00",
    mapQuery: "Piazza+Walther+15+Bolzano+BZ",
    lat: 46.4983,
    lng: 11.3548,
  },
  {
    city: "Udine",
    address: "Via Galilei 42, 33010 Feletto U. (UD)",
    phone: "+39 342 0560770",
    hours: "Lun-Mer 10:00-18:00",
    mapQuery: "Via+Galilei+42+Feletto+Umberto+UD",
    lat: 46.0637,
    lng: 13.2315,
  },
  {
    city: "Saletto (PD)",
    address: "Via Vittorio Veneto 88, 35046 Saletto (PD)",
    phone: "+39 334 2447375",
    hours: "Lun-Ven 9:00-19:00",
    mapQuery: "Via+Vittorio+Veneto+88+Saletto+PD",
    lat: 45.2221,
    lng: 11.6142,
  },
  {
    city: "Riva del Garda",
    address: "Viale Rovereto 12, 38066 Riva del Garda (TN)",
    phone: "+39 342 0560770",
    hours: "Ven 10:00-16:00",
    mapQuery: "Viale+Rovereto+12+Riva+del+Garda+TN",
    lat: 45.8866,
    lng: 10.8413,
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
          {/* Location buttons */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-4"
          >
            {locations.map((loc, i) => (
              <button
                key={loc.city}
                onClick={() => setActiveLocation(i)}
                className={`w-full text-left p-6 border transition-all duration-500 group ${
                  activeLocation === i
                    ? "border-primary/40 bg-secondary"
                    : "border-border hover:border-primary/20"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className={`font-display text-2xl mb-2 transition-colors ${
                      activeLocation === i ? "text-gold-gradient" : "text-foreground"
                    }`}>
                      {loc.city}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                      <MapPin size={14} className="text-primary/60" />
                      {loc.address}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                      <Phone size={14} className="text-primary/60" />
                      {loc.phone}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock size={14} className="text-primary/60" />
                      {loc.hours}
                    </div>
                  </div>
                  <div className={`w-3 h-3 rotate-45 mt-2 transition-colors ${
                    activeLocation === i ? "bg-primary" : "bg-border"
                  }`} />
                </div>
              </button>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="sticky top-32"
          >
            <div className="relative aspect-[4/3] border border-border overflow-hidden">
              <iframe
                key={activeLocation}
                title={`Mappa ${active.city}`}
                src={`https://www.google.com/maps?q=${active.mapQuery}&output=embed`}
                className="w-full h-full border-0 grayscale contrast-125 opacity-80"
                loading="lazy"
                allowFullScreen
              />
              <div className="absolute inset-0 pointer-events-none border border-primary/10" />
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
