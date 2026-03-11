import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
                            Privacy <span className="text-gold-gradient italic">Policy</span>
                        </h1>
                        <div className="w-24 h-[1px] bg-gold-gradient mx-auto mb-16" />

                        <div className="prose prose-invert max-w-none space-y-12 text-muted-foreground leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">1. Titolare del Trattamento</h2>
                                <p>
                                    Il Titolare del trattamento è il <strong>Dott. Massimo Sabbalini</strong>, con studio professionale in Via Cassa di Risparmio 8, Bolzano.
                                    Per qualsiasi chiarimento in merito alla protezione dei dati è possibile contattarci all'indirizzo email: <a href="mailto:sabbalinimassimo@proton.me" className="text-primary hover:underline">sabbalinimassimo@proton.me</a>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">2. Tipologie di Dati Raccolti</h2>
                                <p>
                                    I dati raccolti tramite questo sito includono: nome, cognome, indirizzo email, numero di telefono, dati di utilizzo e cookie.
                                    Questi dati possono essere forniti volontariamente dall'utente (es. tramite form di contatto o WhatsApp) o raccolti automaticamente
                                    tramite strumenti di analisi e marketing.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">3. Finalità e Marketing</h2>
                                <p>Vengono utilizzati servizi di terze parti per finalità di marketing e profilazione:</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>
                                        <strong className="text-foreground">Meta Ads (Facebook & Instagram Pixel):</strong> Utilizziamo il Pixel di Meta per monitorare le conversioni e creare "pubblicità personalizzate" basate sugli interessi degli utenti che hanno visitato il sito.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Google Ads & Analytics:</strong> Utilizziamo strumenti di Google per analizzare il traffico e pubblicare annunci pubblicitari pertinenti nella rete Google.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">TikTok Ads:</strong> Utilizziamo il Pixel di TikTok per monitorare l'efficacia delle campagne pubblicitarie sulla piattaforma TikTok.
                                    </li>
                                    <li>
                                        <strong className="text-foreground">Email Marketing:</strong> Se fornito il consenso, utilizzeremo il tuo indirizzo email per inviarti comunicazioni su novità, promozioni e servizi dello studio.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">4. Base Giuridica e Diritti</h2>
                                <p>
                                    Il trattamento si basa sulla necessità di fornire i servizi richiesti e, per le finalità di marketing, sul consenso esplicito dell'utente.
                                    Ai sensi del GDPR, l'utente ha il diritto di accedere ai propri dati, richiederne la rettifica, la cancellazione o la portabilità, nonché di opporsi al loro trattamento.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display text-foreground border-b border-primary/10 pb-4 mb-6 italic">5. Conservazione dei Dati</h2>
                                <p>
                                    I dati sono conservati per il tempo strettamente necessario a perseguire le finalità indicate, rispettando i termini di legge per la conservazione dei dati clinici e amministrativi.
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

export default PrivacyPolicy;
