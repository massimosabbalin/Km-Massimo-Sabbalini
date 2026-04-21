import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "IT" | "DE";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "IT";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (path: string): string => {
    const keys = path.split(".");
    let current: any = translations[language];

    for (const key of keys) {
      if (current && current[key]) {
        current = current[key];
      } else {
        console.warn(`Translation key not found: ${path} for language: ${language}`);
        return path;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations: Record<Language, any> = {
  IT: {
    nav: {
      home: "Home",
      treatments: "Trattamenti",
      laser: "Laser Alessandrite",
      blog: "Blog",
      results: "Risultati",
      locations: "Le Nostre Sedi",
      contact: "Contatti",
      book: "Prenota Ora",
      whatsappMessage: "Buongiorno Dott. Sabbalini, vorrei ricevere informazioni riguardo i trattamenti e prenotare una consulenza."
    },
    results: {
      subtitle: "Prima e Dopo",
      title: "Risultati",
      titleAccent: "Reali",
      carouselTitle: "Casi",
      carouselAccent: "Clinici",
      desc: "Una selezione di casi clinici reali per mostrare l'armonia e la naturalezza dei risultati ottenibili presso la Km Clinic.",
      enlarge: "Clicca per ingrandire",
      viewAll: "Vedi Tutti i Risultati"
    },
    hero: {
      subtitle: "Medicina & Chirurgia Estetica",
      title: "La Bellezza è",
      titleItalic: "un'Arte",
      description: "Dott. Massimo Sabbalini — Chirurgia Plastica e Medicina Estetica d'eccellenza. Risultati naturali, tecniche all'avanguardia.",
      ctaBook: "Prenota Consulenza",
      ctaDiscover: "Scopri i Trattamenti"
    },
    about: {
      subtitle: "Chi Siamo",
      title: "L'Eccellenza della",
      titleItalic: "Chirurgia e Medicina Estetica",
      p1: "Il Dott. Massimo Sabbalini è uno specialista di fama internazionale in Chirurgia Plastica, Ricostruttiva ed Estetica. Con oltre quindici anni di esperienza clinica, la sua visione professionale si fonda sull'armonia tra rigore scientifico e sensibilità artistica.",
      p2: "Ogni percorso terapeutico è concepito come un'opera unica, dove l'obiettivo non è stravolgere ma valorizzare l'identità e la bellezza naturale di ciascun paziente, attraverso protocolli personalizzati e minimamente invasivi.",
      p3: "L'approccio del Dott. Sabbalini integra le più moderne innovazioni tecnologiche con una dedizione costante alla sicurezza e al benessere. L'eccellenza dei risultati è garantita dall'utilizzo esclusivo di dispositivi e prodotti certificati ai massimi standard qualitativi.",
      quote: '"La vera bellezza risiede nell\'equilibrio. La mia missione è restituire fiducia e armonia, rispettando l\'unicità di ogni volto e di ogni corpo."',
      stat1: "Anni di Esperienza",
      stat2: "Sedi in Italia",
      stat3: "Pazienti Seguiti"
    },
    treatments: {
      subtitle: "I Nostri Servizi",
      title: "Trattamenti",
      titleItalic: "Esclusivi",
      ctaAll: "Mostra Tutti i Trattamenti",
      before: "Prima",
      after: "Dopo",
      list: {
        laser: {
            name: "Laser Alessandrite",
            desc: "Epilazione definitiva con tecnologia medica Candela GentlePro per risultati eccellenti."
        },
        filler: {
            name: "Filler Labbra",
            desc: "Trattamento con acido ialuronico per labbra più piene, definite e naturali."
        },
        botox: {
            name: "Botox Viso",
            desc: "Riduce le rughe d'espressione per un aspetto più fresco e rilassato."
        },
        rhino: {
            name: "Rinofiller",
            desc: "Rimodellamento non chirurgico del naso con filler di ultima generazione."
        }
      }
    },
    locations: {
        subtitle: "Dove Trovarci",
        title: "Dove",
        titleItalic: "Trovarci",
        openMaps: "Apri in Google Maps →"
    },
    cta: {
        title: "Inizia il tuo",
        titleItalic: "Percorso",
        desc: "Prenota una consulenza personalizzata con il Dott. Massimo Sabbalini. Il primo passo verso la tua nuova immagine inizia con una conversazione.",
        button: "Prenota su WhatsApp"
    },
    footer: {
        rights: "Tutti i diritti riservati.",
        legal: "Informazioni Legali",
        quickLinks: "Link Rapidi",
        contacts: "Contatti",
        copyEmail: "Email copiata negli appunti",
        medicalExcellence: "Medicina e Chirurgia Estetica d'eccellenza."
    },
    blog: {
        subtitle: "Esplora la Medicina Estetica Moderna",
        title: "Il Nostro",
        titleItalic: "Blog",
        description: "Consigli professionali, approfondimenti tecnologici e tutto ciò che devi sapere sui trattamenti laser e di medicina estetica d'avanguardia.",
        readMore: "Leggi Articolo"
    },
    cookies: {
        title: "Informativa sui Cookie",
        desc: "Utilizziamo cookie propri e di terzi (Meta, Google, TikTok) per migliorare la tua esperienza di navigazione, analizzare il traffico e offrirti contenuti pubblicitari personalizzati. Consultando la nostra Cookie Policy puoi scoprire di più o negare il consenso.",
        accept: "Accetta Tutto",
        decline: "Solo Necessari"
    },

    privacy: {
        title: "Privacy",
        titleItalic: "Policy",
        section1Title: "1. Titolare del Trattamento",
        section1Content: "Il Titolare del trattamento è il Dott. Massimo Sabbalini, con studio professionale in Via Cassa di Risparmio 8, Bolzano. Per qualsiasi chiarimento in merito alla protezione dei dati è possibile contattarci all'indirizzo email: sabbalinimassimo@proton.me.",
        section2Title: "2. Tipologie di Dati Raccolti",
        section2Content: "I dati raccolti tramite questo sito includono: nome, cognome, indirizzo email, numero di telefono, dati di utilizzo e cookie. Questi dati possono essere forniti volontariamente dall'utente o raccolti automaticamente tramite strumenti di analisi e marketing.",
        section3Title: "3. Finalità e Marketing",
        section3Content: "Vengono utilizzati servizi di terze parti per finalità di marketing e profilazione:",
        metaAds: "Meta Ads (Facebook & Instagram Pixel): Utilizziamo il Pixel di Meta per monitorare le conversioni e creare 'pubblicità personalizzate'.",
        googleAds: "Google Ads & Analytics: Utilizziamo strumenti di Google per analizzare il traffico e pubblicare annunci pertinenti.",
        tiktokAds: "TikTok Ads: Utilizziamo il Pixel di TikTok per monitorare l'efficacia delle campagne pubblicitarie.",
        emailMarketing: "Email Marketing: Se fornito il consenso, invieremo comunicazioni su novità e servizi dello studio.",
        section4Title: "4. Base Giuridica e Diritti",
        section4Content: "Il trattamento si basa sulla necessità di fornire i servizi richiesti e sul consenso esplicito dell'utente. Ai sensi del GDPR, l'utente ha il diritto di accesso, rettifica, cancellazione o opposizione.",
        section5Title: "5. Conservazione dei Dati",
        section5Content: "I dati sono conservati per il tempo strettamente necessario a perseguire le finalità indicate, rispettando i termini di legge."
    },
    cookiePolicy: {
        title: "Cookie",
        titleItalic: "Policy",
        whatAreTitle: "Cosa sono i Cookie",
        whatAreContent: "I cookie sono piccoli file di testo caricati sul tuo computer o dispositivo mobile per migliorare l'esperienza utente. Vengono utilizzati per mantenere le preferenze, memorizzare informazioni e fornire dati di tracciamento anonimizzati.",
        thirdPartyTitle: "Cookie di Terze Parti (Marketing)",
        thirdPartyContent: "Il nostro sito utilizza specifici cookie per finalità pubblicitarie e di analisi:",
        googleAdsTitle: "Google Ads & Analytics",
        googleAdsDesc: "Cookie utilizzati per misurare l'efficacia delle ricerche e personalizzare gli annunci sulla rete Google.",
        metaAdsTitle: "Meta (Facebook) Pixel",
        metaAdsDesc: "Permette di tracciare le azioni dei visitatori e mostrare annunci personalizzati su Facebook e Instagram.",
        tiktokAdsTitle: "TikTok Pixel",
        tiktokAdsDesc: "Cookie di profilazione per misurare le performance delle campagne su TikTok Ads.",
        technicalTitle: "Cookie Tecnici",
        technicalDesc: "Essenziali per il corretto funzionamento del sito e per memorizzare le tue preferenze.",
        manageTitle: "Come gestire i Cookie",
        manageContent: "Puoi scegliere di disabilitare i cookie nelle impostazioni del tuo browser. La disabilitazione potrebbe impedire il corretto funzionamento di alcune parti di questo sito."
    },
    notFound: {
        title: "Oops! Pagina non trovata",
        returnHome: "Torna alla Home"
    },
    laser: {
        allTreatments: "Tutti i Trattamenti",
        goldStandard: "Il Gold Standard dell'Epilazione Medica",
        techDesc: "L'eccellenza tecnologica di Candela GentlePro per risultati definitivi sulla pelle chiara. Precisione clinica e comfort superiore.",
        showPricing: "SCOPRI I PREZZI",
        technology: "TECNOLOGIA",
        medicalPrecision: "Medical Precision",
        candelaTech: "Tecnologia Candela GentlePro",
        candelaDesc1: "Il Laser Alessandrite di Candela rappresenta l'apice dell'innovazione medica nel campo dell'epilazione. A differenza dei sistemi a diodo commerciali, la lunghezza d'onda di 755nm è specificamente ottimizzata per il massimo assorbimento della melanina.",
        candelaDesc2: "Questa tecnologia è il trattamento d'elezione per i fototipi chiari, garantendo una rimozione dei peli più rapida e profonda.",
        check1: "Efficacia superiore su peli sottili e chiari",
        check2: "Approvato FDA per la sicurezza clinica",
        check3: "Risultati visibili fin dalle prime sedute",
        beyondAesthetics: "Oltre l'estetica",
        clinicalHealth: "Efficacia Clinica & Salute della Pelle",
        quote: '"Non è solo epilazione, è un percorso di rigenerazione cutanea supervisionato da specialisti."',
        hormonalTitle: "Supporto Clinico per Squilibri Ormonali",
        hormonalDesc: "A differenza dei trattamenti estetici standard, il Laser Alessandrite è lo strumento d'elezione per casi di irsutismo.",
        folliculitisTitle: "Stop a Follicoliti e Irritazioni",
        folliculitisDesc: "L'azione mirata del laser elimina alla radice la causa di peli incarniti e irritazioni croniche.",
        whyAlessandrite: "Perché scegliere l'Alessandrite?",
        benefit1Title: "Massima Efficacia",
        benefit1Desc: "Risultati visibili fin dalla prima seduta, riducendo il numero totale.",
        benefit2Title: "Comfort",
        benefit2Desc: "Sistema di raffreddamento criogenico DCD™ integrato.",
        benefit3Title: "Sicurezza",
        benefit3Desc: "Protocolli medici rigorosi e supervisione costante.",
        benefit4Title: "Precisione",
        benefit4Desc: "Trattamento mirato che non interferisce con la pelle circostante.",
        clinicalPath: "Il Percorso Clinico",
        step1Title: "Consulenza Iniziale",
        step1Desc: "Analisi del fototipo e della tipologia di pelo.",
        step2Title: "Preparazione e Test",
        step2Desc: "Detersione della zona e test spot.",
        step3Title: "La Seduta",
        step3Desc: "Applicazione del laser con impulsi precisi.",
        step4Title: "Post-Trattamento",
        step4Desc: "Applicazione di lozioni lenitive e follow-up.",
        pricingTitle: "Listino Trattamenti",
        pricingSubtitle: "Investimento nella tua pelle",
        freeTrial: "Prova Gratuita Disponibile",
        pricingDesc: "Protocolli personalizzati con tecnologia Candela GentlePro. Possibilità di pagamento frazionato.",
        smallZone: "Zona Piccola",
        smallDesc: "A scelta tra: attaccatura capelli, guance, baffetto, orecchie, mento, mani, piedi, basette.",
        mediumZone: "Zona Media",
        mediumDesc: "A scelta tra: spalle, ascelle, glutei, inguine, ½ braccio, viso totale, addome.",
        largeZone: "Zona Grande",
        largeDesc: "A scelta tra: coscia, ½ gamba, torace, schiena, braccio intero.",
        session1: "1 seduta",
        session2: "2 sedute",
        session4: "4 sedute",
        menSpecial: "Speciale Epilazione Uomo",
        singleSession: "Seduta Singola",
        packet8: "Pacchetto 8 Sedute (Risultato Garantito)",
        installmentNote: "*Possibilità di pagamento frazionato nei primi 3 mesi di trattamento.",
        resultsTitle: "Alcuni dei nostri risultati...",
        enlarge: "Ingrandisci"
    }
  },
  DE: {
    nav: {
      home: "Home",
      treatments: "Behandlungen",
      laser: "Alexandrit Laser",
      blog: "Blog",
      results: "Ergebnisse",
      locations: "Unsere Standorte",
      contact: "Kontakt",
      book: "Jetzt Buchen",
      whatsappMessage: "Guten Tag Dr. Sabbalini, ich möchte Informationen zu Behandlungen erhalten und einen Termin vereinbaren."
    },
    results: {
      subtitle: "Vorher und Nachher",
      title: "Echte",
      titleAccent: "Ergebnisse",
      carouselTitle: "Klinische",
      carouselAccent: "Fälle",
      desc: "Eine selezione di casi clinici reali per mostrare l'armonia e la naturalezza dei risultati ottenibili presso la Km Clinic.",
      enlarge: "Zum Vergrößern anklicken",
      viewAll: "Alle Ergebnisse ansehen"
    },
    hero: {
      subtitle: "Ästhetische Medizin & Chirurgie",
      title: "Schönheit ist",
      titleItalic: "eine Kunst",
      description: "Dr. Massimo Sabbalini — Exzellente Plastische Chirurgie und Ästhetische Medizin. Natürliche Ergebnisse, modernste Techniken.",
      ctaBook: "Beratung Buchen",
      ctaDiscover: "Behandlungen Entdecken"
    },
    about: {
      subtitle: "Über Uns",
      title: "Exzellenz in",
      titleItalic: "Chirurgie und Ästhetischer Medizin",
      p1: "Dr. Massimo Sabbalini ist ein international renommierter Spezialist für Plastische, Rekonstruktive und Ästhetische Chirurgie. Mit über fünfzehn Jahren klinischer Erfahrung basiert seine berufliche Vision sulla Harmonie zwischen wissenschaftlicher Präzision und künstlerischem Feingefühl.",
      p2: "Jeder Behandlungsweg wird als ein einzigartiges Werk konzipiert, bei dem das Ziel nicht die Veränderung, sondern die Aufwertung der Identität und der natürlichen Schönheit jedes Patienten durch personalisierte und minimalinvasive Protokolle ist.",
      p3: "Der Ansatz von Dr. Sabbalini integriert modernste technologische Innovationen con costante Hingabe an Sicherheit und Wohlbefinden. Die Exzellenz der Ergebnisse wird durch die exklusive Verwendung von Geräten und Produkten garantiert, die nach höchsten Qualitätsstandards zertifiziert sind.",
      quote: '"Wahre Schönheit liegt im Gleichgewicht. Meine Mission ist es, Vertrauen und Harmonie wiederherzustellen und dabei die Einzigartigkeit jedes Gesichts und Körpers zu respektieren."',
      stat1: "Jahre Erfahrung",
      stat2: "Standorte in Italien",
      stat3: "Behandelte Patienten"
    },
    treatments: {
      subtitle: "Unsere Leistungen",
      title: "Exklusive",
      titleItalic: "Behandlungen",
      ctaAll: "Alle Behandlungen Anzeigen",
      before: "Vorher",
      after: "Nachher",
      list: {
        laser: {
            name: "Alexandrit Laser",
            desc: "Dauerhafte Haarentfernung mit Candela GentlePro Medizintechnik für exzellente Ergebnisse."
        },
        filler: {
            name: "Lippenunterspritzung",
            desc: "Behandlung mit Hyaluronsäure für vollere, definierte und natürliche Lippen."
        },
        botox: {
            name: "Gesichts-Botox",
            desc: "Reduziert Mimikfalten für ein frischeres ed entspannteres Aussehen."
        },
        rhino: {
            name: "Nasen-Filler",
            desc: "Nicht-chirurgische Nasenkorrektur mit Hyaluronsäure-Fillern der neuesten Generation."
        }
      }
    },
    locations: {
        subtitle: "Wo Sie uns finden",
        title: "Unsere",
        titleItalic: "Standorte",
        openMaps: "In Google Maps öffnen →"
    },
    cta: {
        title: "Beginnen Sie Ihre",
        titleItalic: "Reise",
        desc: "Buchen Sie eine persönliche Beratung bei Dr. Massimo Sabbalini. Der erste Schritt zu Ihrem neuen Ich beginnt mit einem Gespräch.",
        button: "Über WhatsApp buchen"
    },
    footer: {
        rights: "Alle Rechte vorbehalten.",
        legal: "Rechtliche Hinweise",
        quickLinks: "Quick Links",
        contacts: "Kontakt",
        copyEmail: "E-Mail in die Zwischenablage kopiert",
        medicalExcellence: "Exzellenz in ästhetischer Medizin und Chirurgie."
    },
    blog: {
        subtitle: "Entdecken Sie die moderne ästhetische Medizin",
        title: "Unser",
        titleItalic: "Blog",
        description: "Fachliche Beratung, technologische Einblicke und alles, was Sie über modernste Laserbehandlungen und ästhetische Medizin wissen müssen.",
        readMore: "Artikel lesen"
    },
    cookies: {
        title: "Cookie-Richtlinie",
        desc: "Wir verwenden eigene Cookies und Cookies von Drittanbietern (Meta, Google, TikTok), um Ihr Surferlebnis zu verbessern, den Datenverkehr zu analysieren und Ihnen personalisierte Werbeinhalte anzubieten. Durch die Einsicht in unsere Cookie-Richtlinie können Sie mehr erfahren oder die Zustimmung verweigern.",
        accept: "Alle akzeptieren",
        decline: "Nur Notwendige"
    },
    notFound: {
        title: "Oops! Seite nicht gefunden",
        returnHome: "Zurück zur Startseite"
    },
    privacy: {
        title: "Datenschutz",
        titleItalic: "bestimmungen",
        section1Title: "1. Verantwortlicher für die Datenverarbeitung",
        section1Content: "Verantwortlicher für die Datenverarbeitung ist Dr. Massimo Sabbalini, mit Praxis in Via Cassa di Risparmio 8, Bozen. Für Fragen zum Datenschutz erreichen Sie uns per E-Mail: sabbalinimassimo@proton.me.",
        section2Title: "2. Arten der erhobenen Daten",
        section2Content: "Die über diese Website erhobenen Daten umfassen: Vorname, Nachname, E-Mail-Adresse, Telefonnummer, Nutzungsdaten und Cookies. Diese Daten können freiwillig vom Nutzer bereitgestellt oder automatisch durch Analyse- und Marketing-Tools erhoben werden.",
        section3Title: "3. Zweck und Marketing",
        section3Content: "Dienste von Drittanbietern werden für Marketingzwecke und Profiling genutzt:",
        metaAds: "Meta Ads (Facebook & Instagram Pixel): Wir nutzen das Meta-Pixel, um Konversionen zu verfolgen und 'personalisierte Werbung' zu erstellen.",
        googleAds: "Google Ads & Analytics: Wir nutzen Google-Tools, um den Datenverkehr zu analysieren und relevante Werbeanzeigen zu schalten.",
        tiktokAds: "TikTok Ads: Wir nutzen das TikTok-Pixel, um die Wirksamkeit von Werbekampagnen zu überwachen.",
        emailMarketing: "E-Mail-Marketing: Wenn Sie Ihre Zustimmung geben, senden wir Ihnen Informationen über Neuigkeiten und Dienste der Praxis.",
        section4Title: "4. Rechtsgrundlage und Rechte",
        section4Content: "Die Verarbeitung basiert auf der Notwendigkeit, die angeforderten Dienste bereitzustellen, sowie auf der ausdrücklichen Zustimmung des Nutzers. Gemäß DSGVO hat der Nutzer das Recht auf Auskunft, Berichtigung, Löschung oder Widerspruch.",
        section5Title: "5. Datenspeicherung",
        section5Content: "Die Daten werden nur so lange gespeichert, wie es für die angegebenen Zwecke erforderlich ist, unter Einhaltung der gesetzlichen Aufbewahrungsfristen."
    },
    cookiePolicy: {
        title: "Cookie-Richt",
        titleItalic: "linie",
        whatAreTitle: "Was sind Cookies",
        whatAreContent: "Cookies sind kleine Textdateien, die auf Ihren Computer oder Ihr Mobilgerät geladen werden, um die Benutzererfahrung zu verbessern. Sie werden verwendet, um Präferenzen beizubehalten, Informationen zu speichern und anonymisierte Tracking-Daten bereitzustellen.",
        thirdPartyTitle: "Drittanbieter-Cookies (Marketing)",
        thirdPartyContent: "Unsere Website verwendet spezifische Cookies für Werbe- und Analysezwecke:",
        googleAdsTitle: "Google Ads & Analytics",
        googleAdsDesc: "Cookies, die verwendet werden, um die Wirksamkeit von Suchen zu messen und Anzeigen im Google-Netzwerk zu personalisieren.",
        metaAdsTitle: "Meta (Facebook) Pixel",
        metaAdsDesc: "Ermöglicht es, die Aktionen der Besucher zu verfolgen und personalisierte Anzeigen auf Facebook und Instagram anzuzeigen.",
        tiktokAdsTitle: "TikTok Pixel",
        tiktokAdsDesc: "Profiling-Cookies zur Messung der Leistung von Kampagnen auf TikTok Ads.",
        technicalTitle: "Technische Cookies",
        technicalDesc: "Wichtig für das ordnungsgemäße Funktionieren der Website und zur Speicherung Ihrer Cookie-Präferenzen.",
        manageTitle: "Wie man Cookies verwaltet",
        manageContent: "Sie können Cookies in Ihren Browsereinstellungen deaktivieren. Die Deaktivierung kann dazu führen, dass einige Teile dieser Website nicht ordnungsgemäß funktionieren."
    },
    laser: {
        allTreatments: "Alle Behandlungen",
        goldStandard: "Der Goldstandard der medizinischen Haarentfernung",
        techDesc: "Die technologische Exzellenz von Candela GentlePro für dauerhafte Ergebnisse bei heller Haut. Klinische Präzision und überlegener Komfort.",
        showPricing: "PREISE ENTDECKEN",
        technology: "TECHNOLOGIE",
        medicalPrecision: "Medizinische Präzision",
        candelaTech: "Candela GentlePro Technologie",
        candelaDesc1: "Der Alexandrit-Laser von Candela stellt den Gipfel der medizinischen Innovation im Bereich der Haarentfernung dar. Im Gegensatz zu kommerziellen Diodensystemen ist die Wellenlänge von 755nm spezifisch für die maximale Melaninabsorption optimiert.",
        candelaDesc2: "Diese Technologie ist die Behandlung der Wahl für helle Fototypen und garantiert eine schnellere und tiefere Haarentfernung.",
        check1: "Überlegene Wirksamkeit bei feinem und hellem Haar",
        check2: "FDA-zugelassen für klinische Sicherheit",
        check3: "Sichtbare Ergebnisse ab den ersten Sitzungen",
        beyondAesthetics: "Jenseits der Ästhetik",
        clinicalHealth: "Klinische Wirksamkeit & Hautgesundheit",
        quote: '"Es ist nicht nur Haarentfernung, es ist ein Weg der Hautregeneration unter fachärztlicher Aufsicht."',
        hormonalTitle: "Klinische Unterstützung bei hormonellen Ungleichgewichten",
        hormonalDesc: "Im Gegensatz zu Standard-Kosmetikbehandlungen ist der Alexandrit-Laser das Instrument der Wahl für Fälle von Hirsutismus.",
        folliculitisTitle: "Stopp für Follikulitis und Irritationen",
        folliculitisDesc: "Die gezielte Wirkung del Lasers beseitigt die Ursache eingewachsener Haare und chronischer Reizungen an der Wurzel.",
        whyAlessandrite: "Warum Alexandrit wählen?",
        benefit1Title: "Maximale Wirksamkeit",
        benefit1Desc: "Sichtbare Ergebnisse ab der ersten Sitzung, wodurch die Gesamtzahl reduziert wird.",
        benefit2Title: "Komfort",
        benefit2Desc: "Integriertes DCD™ kryogenes Kühlsystem.",
        benefit3Title: "Sicherheit",
        benefit3Desc: "Strenge medizinische Protokolle und ständige Überwachung.",
        benefit4Title: "Präzision",
        benefit4Desc: "Gezielte Behandlung, die die umliegende Haut nicht beeinträchtigt.",
        clinicalPath: "Der klinische Weg",
        step1Title: "Erstberatung",
        step1Desc: "Analyse des Fototyps und des Haartyps.",
        step2Title: "Vorbereitung und Test",
        step2Desc: "Reinigung des Bereichs und Spot-Test.",
        step3Title: "Die Sitzung",
        step3Desc: "Anwendung des Lasers mit präzisen Impulsen.",
        step4Title: "Nachbehandlung",
        step4Desc: "Anwendung lindernder Lotionen und Nachsorge.",
        pricingTitle: "Behandlungspreise",
        pricingSubtitle: "Investition in Ihre Haut",
        freeTrial: "Kostenlose Testversion verfügbar",
        pricingDesc: "Personalisierte Protokolle mit Candela GentlePro Technologie. Ratenzahlung möglich.",
        smallZone: "Kleine Zone",
        smallDesc: "Wahlweise: Haaransatz, Wangen, Oberlippe, Ohren, Kinn, Hände, Füße, Koteletten.",
        mediumZone: "Mittlere Zone",
        mediumDesc: "Wahlweise: Schultern, Achseln, Gesäß, Leiste, ½ Arm, ganzes Gesicht, Bauch.",
        largeZone: "Große Zone",
        largeDesc: "Wahlweise: Oberschenkel, ½ Bein, Brust, Rücken, ganzer Arm.",
        session1: "1 Sitzung",
        session2: "2 Sitzungen",
        session4: "4 Sitzungen",
        menSpecial: "Spezielle Haarentfernung für Männer",
        singleSession: "Einzelsitzung",
        packet8: "8-Sitzungen-Paket (Garantiertes Ergebnis)",
        installmentNote: "*Ratenzahlung in den ersten 3 Behandlungsmonaten möglich.",
        resultsTitle: "Einige unserer Ergebnisse...",
        enlarge: "Vergrößern"
    }
  }
};
