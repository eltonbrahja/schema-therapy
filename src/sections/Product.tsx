import { useEffect, useRef, useState } from 'react';
import { Layers, Image, BookOpen, Users } from 'lucide-react';

const features = [
  {
    icon: Layers,
    number: '01',
    title: '18 Schemi',
    description:
      'Tutti gli schemi maladattivi fondamentali della Schema Therapy, completi di definizioni e origini.',
  },
  {
    icon: Image,
    number: '02',
    title: '54 Immagini',
    description:
      'Tre immagini illustrative per ogni schema, stampate su cartoncino plastificato di alta qualità.',
  },
  {
    icon: BookOpen,
    number: '03',
    title: 'Manuale Teorico',
    description:
      'Parte teorica dettagliata per ogni schema, con modalità di intervento clinico.',
  },
  {
    icon: Users,
    number: '04',
    title: 'Per Professionisti',
    description:
      'Ideale per psicologi in formazione ed esperti che vogliono approfondire.',
  },
];

const schemaList = [
  ['Abbandono/Instabilità', 'Autocontrollo/Autodisciplina Insufficiente', 'Autosacrificio'],
  ['Deprivazione Emotiva', 'Dipendenza/Incompetenza', 'Fallimento'],
  ['Grandiosità', 'Inadeguatezza/Vergogna', 'Inibizione Emotiva'],
  ['Invischiamento', 'Esclusione Sociale/Alienazione', 'Negativismo/Pessimismo'],
  ['Punitività', 'Ricerca di Approvazione', 'Sfiducia/Abuso'],
  ['Sottomissione', 'Standard Rigidi/Ipercriticità', 'Vulnerabilità al Pericolo e alle Malattie'],
];

export function Product() {
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
      id="prodotto"
      className="py-32 lg:py-40 bg-[#faf8f5] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f0ebe3]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          <div>
            <span
              className={`text-xs font-medium text-[#8b5a3c] tracking-[0.3em] uppercase block mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Il Contenuto
            </span>
            <h2
              className={`font-display text-5xl sm:text-6xl lg:text-7xl text-[#2d1f16] leading-[0.95] transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Cosa trovi
              <span className="block italic text-[#8b5a3c]">nel kit</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-4">
            <p
              className={`text-lg text-[#5c4a3d] leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Un materiale didattico completo e professionale, pensato per accompagnarti
              nella comprensione e nell&apos;applicazione della Schema Therapy in contesto
              clinico.
            </p>

            <p
              className={`text-lg text-[#5c4a3d] leading-relaxed transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Il presente lavoro raccoglie i 18 schemi maladattivi precoci, ciascuno
              descritto in modo dettagliato con la definizione, l&apos;origine e i fattori
              di sviluppo, il bisogno emotivo frustrato, la famiglia tipica, i pensieri
              tipici, le emozioni frequenti e i comportamenti nell&apos;età adulta.
            </p>

            <p
              className={`text-lg text-[#5c4a3d] leading-relaxed transition-all duration-700 delay-350 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Per ogni schema vengono inoltre presentate le tipologie di presentazione,
              la funzione dello schema, le strategie di coping maladattive, i modi tipici
              attivati, cosa farebbe l&apos;Adulto Sano, i percorsi di cura e le frasi di
              guarigione.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[#8b5a3c]/10 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-[#faf8f5] p-8 lg:p-12 hover:bg-white transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs text-[#c9b8a5] font-medium">
                  {feature.number}
                </span>
                <feature.icon className="w-6 h-6 text-[#8b5a3c] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display text-2xl text-[#2d1f16] mb-3 group-hover:text-[#8b5a3c] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Schema List Section */}
        <div
          className={`relative transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#8b5a3c]/30 via-[#8b5a3c]/10 to-transparent" />

          <div className="pl-4 sm:pl-8 lg:pl-16">
            <h3 className="font-display text-3xl lg:text-4xl text-[#2d1f16] mb-4">
              I 18 Schemi
              <span className="text-[#8b5a3c] italic"> Maladattivi</span>
            </h3>
            <p className="text-[#5c4a3d] mb-12 max-w-2xl">
              Ogni schema include una spiegazione teorica dettagliata e tre immagini
              illustrative che aiutano a comprendere e comunicare il concetto ai pazienti.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-xl md:max-w-none mx-auto md:mx-0">
              {schemaList.flat().map((schema, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 border border-[#e8e0d5] hover:border-[#8b5a3c] hover:bg-white transition-all duration-300"
                >
                  <span className="text-xs text-[#c9b8a5] font-mono w-6">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-[#5c4a3d] group-hover:text-[#2d1f16] transition-colors">
                    {schema}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
