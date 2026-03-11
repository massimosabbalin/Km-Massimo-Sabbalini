import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CookiePolicy = () => {
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
                            Cookie <span className="text-gold-gradient italic">Policy</span>
                        </h1>
                        <div className="w-24 h-[1px] bg-gold-gradient mx-auto mb-16" />

                        <div className="prose prose-invert max-w-none space-y-12 text-muted-foreground leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">Cosa sono i Cookie</h2>
                                <p>
                                    I cookie sono piccoli file di testo caricati sul tuo computer o dispositivo mobile per migliorare l'esperienza utente.
                                    In generale, i cookie vengono utilizzati per mantenere le preferenze dell'utente, memorizzare informazioni su elementi come i carrelli della spesa
                                    e fornire dati di tracciamento anonimizzati ad applicazioni di terze parti come Google Analytics.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">Cookie di Terze Parti (Marketing)</h2>
                                <p>Il nostro sito utilizza specifici cookie per finalità pubblicitarie e di analisi:</p>
                                <div className="grid md:grid-cols-2 gap-8 mt-8">
                                    <div className="p-6 bg-card border border-primary/10 rounded-xl">
                                        <h3 className="text-primary font-display text-xl mb-3">Google Ads & Analytics</h3>
                                        <p className="text-xs">Cookie utilizzati per misurare l'efficacia delle ricerche e personalizzare gli annunci sulla rete Google.</p>
                                    </div>
                                    <div className="p-6 bg-card border border-primary/10 rounded-xl">
                                        <h3 className="text-primary font-display text-xl mb-3">Meta (Facebook) Pixel</h3>
                                        <p className="text-xs">Permette di tracciare le azioni dei visitatori e mostrare annunci personalizzati su Facebook e Instagram.</p>
                                    </div>
                                    <div className="p-6 bg-card border border-primary/10 rounded-xl">
                                        <h3 className="text-primary font-display text-xl mb-3">TikTok Pixel</h3>
                                        <p className="text-xs">Cookie di profilazione per misurare le performance delle campagne su TikTok Ads.</p>
                                    </div>
                                    <div className="p-6 bg-card border border-primary/10 rounded-xl">
                                        <h3 className="text-primary font-display text-xl mb-3">Cookie Tecnici</h3>
                                        <p className="text-xs">Essenziali per il corretto funzionamento del sito e per memorizzare le tue preferenze sui cookie stessi.</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">Come gestire i Cookie</h2>
                                <p>
                                    Puoi scegliere di disabilitare i cookie nelle impostazioni del tuo browser. Il modo più efficace è farlo nella sezione Aiuto o Impostazioni del browser.
                                    Tuttavia, tieni presente che la disabilitazione dei cookie potrebbe impedire il corretto funzionamento di alcune parti di questo sito.
                                </p>
                                <p className="mt-4">
                                    Puoi gestire le tue preferenze specifiche per questo sito in qualsiasi momento riaprendo la barra di consenso (se non ancora accettata) o cancellando i dati di navigazione del browser.
                                </p>
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
