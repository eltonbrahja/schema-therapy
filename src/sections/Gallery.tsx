import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Il Raccoglitore', size: 'large', position: 'left' },
  { id: 2, title: 'Scheda Fronte', size: 'medium', position: 'right' },
  { id: 3, title: 'Scheda Retro', size: 'medium', position: 'left' },
  { id: 4, title: 'Dettaglio', size: 'small', position: 'center' },
  { id: 5, title: 'Collezione', size: 'large', position: 'right' },
  { id: 6, title: 'In Uso', size: 'medium', position: 'left' },
];

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
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
          backgroundImage: `radial-gradient(circle at 1px 1px, #c9b8a5 1px, transparent 0)`,
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
            Le immagini verranno sostituite con le foto reali del prodotto.
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
            <div className="aspect-video bg-gradient-to-br from-[#3d2b1f] to-[#2d1f16] flex items-center justify-center p-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 border-2 border-[#8b5a3c]/30 rounded-full flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-[#a67c52]" />
                </div>
                <p className="font-display text-2xl text-[#f5f0e8]">{selectedItem.title}</p>
                <p className="text-sm text-[#7a6555] mt-2">[Immagine placeholder]</p>
                <p className="text-xs text-[#a67c52] mt-4">Verrà sostituita con foto reale</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

interface GalleryCardProps {
  item: typeof galleryItems[0];
  onClick: () => void;
  className?: string;
}

function GalleryCard({ item, onClick, className = '' }: GalleryCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden cursor-pointer bg-gradient-to-br from-[#3d2b1f] to-[#2d1f16] ${className}`}
    >
      {/* Placeholder content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-6">
          <div className="w-12 h-12 mx-auto mb-4 border border-[#8b5a3c]/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:border-[#a67c52] transition-all">
            <ZoomIn className="w-5 h-5 text-[#7a6555] group-hover:text-[#a67c52] transition-colors" />
          </div>
          <p className="font-display text-lg text-[#c9b8a5] group-hover:text-[#f5f0e8] transition-colors">
            {item.title}
          </p>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#8b5a3c]/0 group-hover:bg-[#8b5a3c]/10 transition-all duration-500" />
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-[#a67c52]/50 to-transparent transform translate-x-4" />
        <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-[#a67c52]/50 to-transparent transform -translate-y-4" />
      </div>

      {/* Border on hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#a67c52]/30 transition-colors duration-500" />
    </div>
  );
}
