// src/pages/Checkout.tsx
import { ExternalLink, Shield } from "lucide-react";

function Checkout() {
  // TODO: sostituisci con il link reale Amazon del kit
  const AMAZON_URL = "https://www.amazon.it/dp/TUO_ASIN";

  const handleGoToAmazon = () => {
    window.open(AMAZON_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d1f16]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Header */}
        <header className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#8b5a3c] mb-3">
              Acquisto tramite Amazon
            </p>
            <h1 className="font-display text-3xl sm:text-4xl text-[#2d1f16]">
              Completa l&apos;ordine del kit
            </h1>
            <p className="text-sm text-[#7a6555] mt-2 max-w-xl">
              Per offrirti la massima sicurezza utilizziamo l&apos;infrastruttura di
              pagamento di Amazon. Potrai acquistare il kit direttamente dal tuo
              account Amazon, con i metodi che usi di solito. [web:51][web:65]
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#7a6555]">
            <Shield className="w-4 h-4 text-[#8b5a3c]" />
            <span>Transazione gestita da Amazon</span>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Riepilogo ordine */}
          <section className="lg:col-span-2 bg-white p-6 sm:p-8 shadow-md">
            <h2 className="font-display text-xl mb-4">Riepilogo del kit</h2>

            <div className="border border-[#e0d4c8] p-4 sm:p-5 mb-6">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <p className="text-sm font-medium text-[#2d1f16]">
                    Kit Schema Therapy – Edizione Professionale 2026
                  </p>
                  <p className="text-xs text-[#7a6555] mt-1">
                    Raccoglitore A4 con 18 schede teoriche e 54 immagini in
                    cartoncino plastificato, pensato per psicologi e
                    psicoterapeuti.
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl text-[#2d1f16]">€180</p>
                  <p className="text-[11px] text-[#7a6555]">IVA e spedizione incluse*</p>
                </div>
              </div>
              <ul className="text-xs text-[#7a6555] space-y-1">
                <li>• Venduto e spedito tramite Amazon</li>
                <li>• Usi il tuo account Amazon e i metodi di pagamento salvati</li>
                <li>• Gestione ordini e resi direttamente da Amazon</li>
              </ul>
            </div>

            <p className="text-sm text-[#5c4a3d] mb-6">
              Cliccando sul pulsante qui sotto verrai reindirizzato alla pagina
              prodotto su Amazon, dove potrai completare il pagamento in modo
              sicuro. Nessun dato di pagamento viene trattato da questo sito. [web:53][web:65]
            </p>

            <button
              type="button"
              onClick={handleGoToAmazon}
              className="w-full bg-[#2d1f16] hover:bg-[#8b5a3c] text-white py-4 px-4 text-sm font-medium tracking-wide uppercase rounded-none transition-all duration-500 flex items-center justify-center"
            >
              Vai alla pagina Amazon
              <ExternalLink className="ml-2 w-4 h-4" />
            </button>

            <p className="text-[11px] text-[#7a6555] mt-3 text-center">
              Il pagamento e la spedizione sono gestiti da Amazon secondo le
              loro condizioni di vendita e politiche di reso. [web:51][web:59]
            </p>
          </section>

          {/* Colonna destra */}
          <aside className="space-y-6">
            <div className="bg-white p-5 shadow-md">
              <h3 className="font-display text-lg mb-2">
                Perché acquistare tramite Amazon
              </h3>
              <ul className="text-sm text-[#7a6555] leading-relaxed space-y-2">
                <li>• Ambiente di pagamento familiare e affidabile</li>
                <li>• Protezione Acquisti Amazon e storico ordini sempre disponibile</li>
                <li>• Possibilità di usare carte salvate e altri metodi supportati</li>
              </ul>
            </div>

            <div className="bg-white p-5 shadow-md">
              <h3 className="font-display text-lg mb-2">Informazioni legali</h3>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                Questo sito presenta il prodotto e rimanda alla vendita su
                Amazon. I tuoi dati di pagamento sono trattati esclusivamente
                da Amazon, in qualità di autonomo titolare del trattamento per
                la parte di incasso e logistica. [web:51][web:59]
              </p>
              <p className="text-xs text-[#7a6555] mt-3">
                Consulta la{" "}
                <a
                  href="/privacy"
                  className="underline decoration-[#8b5a3c] underline-offset-2"
                >
                  Privacy Policy
                </a>{" "}
                di questo sito e l&apos;informativa privacy di Amazon sul loro
                portale.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
