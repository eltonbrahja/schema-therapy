import { useEffect } from "react";
import { ExternalLink, Shield, Truck } from "lucide-react";

function Checkout() {
  // TODO: sostituisci con l'URL ufficiale Amazon del kit
  const AMAZON_URL = "https://www.amazon.it/dp/TUO_ASIN";

  useEffect(() => {
    // quando arrivo sulla pagina parto sempre dall'alto
    window.scrollTo(0, 0);
  }, []);

  const handleGoToAmazon = () => {
    window.open(AMAZON_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d1f16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* HEADER CENTRATO */}
        <header className="mb-14 text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b5a3c] mb-3">
            Acquisto tramite Amazon
          </p>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#2d1f16] leading-tight mb-4">
            Completa l&apos;ordine
            <span className="block italic text-[#8b5a3c]">
              con pagamento protetto
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#5c4a3d] mx-auto max-w-2xl">
            Per questo kit utilizziamo la piattaforma di pagamento e spedizione
            di Amazon. Paghi dal tuo account, in un ambiente sicuro e
            familiare, con consegna rapida e tracciabile in tutta Italia.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#7a6555]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#8b5a3c]" />
              <span>Pagamento gestito da Amazon</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#8b5a3c]" />
              <span>Spedizione veloce e tracciabile</span>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* COLONNA SINISTRA: RIEPILOGO + BOTTONE */}
          <section className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-px bg-[#8b5a3c]" />
              <div className="absolute top-0 left-0 w-px h-8 bg-[#8b5a3c]" />
              <div className="absolute bottom-0 right-0 w-8 h-px bg-[#8b5a3c]" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-[#8b5a3c]" />

              <h2 className="font-display text-xl mb-6">Riepilogo del kit</h2>

              <div className="border border-[#e0d4c8] p-5 bg-[#fbf7f2] mb-6">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-[#2d1f16]">
                      Kit Schema Therapy – Edizione Professionale 2026
                    </p>
                    <p className="text-xs text-[#7a6555] mt-1 max-w-md">
                      Raccoglitore A4 con 18 schede teoriche e 54 immagini in
                      cartoncino plastificato, progettato per supportare il
                      lavoro clinico con pazienti in Schema Therapy.
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
                    <p>• Gestione ordini e resi dal pannello &quot;I miei ordini&quot;</p>
                  </div>
                </div>
              </div>

              {/* BOTTONE PRINCIPALE */}
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleGoToAmazon}
                  className="w-full bg-[#2d1f16] hover:bg-[#8b5a3c] text-white py-4 px-4 text-sm font-medium tracking-[0.18em] uppercase rounded-none transition-all duration-500 flex items-center justify-center"
                >
                  Acquista su Amazon
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
                <p className="text-[11px] text-[#7a6555] mt-3 text-center">
                  Dopo il clic verrai indirizzato alla pagina ufficiale del kit
                  su Amazon, dove potrai confermare indirizzo, metodo di
                  pagamento e quantità prima di completare l&apos;ordine.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-[#7a6555] text-center">
              *Il prezzo e le opzioni di spedizione sono sempre confermati
              direttamente su Amazon al momento dell&apos;acquisto.
            </p>
          </section>

          {/* COLONNA DESTRA: RASSICURAZIONI */}
          <aside className="space-y-6">
            <div className="bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h3 className="font-display text-lg mb-2">Pagamento sicuro</h3>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                Non inserisci alcun dato di carta su questo sito. Il pagamento
                avviene interamente su Amazon, con le stesse misure di
                sicurezza che utilizzi per gli altri tuoi acquisti: sistemi
                antifrode, verifica delle transazioni e protezione Acquisti
                Amazon.
              </p>
            </div>

            <div className="bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h3 className="font-display text-lg mb-2">
                Spedizione tracciabile
              </h3>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                Una volta completato l&apos;ordine, potrai seguire ogni fase della
                spedizione dalla sezione &quot;I miei ordini&quot; del tuo account
                Amazon, con aggiornamenti sullo stato della consegna e tempi
                stimati sempre visibili.
              </p>
            </div>

            <div className="bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h3 className="font-display text-lg mb-2">Assistenza</h3>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                Per domande sul contenuto del kit puoi contattarci a{" "}
                <span className="font-medium">[tua email di supporto]</span>. Per
                questioni legate a pagamento, consegna o resi puoi invece usare
                i canali di assistenza ufficiali di Amazon.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
