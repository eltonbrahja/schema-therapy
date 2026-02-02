import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Il raccoglitore', image: null },
  { id: 2, title: 'Scheda fronte', image: '/img/Negatività Ipercompensazione 1.png' },
  { id: 3, title: 'Scheda retro', image: '/img/Negatività Ipercompensazione 2.png' },
  { id: 4, title: 'Dettaglio', image: null },
  { id: 5, title: 'Collezione', image: null },
  { id: 6, title: 'In uso', image: null },
];

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[number] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
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
          backgroundImage: `radial-gradient(circle at 1px 1px, #c9b8a5 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
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
            Ecco come si presenta il raccoglitore Schema Therapy: copertina, schede fronte e retro,
            e alcuni dettagli del materiale.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* ROW 1: raccoglitore + due schede 9:19 affiancate */}
          <div
            className={`col-span-12 lg:col-span-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <GalleryCard
              item={galleryItems[0]}
              onClick={() => setSelectedItem(galleryItems[0])}
              className="h-80 lg:h-[22rem]"
            />
          </div>

          <div
            className={`col-span-12 lg:col-span-6 transition-all duration-700 delay-350 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="flex h-80 lg:h-[22rem] items-center justify-center gap-8">
              {/* Scheda fronte */}
              <div className="h-full flex items-center justify-center">
                <div className="aspect-[9/19] h-full">
                  <GalleryCard
                    item={galleryItems[2 - 1]} // Scheda fronte
                    onClick={() => setSelectedItem(galleryItems[2 - 1])}
                    className="h-full"
                  />
                </div>
              </div>
              {/* Scheda retro */}
              <div className="h-full flex items-center justify-center">
                <div className="aspect-[9/19] h-full">
                  <GalleryCard
                    item={galleryItems[3 - 1]} // Scheda retro
                    onClick={() => setSelectedItem(galleryItems[3 - 1])}
                    className="h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2: Dettaglio + In uso */}
          <div
            className={`col-span-12 lg:col-span-6 transition-all duration-700 delay-450 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <GalleryCard
              item={galleryItems[4 - 1]}
              onClick={() => setSelectedItem(galleryItems[4 - 1])}
              className="h-72 lg:h-80"
            />
          </div>
          <div
            className={`col-span-12 lg:col-span-6 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <GalleryCard
              item={galleryItems[6 - 1]}
              onClick={() => setSelectedItem(galleryItems[6 - 1])}
              className="h-72 lg:h-80"
            />
          </div>

          {/* ROW 3: Collezione */}
          <div
            className={`col-span-12 transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <GalleryCard
              item={galleryItems[5 - 1]}
              onClick={() => setSelectedItem(galleryItems[5 - 1])}
              className="h-72 lg:h-96"
            />
          </div>
        </div>

        {/* Nota */}
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

            {/* LIGHTBOX: immagine a tutto schermo, senza zoom */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="border-none bg-transparent shadow-none p-0">
          {selectedItem && (
            <div className="fixed inset-0 z-40 bg-black/80 flex items-center justify-center">
              <div className="relative">
                {/* immagine */}
                {selectedItem.image ? (
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="max-h-[92vh] max-w-[92vw]"
                  />
                ) : (
                  <div className="w-[60vw] h-[60vh] flex flex-col items-center justify-center p-12">
                    <div className="w-20 h-20 mx-auto mb-6 border-2 border-[#8b5a3c]/40 rounded-full flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-[#f5f0e8]" />
                    </div>
                    <p className="font-display text-2xl text-[#f5f0e8]">{selectedItem.title}</p>
                    <p className="text-sm text-[#c9b8a5] mt-2">Immagine in arrivo</p>
                  </div>
                )}

                {/* X agganciata alla card */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute -top-4 right-[-3rem] z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

    </section>
  );
}

/* ------- CARD GALLERIA ------- */

interface GalleryCardProps {
  item: (typeof galleryItems)[number];
  onClick: () => void;
  className?: string;
}

function GalleryCard({ item, onClick, className = '' }: GalleryCardProps) {
  const isCard = item.title.startsWith('Scheda'); // solo fronte/retro

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden cursor-pointer bg-[#2d1f16] rounded-xl ${className}`}
    >
      {/* Immagine o background */}
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className={
            isCard
              ? 'h-full w-auto mx-auto object-contain transition-transform duration-700 group-hover:scale-105'
              : 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
          }
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#3d2b1f] to-[#2d1f16]" />
      )}

      {/* Overlay con titolo */}
      <div className="absolute inset-0 flex flex-col justify-between">
        <div className="p-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="inline-flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm w-8 h-8">
            <ZoomIn className="w-4 h-4 text-[#f5f0e8]" />
          </div>
        </div>
        <div className="mt-auto bg-gradient-to-t from-black/70 via-black/40 to-transparent px-4 pb-4 pt-8">
          <p className="font-display text-base text-[#f5f0e8] drop-shadow-sm">
            {item.title}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 border border-transparent group-hover:border-[#a67c52]/30 transition-colors duration-500" />
    </div>
  );
}
