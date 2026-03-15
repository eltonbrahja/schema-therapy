// src/pages/Checkout.tsx
import { ExternalLink, Shield, Truck } from "lucide-react";

function Checkout() {
  // Sostituisci con il link reale Amazon del kit
  const AMAZON_URL = "https://www.amazon.it/dp/TUO_ASIN";

  const handleGoToAmazon = () => {
    window.open(AMAZON_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d1f16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <header className="mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#8b5a3c] mb-3">
              Acquisto tramite Amazon
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#2d1f16] leading-tight">
              Completa l&apos;ordine
              <span className="block italic text-[#8b5a3c]">
                in modo sicuro
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#5c4a3d] mt-4 max-w-xl">
              Per l&apos;acquisto del kit utilizziamo la piattaforma di pagamento
              e spedizione di Amazon. Paghi con il tuo account Amazon, in un
              ambiente protetto e familiare, con consegna tracciata in pochi
              giorni.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-xs text-[#7a6555]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#8b5a3c]" />
              <span>Pagamento protetto tramite Amazon</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#8b5a3c]" />
              <span>Spedizione rapida e tracciata in tutta Italia</span>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Riepilogo ordine */}
          <section className="lg:col-span-2 bg-white p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-px bg-[#8b5a3c]" />
            <div className="absolute top-0 left-0 w-px h-8 bg-[#8b5a3c]" />
            <div className="absolute bottom-0 right-0 w-8 h-px bg-[#8b5a3c]" />
            <div className="absolute bottom-0 right-0 w-px h-8 bg-[#8b5a3c]" />

            <h2 className="font-display text-xl mb-6">Riepilogo del kit</h2>

            <div className="border border-[#e0d4c8] p-5 mb-8 bg-[#fbf7f2]">
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-[#2d1f16]">
                    Kit Schema Therapy – Edizione Professionale 2026
                  </p>
                  <p className="text-xs text-[#7a6555] mt-1 max-w-md">
                    Raccoglitore A4 con 18 schede teoriche e 54 immagini in
                    cartoncino plastificato, pensato per il lavoro clinico con
                    pazienti in Schema Therapy.
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-3xl text-[#2d1f16]">
                    €180
                  </p>
                  <p className="text-[11px] text-[#7a6555]">
                    IVA e spedizione incluse*
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-xs text-[#5c4a3d]">
                <div className="space-y-1">
                  <p>• Pagamento tramite il tuo account Amazon</p>
                  <p>• Carte, addebito e altri metodi supportati da Amazon</p>
                </div>
                <div className="space-y-1">
                  <p>• Spedizione rapida e tracciata in tutta Italia</p>
                  <p>• Gestione ordini e resi direttamente dal pannello Amazon</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#5c4a3d] mb-6">
              Cliccando sul pulsante qui sotto verrai reindirizzato alla pagina
              ufficiale del kit su Amazon. Da lì potrai completare il pagamento
              in modo sicuro, come ogni altro acquisto Amazon. Nessun dato di
              pagamento viene raccolto o memorizzato da questo sito.
            </p>

            <button
              type="button"
              onClick={handleGoToAmazon}
              className="w-full bg-[#2d1f16] hover:bg-[#8b5a3c] text-white py-4 px-4 text-sm font-medium tracking-[0.15em] uppercase rounded-none transition-all duration-500 flex items-center justify-center"
            >
              Vai alla pagina Amazon
              <ExternalLink className="ml-2 w-4 h-4" />
            </button>

            <p className="text-[11px] text-[#7a6555] mt-4 text-center">
              *Il prezzo finale, le opzioni di spedizione e le tempistiche
              precise sono sempre indicate e confermate direttamente su Amazon
              prima del pagamento.
            </p>
          </section>

          {/* Colonna destra: rassicurazioni */}
          <aside className="space-y-6">
            <div className="bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h3 className="font-display text-lg mb-2">
                Pagamento e sicurezza
              </h3>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                L&apos;intera transazione avviene su Amazon, all&apos;interno del tuo
                account. Puoi utilizzare le stesse carte e gli stessi metodi di
                pagamento che usi abitualmente, con la protezione Acquisti
                Amazon e tutte le misure di sicurezza avanzate già integrate.
              </p>
            </div>

            <div className="bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h3 className="font-display text-lg mb-2">
                Spedizione e tracciabilità
              </h3>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                Il kit viene spedito tramite i servizi logistici di Amazon,
                con tracking dell&apos;ordine e aggiornamenti sullo stato della
                consegna. Potrai seguire ogni fase direttamente dalla sezione
                &quot;I miei ordini&quot; del tuo account Amazon.
              </p>
            </div>

            <div className="bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h3 className="font-display text-lg mb-2">Supporto</h3>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                Per domande sul contenuto del kit puoi scriverci a{" "}
                <span className="font-medium">[tua email di supporto]</span>. 
                Per qualsiasi questione legata a pagamento, fatturazione o
                spedizione puoi invece utilizzare il supporto e i canali ufficiali
                di Amazon.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
