import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="mb-6 text-7xl md:text-9xl font-display text-gold-gradient italic opacity-50">404</h1>
          <p className="mb-8 text-xl md:text-2xl font-display text-foreground">{t("notFound.title")}</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-8 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-opacity"
          >
            {t("notFound.returnHome")}
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;
