import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Mail, ArrowRight, Shield, Truck, ChevronRight, ChevronLeft, X, ZoomIn, ArrowLeft, CheckCircle } from "lucide-react";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const galleryItems = [
  {
    id: 1,
    title: 'Il Raccoglitore',
    desc: 'Elegante raccoglitore professionale A4.',
    src: '/img/fotoCopertina.webp',
  },
  {
    id: 2,
    title: 'Scheda Fronte',
    desc: 'Nome, numero e 3 illustrazioni chiare.',
    src: '/img/fronte.webp',
  },
  {
    id: 3,
    title: 'Scheda Retro',
    desc: 'Spiegazione teorico-clinica completa.',
    src: '/img/retro.webp',
  },
  {
    id: 4,
    title: 'Dettagli chiari',
    desc: 'Copri ogni aspetto dello schema in seduta.',
    src: '/img/testo.webp',
  },
  {
    id: 5,
    title: 'La Collezione',
    desc: 'Tutti i 18 schemi maladattivi pronti all\'uso.',
    src: '/img/collezione.webp',
  },
  {
    id: 6,
    title: 'In Uso Clinico',
    desc: 'Il kit aperto e pronto per la terapia.',
    src: '/img/kitAperto.webp',
  },
];

const schemaList = [
  'Abbandono/Instabilità', 'Autocontrollo/Autodisciplina Insufficiente', 'Autosacrificio',
  'Deprivazione Emotiva', 'Dipendenza/Incompetenza', 'Fallimento',
  'Grandiosità', 'Inadeguatezza/Vergogna', 'Inibizione Emotiva',
  'Invischiamento', 'Esclusione Sociale/Alienazione', 'Negativismo/Pessimismo',
  'Punitività', 'Ricerca di Approvazione', 'Sfiducia/Abuso',
  'Sottomissione', 'Standard Rigidi/Ipercriticità', 'Vulnerabilità al Pericolo e alle Malattie'
];

const advantages = [
  {
    title: "Psicoeducazione immediata",
    desc: "Uso delle schede durante la seduta per spiegare gli schemi in modo visivo, riducendo confusione e resistenza."
  },
  {
    title: "Supporto visivo per i mode",
    desc: "Immagini illustrate che aiutano i pazienti a riconoscere e nominare i propri stati interni."
  },
  {
    title: "Materiale pronto all'uso",
    desc: "Tutto è già stampato, plastificato e organizzato nel raccoglitore, pronto per essere usato in studio."
  },
  {
    title: "Coerenza tra sedute",
    desc: "Schede e immagini favoriscono continuità tra una seduta e l'altra, anche quando il paziente porta a casa concetti chiave."
  }
];

const includedFeatures = [
  {
    name: "Raccoglitore professionale A4 ad anelli",
    benefit: "organizzazione chiara e accesso rapido al materiale durante la seduta."
  },
  {
    name: "18 schede teoriche e cliniche",
    benefit: "una scheda per ogni schema mal adattivo, con bisogni, coping e modalità sane."
  },
  {
    name: "54 immagini illustrative (3 per ciascun schema)",
    benefit: "supporti visivi per lavorare sui mode e sui vissuti del paziente."
  },
  {
    name: "Cartoncino plastificato premium a lunga durata",
    benefit: "materiale resistente, pensato per l’uso quotidiano in studio."
  },
  {
    name: "Spedizione inclusa in tutta Italia",
    benefit: "nessun costo aggiuntivo alla cassa."
  }
];

const targetProfiles = [
  {
    role: "Psicoterapeuti formati in Schema Therapy",
    desc: "Uno strumento visivo indispensabile per arricchire il lavoro clinico quotidiano con materiali strutturati ad alta definizione."
  },
  {
    role: "Psicoterapeuti in formazione",
    desc: "Ideale per integrare i concetti teorici e avere una guida clinica a portata di mano direttamente durante le prime sedute."
  },
  {
    role: "Psicologi e Clinici",
    desc: "Facilita la psicoeducazione iniziale sugli schemi maladattivi precoci riducendo le barriere terminologiche con i pazienti."
  },
  {
    role: "Centri clinici e studi associati",
    desc: "Materiale didattico ed elegante da poter condividere tra colleghi dello stesso studio per uniformare la comunicazione."
  }
];

const casiUso = [
  "Presentazione iniziale degli schemi al paziente durante la fase diagnostica.",
  "Lavoro sui mode e riconoscimento degli stati emotivi attivi.",
  "Assegnazione di compiti a casa (homework) visivi tramite la revisione delle schede.",
  "Revisione degli schemi attivati in momenti di crisi."
];

