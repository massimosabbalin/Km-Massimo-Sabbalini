import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const resultsData = [
  { id: 1, src: '/risultati/1.png', alt: 'Trattamento occhiaie prima e dopo - Risultato naturale e luminoso Dott. Massimo Sabbalini', title: 'Correzione Occhiaie' },
  { id: 2, src: '/risultati/2.png', alt: 'Rinofiller profilo sinistro prima e dopo - Armonizzazione del naso senza chirurgia Dott. Massimo Sabbalini', title: 'Rinofiller Profilo Sx' },
  { id: 4, src: '/risultati/4.png', alt: 'Filler labbra prima e dopo - Volume naturale e definizione Dott. Massimo Sabbalini', title: 'Filler Labbra Naturale' },
  { id: 5, src: '/risultati/5.png', alt: 'Filler labbra prima e dopo - Idratazione e volume Dott. Massimo Sabbalini', title: 'Filler Labbra Idratazione' },
  { id: 6, src: '/risultati/6.png', alt: 'Filler labbra prima e dopo - Effetto rimpolpante naturale', title: 'Filler Labbra Rimpolpante' },
  { id: 7, src: '/risultati/7.png', alt: 'Filler labbra con sorriso prima e dopo - Dott. Massimo Sabbalini', title: 'Filler Labbra in Sorriso' },
  { id: 8, src: '/risultati/8.png', alt: 'Filler labbra prima e dopo - Correzione asimmetrie Dott. Massimo Sabbalini', title: 'Filler Labbra Correzione' },
  { id: 9, src: '/risultati/9.png', alt: 'Filler labbra prima e dopo - Risultato estetico armonico Dott. Massimo Sabbalini', title: 'Filler Labbra Armonico' },
];

const ResultsCarousel = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10 w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">PORTFOLIO</span>
          <h2 className="text-3xl md:text-5xl font-light mb-6">
            Facciamo parlare i <span className="font-medium text-primary">risultati</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            L'approccio del Dott. Sabbalini è focalizzato su risultati naturali e personalizzati. 
            Scopri i casi prima e dopo per apprezzare i dettagli di ogni trattamento medico estetico.
          </p>
        </div>

        <div className="relative mb-12 px-6 sm:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {resultsData.map((result) => (
                <CarouselItem key={result.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer group shadow-sm bg-muted/30">
                        <img 
                          src={result.src} 
                          alt={result.alt} 
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                          <span className="text-white bg-black/50 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            Clicca per ingrandire
                          </span>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0 flex justify-center items-center">
                      <DialogTitle className="sr-only">{result.title}</DialogTitle>
                      <img 
                        src={result.src} 
                        alt={result.alt} 
                        className="w-auto h-auto max-h-[85vh] max-w-full rounded-lg object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Navigazione su desktop */}
            <CarouselPrevious className="hidden md:flex -left-6 bg-white hover:bg-white/90 text-primary border-transparent shadow-md" />
            <CarouselNext className="hidden md:flex -right-6 bg-white hover:bg-white/90 text-primary border-transparent shadow-md" />
          </Carousel>
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild size="lg" className="rounded-full shadow-lg group px-8">
            <Link to="/risultati">
              Vedi tutti i risultati
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsCarousel;
