import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownRight, Sparkles } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProduct = () => {
    document.getElementById('prodotto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#faf8f5]"
    >
      {/* Abstract geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle */}
        <div 
          className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-[#8b5a3c]/10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        />
        <div 
          className={`absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full border border-[#8b5a3c]/5 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        />
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-[10%] w-3 h-3 bg-[#8b5a3c]/30 rounded-full animate-float" />
        <div className="absolute top-1/3 left-[15%] w-2 h-2 bg-[#a67c52]/40 rounded-full animate-float delay-200" />
        <div className="absolute bottom-1/3 right-[20%] w-4 h-4 border border-[#8b5a3c]/20 rounded-full animate-float delay-400" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#8b5a3c 1px, transparent 1px), linear-gradient(90deg, #8b5a3c 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Diagonal line */}
        <svg 
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          <line 
            x1="70%" y1="0" x2="100%" y2="40%"
            stroke="#8b5a3c"
            strokeWidth="1"
            strokeOpacity="0.08"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 bg-[#8b5a3c]/5 border border-[#8b5a3c]/10 rounded-full mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#8b5a3c]" />
              <span className="text-xs font-medium text-[#8b5a3c] tracking-widest uppercase">
                Edizione Professionale 2026
              </span>
            </div>

            {/* Main Title */}
              <h1 
                className={`font-display text-6xl sm:text-7xl lg:text-8xl text-[#2d1f16] mb-6 leading-[0.95] transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Schema
                <span className="block italic text-[#8b5a3c]">Therapy</span>
              </h1>

              <h5
                className={`font-display text-4xl sm:text-5xl lg:text-6xl text-[#2d1f16] mb-6 leading-[0.95] transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Edizione professionale
              </h5>

              {/* Subtitle */}
              <p 
                className={`text-lg text-[#5c4a3d] max-w-md mb-8 font-light leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Un raccoglitore di schemi visivi per psicologi e psicoterapeuti che lavorano con la Schema Therapy.
                <span className="text-[#8b5a3c] font-medium"> 18 schemi</span>,
                <span className="text-[#8b5a3c] font-medium"> 54 immagini</span>
                fronte‑retro in cartoncino plastificato.
              </p>

              {/* CTA */}
              <div 
                className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Button
                  onClick={scrollToProduct}
                  size="lg"
                  className="group bg-[#2d1f16] hover:bg-[#8b5a3c] text-white px-8 py-6 text-sm font-medium tracking-wide uppercase rounded-none transition-all duration-500"
                >
                  Vedi il contenuto
                  <ArrowDownRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-[#2d1f16]/20 text-[#2d1f16] hover:bg-[#2d1f16] hover:text-white px-8 py-6 text-sm font-medium tracking-wide uppercase rounded-none transition-all duration-500"
                >
                  Scrivici
                </Button>
              </div>

            {/* Stats */}
            <div 
              className={`flex gap-12 mt-16 pt-8 border-t border-[#8b5a3c]/10 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div>
                <p className="font-display text-4xl text-[#8b5a3c]">18</p>
                <p className="text-xs text-[#7a6555] uppercase tracking-wider mt-1">Schemi</p>
              </div>
              <div>
                <p className="font-display text-4xl text-[#8b5a3c]">54</p>
                <p className="text-xs text-[#7a6555] uppercase tracking-wider mt-1">Immagini</p>
              </div>
              <div>
                <p className="font-display text-4xl text-[#8b5a3c]">€---</p>
                <p className="text-xs text-[#7a6555] uppercase tracking-wider mt-1">Prezzo</p>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="order-1 lg:order-2 relative">
            <div 
              className={`relative transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              {/* Main card visual */}
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto">
                {/* Background card 1 */}
                <div className="absolute inset-0 bg-[#c9b8a5] rounded-sm transform rotate-3 translate-x-4 translate-y-4" />
                {/* Background card 2 */}
                <div className="absolute inset-0 bg-[#a67c52] rounded-sm transform -rotate-2 translate-x-2 translate-y-2" />
                {/* Main card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e8] to-[#e8e0d5] rounded-sm shadow-2xl flex flex-col items-center justify-center p-8">
                  {/* Card content */}
                  <div className="w-full h-full border-2 border-[#8b5a3c]/20 rounded-sm flex flex-col items-center justify-center p-6">
                    <div className="text-center">
                      <p className="font-display text-5xl text-[#8b5a3c] mb-2">ST</p>
                      <div className="w-16 h-px bg-[#8b5a3c]/30 mx-auto mb-4" />
                      <p className="text-xs text-[#7a6555] uppercase tracking-widest">Schema Therapy</p>
                      <p className="text-[10px] text-[#a67c52] mt-4">Edizione Professionale</p>
                    </div>
                    
                    {/* Decorative elements on card */}
                    <div className="absolute top-6 left-6 w-2 h-2 bg-[#8b5a3c]/30 rounded-full" />
                    <div className="absolute top-6 right-6 w-2 h-2 bg-[#8b5a3c]/30 rounded-full" />
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#8b5a3c]/30 rounded-full" />
                    <div className="absolute bottom-6 right-6 w-2 h-2 bg-[#8b5a3c]/30 rounded-full" />
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#2d1f16] text-white px-4 py-2 text-xs uppercase tracking-wider">
                  Nuovo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5a3c]/20 to-transparent" />
    </section>
  );
}