const faqList = [
  {
    q: "Quando verrà spedito il kit acquistato in prevendita?",
    a: "Le spedizioni dei kit acquistati in prevendita partiranno subito dopo il rilascio ufficiale, previsto entro il mese di settembre. Ti invieremo un codice di tracciamento non appena il pacco lascerà il nostro magazzino."
  },
  {
    q: "Posso usarlo con pazienti adulti e adolescenti?",
    a: "Sì, il linguaggio teorico e clinico sul retro delle schede è progettato per terapisti professionisti, mentre le illustrazioni sul fronte sono ideate per essere evocative e adatte sia a pazienti adulti che ad adolescenti."
  },
  {
    q: "Esiste una versione digitale del materiale?",
    a: "Attualmente il kit è concepito esclusivamente come strumento fisico e pratico da studio. Riteniamo che l'interazione tattile con le schede cartacee offra un valore clinico superiore durante la seduta."
  },
  {
    q: "Come gestite la spedizione e i resi?",
    a: "La spedizione in Italia è sempre gratuita e inclusa nel prezzo. Se per qualsiasi motivo non sarai soddisfatto del materiale, potrai richiedere un reso gratuito entro 14 giorni dalla consegna del raccoglitore."
  },
  {
    q: "È adatto anche a chi è alle prime armi con la Schema Therapy?",
    a: "Assolutamente sì. Il kit offre un riassunto estremamente strutturato per ciascuno schema (bisogni frustrati, coping, frasi di guarigione), rendendolo un'ottima guida pratica di consultazione rapida."
  }
];

