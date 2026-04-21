export interface Treatment {
  name: { IT: string; DE: string };
  price: string;
  description: { IT: string; DE: string };
}

export const treatmentsData: Treatment[] = [
  {
    name: { IT: "Filler Labbra 1 Fiala", DE: "Lippen-Filler 1 Ampulle" },
    price: "€ 290",
    description: {
      IT: "Trattamento d'eccellenza con acido ialuronico per ridefinire volume e contorno labiale. L'utilizzo di una fiala intera permette di correggere asimmetrie e donare un'idratazione profonda.",
      DE: "Exzellente Behandlung mit Hyaluronsäure zur Neudefinition von Lippenvolumen und -kontur. Die Verwendung einer ganzen Ampulle ermöglicht die Korrektur von Asymmetrien und sorgt für tiefe Hydratation."
    },
  },
  {
    name: { IT: "Filler Labbra ½ Fiala", DE: "Lippen-Filler ½ Ampulle" },
    price: "€ 180",
    description: {
      IT: "Ideale per chi desidera un tocco di freschezza estremamente naturale. Questo trattamento permette di idratare e definire leggermente il contorno senza stravolgere i volumi.",
      DE: "Ideal für alle, die einen extrem natürlichen Hauch von Frische wünschen. Diese Behandlung ermöglicht es, die Kontur leicht zu hydratisieren und zu definieren, ohne das Volumen zu verändern."
    },
  },
  {
    name: { IT: "Botox Completo", DE: "Komplettes Botox" },
    price: "€ 400",
    description: {
      IT: "Protocollo avanzato per la distensione delle rughe d'espressione. Agisce su fronte, glabella e contorno occhi per eliminare i segni della stanchezza.",
      DE: "Fortschrittliches Protokoll zur Glättung von Mimikfalten. Wirkt auf Stirn, Glabella und Augenpartie, um Anzeichen von Müdigkeit zu beseitigen."
    },
  },
  {
    name: { IT: "Botox Fronte", DE: "Botox Stirn" },
    price: "€ 300",
    description: {
      IT: "Trattamento specifico per le rughe orizzontali della fronte. Attraverso micro-iniezioni di precisione, la pelle appare visibilmente più distesa.",
      DE: "Spezifische Behandlung für horizontale Stirnfalten. Durch präzise Mikroinjektionen erscheint die Haut sichtbar entspannter."
    },
  },
  {
    name: { IT: "Botox Contorno Occhi", DE: "Botox Augenpartie" },
    price: "€ 250",
    description: {
      IT: "Mirato all'eliminazione delle cosiddette 'zampe di gallina'. Il trattamento distende la zona perioculare, rendendo lo sguardo più aperto.",
      DE: "Gezielte Beseitigung der sogenannten 'Krähenfüße'. Die Behandlung entspannt die Augenpartie und macht den Blick offener."
    },
  },
  {
    name: { IT: "Botox Solo Glabellare", DE: "Botox nur Glabella" },
    price: "€ 180",
    description: {
      IT: "Dedicato alla correzione delle rughe tra le sopracciglia. Il trattamento rilassa i muscoli responsabili della contrazione.",
      DE: "Gewidmet der Korrektur von Falten zwischen den Augenbrauen. Die Behandlung entspannt die für die Kontraktion verantwortlichen Muskeln."
    },
  },
  {
    name: { IT: "Solco Nasale Labiale", DE: "Nasolabialfalte" },
    price: "€ 300",
    description: {
      IT: "Riempimento mirato dei solchi che partono dal naso verso i lati della bocca, ripristinando la compattezza della zona.",
      DE: "Gezielte Auffüllung der Falten, die von der Nase zu den Mundwinkeln verlaufen, um die Festigkeit des Bereichs wiederherzustellen."
    },
  },
  {
    name: { IT: "Rinofiller", DE: "Nasen-Filler" },
    price: "€ 400",
    description: {
      IT: "Rimodellamento non chirurgico del profilo nasale. Permette di correggere piccoli difetti in pochi minuti.",
      DE: "Nicht-chirurgische Neugestaltung des Nasenprofils. Ermöglicht die Korrektur kleiner Defekte in wenigen Minuten."
    },
  },
  {
    name: { IT: "Zigomi", DE: "Wangenknochen" },
    price: "€ 390",
    description: {
      IT: "Ripristino dei volumi della regione malare per un effetto lifting naturale e una silhouette definita.",
      DE: "Wiederherstellung des Volumens der Malarregion für einen natürlichen Lifting-Effekt und eine definierte Silhouette."
    },
  },
  {
    name: { IT: "Filler Mento", DE: "Kinn-Filler" },
    price: "€ 290",
    description: {
      IT: "Trattamento di profiloplastica non chirurgica per migliorare l'equilibrio del profilo del viso.",
      DE: "Nicht-chirurgische Profiloplastik-Behandlung zur Verbesserung des Gleichgewichts des Gesichtsprofils."
    },
  },
  {
    name: { IT: "Definizione Mandibolare", DE: "Mandibuläre Definition" },
    price: "€ 350",
    description: {
      IT: "Scolpisce e ridefinisce l'angolo e la linea mandibolare per un aspetto più tonico e giovanile.",
      DE: "Formt und definiert den Kieferwinkel und die Kieferlinie für ein strafferes und jugendlicheres Aussehen."
    },
  },
  {
    name: { IT: "Occhiaie (Tear Trough)", DE: "Augenringe (Tränenrinne)" },
    price: "€ 350",
    description: {
      IT: "Correzione specialistica dell'infossamento sotto gli occhi per eliminare l'apparenza stanca.",
      DE: "Fachärztliche Korrektur der Vertiefung unter den Augen, um das müde Aussehen zu beseitigen."
    },
  },
  {
    name: { IT: "Biorivitalizzazione Viso", DE: "Gesichts-Biorevitalisierung" },
    price: "€ 250",
    description: {
      IT: "Un cocktail di vitamine e acido ialuronico che bioristruttura la pelle, restituendo luminosità.",
      DE: "Ein Cocktail aus Vitaminen und Hyaluronsäure, der die Haut biostrukturiert und ihr Strahlen zurückgibt."
    },
  },
  {
    name: { IT: "Spectra Hollywood Peeling", DE: "Spectra Hollywood Peeling" },
    price: "Su richiesta",
    description: {
      IT: "Trattamento laser con lozione al carbone per esfoliare, ridurre le imperfezioni e illuminare il viso.",
      DE: "Laserbehandlung mit Carbon-Lotion zum Peelen, Reduzieren von Unvollkommenheiten und Aufhellen des Gesichts."
    },
  },
  {
    name: { IT: "Liposuzione e Liposcultura HD", DE: "Liposuktion und HD-Liposkulptur" },
    price: "Su richiesta",
    description: {
      IT: "Rimodellamento chirurgico ad alta definizione per eliminare accumuli di grasso ostinato e scolpire la silhouette.",
      DE: "Chirurgisches High-Definition-Remodelling zur Beseitigung hartnäckiger Fettansammlungen und Modellierung der Silhouette."
    },
  },
  {
    name: { IT: "CM Slim (Tonificazione Muscolare)", DE: "CM Slim (Muskelstraffung)" },
    price: "Su richiesta",
    description: {
      IT: "Onde elettromagnetiche per indurre contrazioni profonde: aumenta la massa muscolare e riduce i grassi.",
      DE: "Elektromagnetische Wellen zur Induktion tiefer Kontraktionen: erhöht die Muskelmasse und reduziert Fett."
    },
  }
];
