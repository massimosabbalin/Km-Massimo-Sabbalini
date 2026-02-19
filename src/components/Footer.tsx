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
                { label: "Chi Siamo", href: "#about" },
                { label: "Trattamenti", href: "#trattamenti" },
                { label: "Le Nostre Sedi", href: "#sedi" },
                { label: "Contatti", href: "#contatti" },
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
              <p>Tel. 334 244 7375</p>
              <p>Tel. 342 056 0770</p>
              <a
                href="https://wa.me/393342447375"
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
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
