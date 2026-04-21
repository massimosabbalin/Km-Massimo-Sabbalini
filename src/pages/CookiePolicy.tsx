import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CookiePolicy = () => {
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
                            {t("cookiePolicy.title")} <span className="text-gold-gradient italic">{t("cookiePolicy.titleItalic")}</span>
                        </h1>
                        <div className="w-24 h-[1px] bg-gold-gradient mx-auto mb-16" />

                        <div className="prose prose-invert max-w-none space-y-12 text-muted-foreground leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">{t("cookiePolicy.whatAreTitle")}</h2>
                                <p>{t("cookiePolicy.whatAreContent")}</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">{t("cookiePolicy.thirdPartyTitle")}</h2>
                                <p>{t("cookiePolicy.thirdPartyContent")}</p>
                                <div className="grid md:grid-cols-2 gap-8 mt-8">
                                    <div className="p-6 bg-card border border-primary/10 rounded-xl">
                                        <h3 className="text-primary font-display text-xl mb-3">{t("cookiePolicy.googleAdsTitle")}</h3>
                                        <p className="text-xs">{t("cookiePolicy.googleAdsDesc")}</p>
                                    </div>
                                    <div className="p-6 bg-card border border-primary/10 rounded-xl">
                                        <h3 className="text-primary font-display text-xl mb-3">{t("cookiePolicy.metaAdsTitle")}</h3>
                                        <p className="text-xs">{t("cookiePolicy.metaAdsDesc")}</p>
                                    </div>
                                    <div className="p-6 bg-card border border-primary/10 rounded-xl">
                                        <h3 className="text-primary font-display text-xl mb-3">{t("cookiePolicy.tiktokAdsTitle")}</h3>
                                        <p className="text-xs">{t("cookiePolicy.tiktokAdsDesc")}</p>
                                    </div>
                                    <div className="p-6 bg-card border border-primary/10 rounded-xl">
                                        <h3 className="text-primary font-display text-xl mb-3">{t("cookiePolicy.technicalTitle")}</h3>
                                        <p className="text-xs">{t("cookiePolicy.technicalDesc")}</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">{t("cookiePolicy.manageTitle")}</h2>
                                <p>{t("cookiePolicy.manageContent")}</p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </main>
    );
};

export default CookiePolicy;
