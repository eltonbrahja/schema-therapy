import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToGallery = () => {
    document.getElementById("galleria")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#faf8f5]"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-[10%] w-1.5 h-1.5 bg-[#8b5a3c]/20 rounded-full animate-float" />
        <div className="absolute bottom-1/3 right-[20%] w-2 h-2 border border-[#8b5a3c]/10 rounded-full animate-float delay-400" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(#8b5a3c 1px, transparent 1px), linear-gradient(90deg, #8b5a3c 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <svg
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          <line
            x1="70%"
            y1="0"
            x2="100%"
            y2="40%"
            stroke="#8b5a3c"
            strokeWidth="1"
            strokeOpacity="0.08"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Colonna sinistra */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div
              className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-[#8b5a3c]/5 border border-[#8b5a3c]/10 rounded-full mb-6 sm:mb-8 transition-all duration-700 max-w-full ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-[9px] sm:text-xs font-semibold text-[#8b5a3c] tracking-widest uppercase text-center leading-normal">
                <span className="block sm:hidden">Materiale Professionale</span>
                <span className="hidden sm:block">Materiale professionale di Schema Therapy per psicologi e psicoterapeuti</span>
              </span>
            </div>

            {/* Titolo */}
            <h1
              className={`font-display text-3xl sm:text-5xl lg:text-6xl text-[#2d1f16] mb-4 leading-[1.15] transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Porta gli schemi fuori dalla teoria e <span className="italic text-[#8b5a3c]">dentro la seduta</span>
            </h1>

            {/* Testi */}
            <p
              className={`text-lg text-[#5c4a3d] max-w-xl mb-6 font-light leading-snug transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Un kit professionale con manuale teorico e materiali visivi per fare psicoeducazione
              sugli schemi, lavorare sui mode con maggiore chiarezza e portare la Schema Therapy
              in modo più concreto dentro la seduta.
            </p>

            {/* Benefit Bullets */}
            <ul
              className={`space-y-3 mb-8 transition-all duration-700 delay-250 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                "Ti aiuta a spiegare gli schemi in modo più chiaro e concreto",
                "Ti permette di lavorare sui mode con un supporto visivo immediato",
                "Ti offre materiali strutturati, già pronti da usare in seduta",
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-3.5 h-3.5 text-[#8b5a3c]" />
                  <span className="text-[#4a3a2e] text-sm font-medium leading-none">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div
              className={`flex flex-wrap items-center gap-6 mb-8 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="group bg-[#2d1f16] hover:bg-[#8b5a3c] text-white px-10 py-7 text-sm font-bold tracking-wider uppercase rounded-none transition-all duration-500 shadow-xl shadow-[#2d1f16]/10"
              >
                <Link to="/checkout">
                  Acquista il kit
                  <ArrowDownRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                </Link>
              </Button>
              <button
                onClick={scrollToGallery}
                className="text-[#2d1f16] hover:text-[#8b5a3c] text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-2"
              >
                Guarda il materiale
                <div className="w-8 h-[1px] bg-[#2d1f16]/20" />
              </button>
            </div>

            {/* Proof Bar */}
            <div
              className={`mt-12 pt-8 border-t border-[#8b5a3c]/10 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="h-px w-8 bg-[#8b5a3c]/20 hidden sm:block" />
                <p className="text-[10px] text-[#7a6555] uppercase tracking-[0.2em] font-semibold leading-relaxed">
                  18 schemi maladattivi · 54 immagini illustrative · materiale pronto da usare in seduta
                </p>
              </div>
            </div>


          </div>

          {/* Colonna destra con immagine */}
          <div className="order-1 lg:order-2 relative">
            <div
              className={`relative transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="relative max-w-xl lg:max-w-2xl mx-auto lg:ml-auto">
                {/* carta dietro */}
                <div className="absolute inset-0 translate-x-4 sm:translate-x-8 translate-y-6 sm:translate-y-10 rotate-1 sm:rotate-2 bg-[#d0b9a0] rounded-sm shadow-2xl" />

                {/* tavola principale */}
                <div className="relative bg-[#f5f0e8] rounded-sm shadow-[0_28px_80px_rgba(0,0,0,0.22)] overflow-hidden">
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="border border-[#cbb8a3] rounded-sm overflow-hidden bg-[#f5f0e8]">
                      <img
                        src="/img/immagineHero.webp"
                        alt="Raccoglitore Schema Therapy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* badge Novità */}
                <div className="absolute -bottom-4 left-10 bg-[#2d1f16] text-white px-4 py-2 text-xs uppercase tracking-wider">
                  Novità
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* linea in basso */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5a3c]/20 to-transparent" />
    </section>
  );
}
