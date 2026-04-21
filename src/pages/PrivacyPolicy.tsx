import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <section className="pt-40 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-display text-4xl md:text-6xl text-foreground mb-8 text-center uppercase tracking-wider">
                            {t("privacy.title")} <span className="text-gold-gradient italic">{t("privacy.titleItalic")}</span>
                        </h1>
                        <div className="w-24 h-[1px] bg-gold-gradient mx-auto mb-16" />

                        <div className="prose prose-invert max-w-none space-y-12 text-muted-foreground leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">{t("privacy.section1Title")}</h2>
                                <p>{t("privacy.section1Content")}</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">{t("privacy.section2Title")}</h2>
                                <p>{t("privacy.section2Content")}</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">{t("privacy.section3Title")}</h2>
                                <p>{t("privacy.section3Content")}</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>
                                        <strong className="text-foreground">{t("privacy.metaAds").split(":")[0]}:</strong> {t("privacy.metaAds").split(":")[1]}
                                    </li>
                                    <li>
                                        <strong className="text-foreground">{t("privacy.googleAds").split(":")[0]}:</strong> {t("privacy.googleAds").split(":")[1]}
                                    </li>
                                    <li>
                                        <strong className="text-foreground">{t("privacy.tiktokAds").split(":")[0]}:</strong> {t("privacy.tiktokAds").split(":")[1]}
                                    </li>
                                    <li>
                                        <strong className="text-foreground">{t("privacy.emailMarketing").split(":")[0]}:</strong> {t("privacy.emailMarketing").split(":")[1]}
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">{t("privacy.section4Title")}</h2>
                                <p>{t("privacy.section4Content")}</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">{t("privacy.section5Title")}</h2>
                                <p>{t("privacy.section5Content")}</p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default PrivacyPolicy;
