import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="Dott. Massimo Sabbalini" className="h-14 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Medicina e Chirurgia Estetica d'eccellenza.
              <br />
              Dott. Massimo Sabbalini
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Link Rapidi
            </h4>
            <div className="space-y-3">
              {[
                { label: "Chi Siamo", href: "/#about" },
                { label: "Trattamenti", href: "/trattamenti" },
                { label: "Le Nostre Sedi", href: "/#sedi" },
                { label: "Contatti", href: "https://wa.me/393296164667?text=Buongiorno,%20vorrei%20delle%20info%20sui%20vostri%20trattamenti%20" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Contatti
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:+393296164667" className="block hover:text-primary transition-colors">
                Tel. 329 616 4667
              </a>
              <div className="group flex items-center gap-2">
                <button
                  onClick={() => {
                    const m = "mail" + "to:";
                    const e = "sabbalinimassimo" + "@" + "proton.me";
                    window.location.href = m + e;
                  }}
                  className="hover:text-primary transition-colors text-left truncate"
                  title="Invia Email"
                >
                  sabbalinimassimo@proton.me
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("sabbalinimassimo@proton.me");
                    alert("Email copiata negli appunti");
                  }}
                  className="p-1.5 rounded-md hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all opacity-0 group-hover:opacity-100"
                  title="Copia Email"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                </button>
              </div>
              <a
                href="https://wa.me/393296164667?text=Buongiorno,%20vorrei%20delle%20info%20sui%20vostri%20trattamenti%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:text-foreground transition-colors"
              >
                WhatsApp →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dott. Massimo Sabbalini. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
