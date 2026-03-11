import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md"
                >
                    <div className="bg-card/95 backdrop-blur-xl border border-primary/20 p-6 rounded-2xl shadow-2xl shadow-black/50">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-display text-xl text-gold-gradient italic">Informativa sui Cookie</h3>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                            Utilizziamo cookie propri e di terzi (Meta, Google, TikTok) per migliorare la tua esperienza di navigazione,
                            analizzare il traffico e offrirti contenuti pubblicitari personalizzati.
                            Consultando la nostra <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link> puoi scoprire di più o negare il consenso.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={acceptCookies}
                                className="flex-1 bg-gold-gradient text-primary-foreground px-6 py-2.5 rounded-full text-xs tracking-wider uppercase font-medium hover:opacity-90 transition-opacity"
                            >
                                Accetta Tutto
                            </button>
                            <button
                                onClick={declineCookies}
                                className="flex-1 border border-primary/20 text-foreground px-6 py-2.5 rounded-full text-xs tracking-wider uppercase font-medium hover:bg-primary/5 transition-colors"
                            >
                                Solo Necessari
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBar;
