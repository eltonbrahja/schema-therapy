import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ZoomIn } from 'lucide-react';

// elementi + path immagini in public/img
const galleryItems = [
  {
    id: 1,
    title: 'Il Raccoglitore',
    size: 'large',
    position: 'left',
    src: '/img/raccoglitoreChiuso.jpg',
  },
  {
    id: 2,
    title: 'Scheda Fronte',
    size: 'medium',
    position: 'right',
    src: '/img/NegIpercompensazione1.png',
  },
  {
    id: 3,
    title: 'Scheda Retro',
    size: 'medium',
    position: 'left',
    src: '/img/NegIpercompensazione2.png',
  },
  {
    id: 4,
    title: 'Dettaglio',
    size: 'small',
    position: 'center',
    src: '/img/dettaglio.png', // cambia con il nome reale
  },
  {
    id: 5,
    title: 'Collezione',
    size: 'large',
    position: 'right',
    src: '/img/collezione.png', // cambia con il nome reale
  },
  {
    id: 6,
    title: 'In Uso',
    size: 'medium',
    position: 'left',
    src: '/img/in-uso.png', // cambia con il nome reale
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
              className="h-80 lg:h-96"
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
              className="h-80 lg:h-96"
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
        <DialogContent className="max-w-4xl bg-[#2d1f16] border-[#5c4a3d] p-0 overflow-hidden">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {selectedItem && (
            <div className="bg-[#1a120e] flex flex-col items-center justify-center">
              <div className="w-full bg-[#1a120e] flex items-center justify-center p-6 sm:p-10">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-h-[70vh] w-auto rounded-xl shadow-2xl object-contain"
                />
              </div>
              <div className="px-6 pb-6 text-center">
                <p className="font-display text-xl text-[#f5f0e8]">
                  {selectedItem.title}
                </p>
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
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden cursor-pointer bg-gradient-to-br from-[#3d2b1f] to-[#2d1f16] ${className}`}
    >
      {/* Immagine di sfondo */}
      {item.src && (
        <img
          src={item.src}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-700"
        />
      )}

      {/* Overlay scuro per testo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Contenuto centrale (lente + titolo) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-6">
          <div className="w-12 h-12 mx-auto mb-4 border border-[#f5f0e8]/40 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:border-[#f5f0e8] transition-all">
            <ZoomIn className="w-5 h-5 text-[#f5f0e8]/80 group-hover:text-[#f5f0e8] transition-colors" />
          </div>
          <p className="font-display text-lg text-[#f5f0e8] group-hover:text-white transition-colors">
            {item.title}
          </p>
        </div>
      </div>

      {/* Cornice / bordi */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#a67c52]/40 transition-colors duration-500" />
    </div>
  );
}
