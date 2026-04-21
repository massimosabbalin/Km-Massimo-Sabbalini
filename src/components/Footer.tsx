import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinksIdx = [
    { label: t("about.subtitle"), href: "/#about" },
    { label: t("nav.treatments"), href: "/trattamenti" },
    { label: t("nav.locations"), href: "/#sedi" },
    { label: t("nav.contact"), href: `https://wa.me/393296164667?text=${encodeURIComponent(t("nav.whatsappMessage"))}` },
  ];

  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="Dott. Massimo Sabbalini" className="h-14 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.medicalExcellence")}
              <br />
              Dott. Massimo Sabbalini
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              {t("footer.quickLinks")}
            </h4>
            <div className="space-y-3">
              {footerLinksIdx.map((item) => (
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
              {t("footer.contacts")}
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
                    alert(t("footer.copyEmail"));
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
                href={`https://wa.me/393296164667?text=${encodeURIComponent(t("nav.whatsappMessage"))}`}
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
            © {new Date().getFullYear()} Dott. Massimo Sabbalini. {t("footer.rights")}
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
