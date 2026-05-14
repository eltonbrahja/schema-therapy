import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';

// elementi + path immagini in public/img
const galleryItems = [
  {
    id: 1,
    title: 'Il Raccoglitore',
    size: 'large',
    position: 'left',
    src: '/img/raccoglitoreChiuso.webp',
  },
  {
    id: 2,
    title: 'Scheda Fronte',
    size: 'medium',
    position: 'right',
    src: '/img/NegIpercompensazione1.webp',
  },
  {
    id: 3,
    title: 'Scheda Retro',
    size: 'medium',
    position: 'left',
    src: '/img/NegIpercompensazione2.webp',
  },
  {
    id: 4,
    title: 'Dettaglio',
    size: 'small',
    position: 'center',
    src: '/img/fotoDettaglio.webp',
  },
  {
    id: 5,
    title: 'Collezione',
    size: 'large',
    position: 'right',
    src: '/img/collezione.webp',
  },
  {
    id: 6,
    title: 'In Uso',
    size: 'medium',
    position: 'left',
    src: '/img/raccoglitoreAperto.webp',
  },
] as const;

type GalleryItem = (typeof galleryItems)[number];

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="galleria"
      className="py-32 lg:py-40 bg-[#2d1f16] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #c9b8a5 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span
              className={`text-xs font-medium text-[#a67c52] tracking-[0.3em] uppercase block mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Galleria
            </span>
            <h2
              className={`font-display text-5xl sm:text-6xl lg:text-7xl text-[#f5f0e8] leading-[0.95] transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Il prodotto
              <span className="block italic text-[#a67c52]">in dettaglio</span>
            </h2>
          </div>
          <p
            className={`text-[#c9b8a5] max-w-md text-sm leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Ecco come si presenta il raccoglitore Schema Therapy.
            Le immagini mostrate sono esempi reali del raccoglitore,
            delle schede fronte/retro e dei dettagli del materiale.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Row 1 */}
          <div
            className={`col-span-12 lg:col-span-7 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <GalleryCard
              item={galleryItems[0]}
              onClick={() => setSelectedItem(galleryItems[0])}
              className="h-64 sm:h-80 lg:h-96"
            />
          </div>
          <div
            className={`col-span-12 lg:col-span-5 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <GalleryCard
              item={galleryItems[1]}
              onClick={() => setSelectedItem(galleryItems[1])}
              className="h-64 sm:h-80 lg:h-96"
            />
          </div>

          {/* Row 2 */}
          <div
            className={`col-span-6 lg:col-span-4 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <GalleryCard
              item={galleryItems[2]}
              onClick={() => setSelectedItem(galleryItems[2])}
              className="h-64 lg:h-80"
            />
          </div>
          <div
            className={`col-span-6 lg:col-span-4 transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <GalleryCard
              item={galleryItems[3]}
              onClick={() => setSelectedItem(galleryItems[3])}
              className="h-64 lg:h-80"
            />
          </div>
          <div
            className={`col-span-12 lg:col-span-4 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <GalleryCard
              item={galleryItems[5]}
              onClick={() => setSelectedItem(galleryItems[5])}
              className="h-64 lg:h-80"
            />
          </div>

          {/* Row 3 */}
          <div
            className={`col-span-12 transition-all duration-700 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <GalleryCard
              item={galleryItems[4]}
              onClick={() => setSelectedItem(galleryItems[4])}
              className="h-72 lg:h-96"
            />
          </div>
        </div>

        {/* Note */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xs text-[#7a6555] uppercase tracking-wider">
            Clicca sulle immagini per visualizzarle in anteprima
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent
          showCloseButton={false}
          className="
            fixed inset-0 z-[9999] w-screen h-screen max-w-none 
            sm:max-w-none sm:w-screen sm:h-screen
            bg-[#2d1f16] border-none p-0 overflow-hidden rounded-none
            flex items-center justify-center translate-x-0 translate-y-0
          "
        >
          {/* Custom Close Button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-8 right-8 z-[110] w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <X className="w-6 h-6 text-[#f5f0e8] group-hover:scale-110 transition-transform" />
          </button>

          {selectedItem && (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-12 animate-in fade-in zoom-in duration-500">
              <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
                <div className="relative max-w-5xl max-h-[70vh] group">
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="
                      w-auto h-auto max-w-full max-h-[70vh]
                      shadow-[0_40px_100px_rgba(0,0,0,0.5)] 
                      object-contain transition-transform duration-700
                    "
                  />
                  {/* Subtle border around image */}
                  <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                </div>
                
                <div className="text-center">
                  <h3 className="font-display text-3xl sm:text-4xl text-[#f5f0e8] mb-4">
                    {selectedItem.title}
                  </h3>
                  
                  {/* Navigation Arrows */}
                  <div className="flex items-center justify-center gap-8">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = galleryItems.findIndex(i => i.id === selectedItem.id);
                        const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
                        setSelectedItem(galleryItems[prevIndex]);
                      }}
                      className="w-12 h-12 border border-[#a67c52]/30 rounded-full flex items-center justify-center text-[#a67c52] hover:bg-[#a67c52] hover:text-white transition-all duration-300 group/btn"
                    >
                      <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
                    </button>

                    <div className="h-px w-12 bg-[#a67c52]/20" />

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = galleryItems.findIndex(i => i.id === selectedItem.id);
                        const nextIndex = (currentIndex + 1) % galleryItems.length;
                        setSelectedItem(galleryItems[nextIndex]);
                      }}
                      className="w-12 h-12 border border-[#a67c52]/30 rounded-full flex items-center justify-center text-[#a67c52] hover:bg-[#a67c52] hover:text-white transition-all duration-300 group/btn"
                    >
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
  className?: string;
}

function GalleryCard({ item, onClick, className = '' }: GalleryCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden cursor-pointer bg-[#3d2b1f] ${className}`}
    >
      {/* Skeleton / Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#3d2b1f] animate-pulse flex items-center justify-center">
          <div className="w-10 h-10 border border-[#a67c52]/20 rounded-full" />
        </div>
      )}

      {/* Immagine di sfondo */}
      {item.src && (
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-all duration-1000 ${
            isLoaded ? 'opacity-70 group-hover:opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Overlay scuro per testo */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a120e]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

      {/* Contenuto centrale (lente + titolo) */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="text-center p-6">
          <div className="w-12 h-12 mx-auto mb-4 border border-[#f5f0e8]/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:border-[#a67c52] group-hover:bg-[#a67c52]/10 transition-all duration-500">
            <ZoomIn className="w-5 h-5 text-[#f5f0e8]/60 group-hover:text-white transition-colors" />
          </div>
          <p className="font-display text-lg text-[#f5f0e8]/90 group-hover:text-white transition-colors tracking-wide">
            {item.title}
          </p>
        </div>
      </div>

      {/* Cornice / bordi */}
      <div className="absolute inset-0 border border-white/5 group-hover:border-[#a67c52]/30 transition-colors duration-700" />
    </div>
  );
}
