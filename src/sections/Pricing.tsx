import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Package, Truck, Shield, Mail, ArrowRight } from 'lucide-react';

const includedItems = [
  'Raccoglitore professionale A4',
  '18 schede teoriche dettagliate',
  '54 immagini illustrative (3 per schema)',
  'Cartoncino plastificato premium',
  'Spedizione inclusa Italia',
];

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
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
      id="prezzo" 
      className="py-32 lg:py-40 bg-[#faf8f5] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8b5a3c]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#a67c52]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span 
            className={`text-xs font-medium text-[#8b5a3c] tracking-[0.3em] uppercase block mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Acquista
          </span>
          <h2 
            className={`font-display text-5xl sm:text-6xl lg:text-7xl text-[#2d1f16] leading-[0.95] mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Prezzo &
            <span className="italic text-[#8b5a3c]"> Ordine</span>
          </h2>
          <p 
            className={`text-lg text-[#5c4a3d] max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Investi nella tua formazione professionale con un materiale didattico 
            di alta qualità che utilizzerai per anni.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Pricing Card */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative bg-white p-8 lg:p-12 shadow-xl">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-px bg-[#8b5a3c]" />
              <div className="absolute top-0 left-0 w-px h-8 bg-[#8b5a3c]" />
              <div className="absolute bottom-0 right-0 w-8 h-px bg-[#8b5a3c]" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-[#8b5a3c]" />

              <div className="mb-8">
                <p className="text-xs text-[#7a6555] uppercase tracking-wider mb-2">
                  Edizione Professionale
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-7xl lg:text-8xl text-[#2d1f16]">€200</span>
                  <span className="text-[#7a6555]">IVA inclusa</span>
                </div>
              </div>

              <p className="text-[#5c4a3d] mb-8 leading-relaxed">
                Prezzo completo per il raccoglitore Schema Therapy con tutto il contenuto. 
                Spedizione inclusa in tutta Italia.
              </p>

              <div className="space-y-4 mb-10">
                <p className="text-xs text-[#7a6555] uppercase tracking-wider">Cosa include:</p>
                {includedItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-5 h-5 bg-[#8b5a3c] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#5c4a3d]">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-[#2d1f16] hover:bg-[#8b5a3c] text-white py-6 text-sm font-medium tracking-wide uppercase rounded-none transition-all duration-500 group"
              >
                <Mail className="mr-2 w-4 h-4" />
                Richiedi Informazioni
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-center text-xs text-[#7a6555] mt-4">
                Rispondiamo entro 24 ore
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { 
                icon: Package, 
                title: 'Prodotto Pronto', 
                desc: 'Ricevi il raccoglitore completo e immediatamente utilizzabile',
                delay: 400
              },
              { 
                icon: Truck, 
                title: 'Spedizione Rapida', 
                desc: 'Consegna in 3-5 giorni lavorativi in tutta Italia',
                delay: 500
              },
              { 
                icon: Shield, 
                title: 'Qualità Garantita', 
                desc: 'Materiali selezionati per una durata nel tempo',
                delay: 600
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`bg-white p-6 border-l-2 border-[#8b5a3c] transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${benefit.delay}ms` }}
              >
                <benefit.icon className="w-6 h-6 text-[#8b5a3c] mb-4" />
                <h3 className="font-display text-xl text-[#2d1f16] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#7a6555] leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}

            {/* Trust badge */}
            <div 
              className={`bg-[#2d1f16] text-white p-6 transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-sm text-center">
                Materiale didattico utilizzato da psicologi e professionisti della salute mentale
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