export default function Prevendita() {
  const [email, setEmail] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[number] | null>(null);

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Grazie! Ti avviseremo non appena il prodotto sarà disponibile.");
    setEmail("");
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#2d1f16] font-sans selection:bg-[#8b5a3c]/10 selection:text-[#8b5a3c]">
      <Toaster position="top-center" />

      {/* Hero Banner Prevendita */}
      <div className="bg-[#2d1f16] text-[#f5f0e8] py-3 text-center text-[13px] sm:text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2 px-4 border-b border-[#8b5a3c]/20">
        <span>PREVENDITA LIMITATA: OGGI LO PRENDI A €90 INVECE DI €120</span>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        
        {/* 1. HERO SECTION */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Colonna Sinistra / Destra in base all'ordine: Testi e CTA (Prima su mobile) */}
            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2 text-center lg:text-left">
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#8b5a3c] font-bold block mb-1">
                Esclusiva prevendita
              </span>
              
              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl text-[#2d1f16] leading-[1.15] font-bold">
                Il kit pratico di Schema Therapy per le tue sedute
              </h1>

              <p className="text-sm sm:text-base text-[#5c4a3d] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Schede cliniche e materiali visivi pronti all’uso per spiegare gli schemi in modo più chiaro e concreto.
              </p>

              {/* Bullet list (max 3) */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#5c4a3d] text-left inline-block lg:block max-w-md mx-auto lg:mx-0">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#8b5a3c] shrink-0 mt-0.5" />
                  <span>18 schede cliniche pronte all’uso</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#8b5a3c] shrink-0 mt-0.5" />
                  <span>54 immagini illustrative per il lavoro in seduta</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#8b5a3c] shrink-0 mt-0.5" />
                  <span>Raccoglitore professionale A4 incluso</span>
                </li>
              </ul>

              {/* Blocco CTA Hero */}
              <div className="pt-3">
                <Button
                  asChild
                  className="w-full sm:w-auto min-h-[48px] bg-[#2d1f16] hover:bg-[#8b5a3c] text-white py-4 px-10 text-sm font-bold tracking-wide uppercase rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <Link to="/prevendita-acquisto">
                    Acquista ora in prevendita
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <div className="mt-3.5 flex items-center justify-center lg:justify-start gap-5 text-[10px] sm:text-xs text-[#7a6555] font-medium">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-[#8b5a3c]" />
                    <span>Checkout sicuro</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#8b5a3c]" />
                    <span>Spedizione gratuita in Italia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonna Sinistra / Destra: Immagine slider (Seconda su mobile) */}
            <div className="lg:col-span-6 w-full order-2 lg:order-1">
              <div className="bg-white p-3 sm:p-4 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-[#e8e0d5] relative group">
                <div 
                  className="relative aspect-[4/3] overflow-hidden bg-[#faf8f5] cursor-zoom-in group/img"
                  onClick={() => setSelectedItem(galleryItems[activeSlide])}
                >
                  <img
                    src={galleryItems[activeSlide].src}
                    alt={galleryItems[activeSlide].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                  
                  {/* Lente di ingrandimento all'hover */}
                  <div className="absolute top-4 right-4 bg-white/85 p-2 rounded-full opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 shadow-sm z-10">
                    <ZoomIn className="w-4 h-4 text-[#2d1f16]" />
                  </div>
                  
                  {/* Overlay gradiente */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2d1f16]/90 via-[#2d1f16]/30 to-transparent p-5 text-white flex flex-col justify-end">
                    <h3 className="font-display text-base sm:text-lg font-bold mb-0.5">
                      {galleryItems[activeSlide].title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-white/80">
                      {galleryItems[activeSlide].desc}
                    </p>
                  </div>

                  {/* Pulsanti navigazione carosello */}
                  <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 border border-[#e8e0d5] text-[#2d1f16] hover:bg-[#8b5a3c] hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm z-20"
                  >
                    <ChevronLeft className="w-4.5 h-4.5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 border border-[#e8e0d5] text-[#2d1f16] hover:bg-[#8b5a3c] hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm z-20"
                  >
                    <ChevronRight className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* Indicatori slide carosello */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {galleryItems.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeSlide === i ? "w-6 bg-[#8b5a3c]" : "w-1.5 bg-[#e8e0d5]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. SEZIONE VANTAGGI / BENEFICI CHIAVE */}
        <section className="py-16 border-t border-[#e8e0d5]">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-[#2d1f16] font-bold">
              Perché questo kit ti aiuta nella pratica clinica
            </h2>
            <p className="text-sm text-[#7a6555] mt-2 max-w-xl mx-auto">
              Ottimizza il tempo in seduta ed eleva l&apos;efficacia terapeutica grazie al supporto visivo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="bg-white p-6 border border-[#e8e0d5] hover:border-[#8b5a3c] shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-[#8b5a3c]/10 flex items-center justify-center text-[#8b5a3c] mb-4 font-bold font-mono">
                  0{index + 1}
                </div>
                <h3 className="font-display text-lg text-[#2d1f16] font-bold mb-2">{adv.title}</h3>
                <p className="text-xs sm:text-sm text-[#5c4a3d] leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. COSA INCLUDE IL KIT */}
        <section className="py-16 border-t border-[#e8e0d5]">
          <div className="mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-[#2d1f16] font-bold">
              Cosa include il tuo kit
            </h2>
            <p className="text-sm text-[#7a6555] mt-2">
              Ogni elemento è pensato per facilitare la Schema Therapy in seduta.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Lista componenti */}
            <div className="lg:col-span-7 space-y-4">
              {includedFeatures.map((feat, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white border border-[#e8e0d5]">
                  <div className="bg-[#8b5a3c] text-white w-5 h-5 rounded-sm flex items-center justify-center shrink-0 text-xs mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2d1f16] text-sm sm:text-base">{feat.name}</h4>
                    <p className="text-xs sm:text-sm text-[#7a6555] mt-1">{feat.benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA e Prezzi + Scarsità */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-[#e8e0d5] shadow-lg relative">
              <div className="absolute top-0 left-0 w-8 h-px bg-[#8b5a3c]" />
              <div className="absolute top-0 left-0 w-px h-8 bg-[#8b5a3c]" />
              
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-[#8b5a3c]/10 text-[#8b5a3c] px-2.5 py-1">
                  OFFERTA ATTIVA
                </span>
                <div className="flex items-baseline gap-3 mt-4">
                  <span className="font-display text-5xl text-[#2d1f16] font-bold">
                    €90
                  </span>
                  <span className="text-sm text-[#7a6555] line-through">
                    €120
                  </span>
                  <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5">
                    Risparmi €30
                  </span>
                </div>
                <p className="text-xs text-[#7a6555] mt-1">IVA inclusa, spedizione gratuita in Italia</p>

              </div>

              <Button
                asChild
                className="w-full bg-[#2d1f16] hover:bg-[#8b5a3c] text-white py-6 text-sm font-semibold tracking-wide uppercase rounded-lg transition-all duration-300 group"
              >
                <Link to="/prevendita-acquisto">
                  Acquista ora in prevendita
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

          </div>

          {/* LISTA COMPATTA DEGLI SCHEMI INCLUSA QUI PER CONTINUITÀ */}
          <div className="mt-12 bg-white p-6 border border-[#e8e0d5]">
            <h3 className="font-display text-lg text-[#2d1f16] font-bold mb-4 text-center sm:text-left">
              I 18 Schemi Maladattivi Inclusi
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-xs text-[#5c4a3d]">
              {schemaList.map((schema, index) => (
                <div key={index} className="flex items-center gap-2 py-1.5 border-b border-[#fbf7f2]">
                  <span className="text-[10px] text-[#c9b8a5] font-mono">{String(index + 1).padStart(2, '0')}</span>
                  <span className="font-medium">{schema}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SEZIONE PER CHI È + CASI D'USO */}
        <section className="py-16 border-t border-[#e8e0d5]">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-[#2d1f16] font-bold">
              A chi è rivolto questo kit
            </h2>
            <p className="text-sm text-[#7a6555] mt-2">
              Progettato per adattarsi perfettamente a diverse esigenze cliniche e livelli di esperienza.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {targetProfiles.map((prof, index) => (
              <div key={index} className="bg-white p-6 border border-[#e8e0d5]">
                <h3 className="font-semibold text-[#2d1f16] text-base mb-2">{prof.role}</h3>
                <p className="text-xs sm:text-sm text-[#7a6555] leading-relaxed">{prof.desc}</p>
              </div>
            ))}
          </div>

          {/* Sottosezione casi d'uso */}
          <div className="bg-[#faf8f5] p-6 sm:p-8 border border-[#e8e0d5] max-w-4xl mx-auto">
            <h3 className="font-display text-xl text-[#2d1f16] font-bold mb-4 text-center">
              Come puoi usarlo in seduta
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {casiUso.map((caso, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-[#8b5a3c] font-bold">{index + 1}.</span>
                  <p className="text-xs sm:text-sm text-[#5c4a3d] leading-normal">{caso}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 6. FAQ CON ACCORDION */}
        <section className="py-16 border-t border-[#e8e0d5]">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-[#2d1f16] font-bold">
              Domande frequenti
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqList.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-white border border-[#e8e0d5] px-4">
                  <AccordionTrigger className="text-[#2d1f16] hover:text-[#8b5a3c] text-sm sm:text-base font-semibold py-4 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5c4a3d] text-xs sm:text-sm leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Ultima CTA sotto FAQ */}
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-[#2d1f16] hover:bg-[#8b5a3c] text-white py-6 px-10 text-sm font-semibold tracking-wide uppercase rounded-lg transition-all duration-300 group"
            >
              <Link to="/prevendita-acquisto">
                Acquista ora in prevendita
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-[#7a6555]">
              <div className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#8b5a3c]" />
                <span>Checkout sicuro</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#8b5a3c]" />
                <span>Spedizione gratuita</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. EMAIL CAPTURE */}
        <section className="py-16 border-t border-[#e8e0d5]">
          <div className="bg-[#2d1f16] text-[#f5f0e8] p-8 sm:p-12 text-center max-w-3xl mx-auto rounded-2xl shadow-lg">
            <Mail className="w-8 h-8 text-[#a67c52] mx-auto mb-4" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
              Vuoi essere avvisato quando il kit sarà disponibile?
            </h2>
            <p className="text-xs sm:text-sm text-[#c9b8a5] max-w-xl mx-auto mb-6 leading-relaxed">
              Se preferisci non acquistare ora, lasciaci la tua email e ti avviseremo quando il kit sarà disponibile.
            </p>
            <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="La tua email"
                required
                className="flex-grow px-4 py-3 text-xs text-[#2d1f16] focus:outline-none focus:ring-2 focus:ring-[#8b5a3c] rounded-lg"
              />
              <button
                type="submit"
                className="bg-[#8b5a3c] hover:bg-white hover:text-[#2d1f16] text-[#f5f0e8] text-xs font-semibold px-6 py-3 uppercase tracking-wider transition-colors duration-300 rounded-lg shrink-0"
              >
                Avvisami quando è disponibile
              </button>
            </form>
            <p className="text-[10px] text-[#7a6555] mt-3">
              Nessuno spam, solo informazioni sul kit di Schema Therapy.
            </p>
          </div>
        </section>

      </main>

      <footer className="w-full py-8 border-t border-[#e8e0d5] bg-white text-center text-xs text-[#7a6555]">
        <p>© {new Date().getFullYear()} Schema Therapy. Tutti i diritti riservati.</p>
      </footer>

      {/* Lightbox */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent
          showCloseButton={false}
          className="
            fixed inset-0 z-[9999] w-screen h-screen max-w-none 
            sm:max-w-none sm:w-screen sm:h-screen
            bg-[#2d1f16]/95 border-none p-0 overflow-hidden rounded-none
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
    </div>
  );
}
