import { useEffect } from "react";
import { Shield, Truck, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "../sections/Footer";

const STRIPE_URL = "https://buy.stripe.com/prevendita_placeholder";
const PAYPAL_URL = "https://paypal.me/prevendita_placeholder";

function StripeLogo({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
    </svg>
  );
}

function PaypalLogo({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
    </svg>
  );
}

const paymentMethods = [
  {
    id: "stripe",
    name: "Carta di credito / debito",
    provider: "Stripe",
    description: "Paga in modo sicuro in prevendita con Visa, Mastercard, American Express o qualsiasi altra carta.",
    url: STRIPE_URL,
    icon: StripeLogo,
    accentColor: "#635bff",
    accentBg: "rgba(99, 91, 255, 0.08)",
    recommended: true,
  },
  {
    id: "paypal",
    name: "PayPal",
    provider: "PayPal",
    description: "Usa il tuo account PayPal per un pagamento in prevendita rapido e protetto.",
    url: PAYPAL_URL,
    icon: PaypalLogo,
    accentColor: "#003087",
    accentBg: "rgba(0, 48, 135, 0.08)",
    recommended: false,
  },
];

export default function PrevenditaAcquisto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePayment = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d1f16] flex flex-col justify-between">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        {/* Torna alla Prevendita */}
        <div className="mb-12 flex justify-start">
          <Link
            to="/prevendita"
            className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2d1f16] hover:text-[#8b5a3c] transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Torna alla prevendita
          </Link>
        </div>

        {/* HEADER */}
        <header className="mb-14 text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b5a3c] mb-3">
            Acquisto in Prevendita
          </p>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#2d1f16] leading-tight mb-4">
            Completa l&apos;ordine
            <span className="block italic text-[#8b5a3c]">in prevendita</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5c4a3d] mx-auto max-w-2xl">
            Seleziona il metodo di pagamento preferito per bloccare la tua copia in prevendita con lo sconto speciale.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#7a6555]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#8b5a3c]" />
              <span>Pagamenti sicuri e crittografati</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#8b5a3c]" />
              <span>Spedizione garantita al rilascio</span>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-10">
          {/* RIEPILOGO PRODOTTO */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative border border-[#e0d4c8]/50">
              <h2 className="font-display text-lg mb-4 text-[#2d1f16]">Riepilogo Ordine</h2>
              <div className="border border-[#e0d4c8] p-4 bg-[#fbf7f2] mb-4">
                <p className="text-xs font-semibold text-[#8b5a3c] mb-1">OFFERTA PREVENDITA</p>
                <p className="text-sm font-medium text-[#2d1f16]">Kit Schema Therapy</p>
                <p className="text-xs text-[#7a6555] mt-1">Edizione Professionale A4</p>
                <div className="mt-4 flex flex-col gap-1">
                  <div className="flex justify-between text-xs text-[#7a6555] line-through">
                    <span>Prezzo Standard:</span>
                    <span>€120</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#2d1f16]">
                    <span>Prezzo Prevendita:</span>
                    <span className="text-[#8b5a3c]">€90</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#e0d4c8] flex justify-between text-[11px] text-emerald-700 font-semibold">
                    <span>Risparmio totale:</span>
                    <span>€30 (25% off)</span>
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#5c4a3d] leading-relaxed mt-4 pt-4 border-t border-[#e0d4c8]/60 font-medium">
                <span className="font-bold text-[#8b5a3c]">Nota importante:</span> Trattandosi di un acquisto in prevendita, il prodotto verrà spedito non appena le scorte saranno pronte. La spedizione è gratuita in tutta Italia.
              </p>
            </div>
          </div>

          {/* METODI DI PAGAMENTO */}
          <div className="md:col-span-2 space-y-6">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => handlePayment(method.url)}
                  className="w-full text-left bg-white p-6 sm:p-8 border border-[#e8e0d5] hover:border-[#8b5a3c] shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col sm:flex-row items-start sm:items-center gap-6"
                >
                  <div
                    className="p-4 rounded-none flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: method.accentBg, color: method.accentColor }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display text-lg sm:text-xl text-[#2d1f16] group-hover:text-[#8b5a3c] transition-colors">
                        {method.name}
                      </h3>
                      {method.recommended && (
                        <span className="text-[9px] font-bold tracking-widest uppercase bg-[#8b5a3c]/10 text-[#8b5a3c] px-2 py-0.5">
                          Consigliato
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#5c4a3d] leading-relaxed">
                      {method.description}
                    </p>
                  </div>

                  <div className="w-full sm:w-auto flex-shrink-0 flex items-center justify-end sm:justify-start gap-1 text-xs font-bold uppercase tracking-wider text-[#8b5a3c] mt-4 sm:mt-0">
                    <span>Paga</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
