// src/pages/Checkout.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CreditCard } from "lucide-react";

function Checkout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // qui potresti passare quantità, variante, ecc.
          productId: "schema-therapy-kit",
        }),
      });

      if (!res.ok) {
        throw new Error("Errore nella creazione della sessione di pagamento");
      }

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // URL di Stripe Checkout
      } else {
        throw new Error("URL di Checkout non ricevuto");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Si è verificato un errore inatteso");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d1f16]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Header */}
        <header className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#8b5a3c] mb-3">
              Checkout sicuro
            </p>
            <h1 className="font-display text-3xl sm:text-4xl text-[#2d1f16]">
              Completa l&apos;ordine
            </h1>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-[#7a6555]">
            <Shield className="w-4 h-4 text-[#8b5a3c]" />
            <span>Pagamento crittografato e conforme agli standard PCI‑DSS</span>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Riepilogo ordine */}
          <section className="lg:col-span-2 bg-white p-6 sm:p-8 shadow-md">
            <h2 className="font-display text-xl mb-4">Riepilogo ordine</h2>

            <div className="border border-[#e0d4c8] p-4 sm:p-5 mb-6">
              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <p className="text-sm font-medium text-[#2d1f16]">
                    Kit Schema Therapy – Edizione Professionale 2026
                  </p>
                  <p className="text-xs text-[#7a6555] mt-1">
                    Raccoglitore A4 con 18 schede teoriche e 54 immagini in
                    cartoncino plastificato.
                  </p>
                </div>
                <p className="font-display text-2xl text-[#2d1f16]">€180</p>
              </div>
              <ul className="text-xs text-[#7a6555] space-y-1">
                <li>• IVA inclusa</li>
                <li>• Spedizione inclusa in tutta Italia</li>
                <li>• Nessun abbonamento ricorrente, pagamento una tantum</li>
              </ul>
            </div>

            {/* Dati essenziali cliente (base, puoi estenderli) */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-medium text-[#7a6555] mb-1">
                  Nome e cognome
                </label>
                <input
                  type="text"
                  className="w-full border border-[#e0d4c8] bg-[#faf8f5] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#8b5a3c]"
                  placeholder="Es. Mario Rossi"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#7a6555] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-[#e0d4c8] bg-[#faf8f5] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#8b5a3c]"
                  placeholder="tuoindirizzo@email.it"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-[#7a6555] mb-1">
                  Indirizzo di spedizione
                </label>
                <input
                  type="text"
                  className="w-full border border-[#e0d4c8] bg-[#faf8f5] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#8b5a3c]"
                  placeholder="Via, numero civico, CAP, città"
                />
              </div>
            </div>

            <div className="flex items-start gap-2 mb-6 text-xs text-[#7a6555]">
              <input
                id="terms"
                type="checkbox"
                className="mt-1 border-[#e0d4c8]"
              />
              <label htmlFor="terms">
                Dichiaro di aver letto e accettato la{" "}
                <a
                  href="/privacy"
                  className="underline decoration-[#8b5a3c] underline-offset-2"
                >
                  Privacy Policy
                </a>{" "}
                e i{" "}
                <a
                  href="/termini"
                  className="underline decoration-[#8b5a3c] underline-offset-2"
                >
                  Termini e condizioni
                </a>
                .
              </label>
            </div>

            {error && (
              <p className="text-xs text-red-600 mb-3">
                {error}
              </p>
            )}

            <Button
              onClick={handleCheckout}
              disabled={loading}
              size="lg"
              className="w-full bg-[#2d1f16] hover:bg-[#8b5a3c] text-white py-6 text-sm font-medium tracking-wide uppercase rounded-none transition-all duration-500 flex items-center justify-center"
            >
              {loading ? (
                "Reindirizzamento al pagamento..."
              ) : (
                <>
                  <CreditCard className="mr-2 w-4 h-4" />
                  Procedi al pagamento sicuro
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>

            <p className="text-[11px] text-[#7a6555] mt-3 text-center">
              Il pagamento è gestito in modo sicuro da Stripe. Nessun dato della
              tua carta viene memorizzato su questo sito. [web:36][web:38][web:44]
            </p>
          </section>

          {/* Colonna destra: fiducia / info */}
          <aside className="space-y-6">
            <div className="bg-white p-5 shadow-md">
              <h3 className="font-display text-lg mb-2">
                Pagamento sicuro con Stripe
              </h3>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                Usiamo Stripe per elaborare i pagamenti con carta di credito/debito
                e wallet. Stripe è conforme allo standard PCI‑DSS e supporta
                l&apos;autenticazione forte del cliente (3D Secure 2), come richiesto
                dalla normativa europea. [web:36][web:41][web:44]
              </p>
            </div>

            <div className="bg-white p-5 shadow-md">
              <h3 className="font-display text-lg mb-2">Supporto</h3>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                In caso di problemi con il pagamento o domande sull&apos;ordine puoi
                contattarci a{" "}
                <span className="font-medium">[tua email di supporto]</span>. Di
                solito rispondiamo entro 24 ore. [web:24]
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
