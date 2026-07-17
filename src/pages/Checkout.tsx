import { useEffect } from "react";
import { Shield, Truck, CreditCard, Headphones, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

/* ─── URL placeholder per ciascun metodo di pagamento ─── */
// TODO: sostituisci con i link reali quando disponibili
const STRIPE_URL = "https://buy.stripe.com/TUO_LINK_STRIPE";
const PAYPAL_URL = "https://www.paypal.com/paypalme/TUO_LINK_PAYPAL";
const AMAZON_URL = "https://www.amazon.it/dp/TUO_ASIN";

/* ─── Icone SVG inline per i brand ─── */
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

function AmazonLogo({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.045 18.02c.072-.116.187-.124.348-.064 2.729 1.612 5.678 2.42 8.85 2.42 2.096 0 4.138-.356 6.125-1.064a34.855 34.855 0 0 0 3.27-1.452c.174-.087.325-.088.437.066.112.155.06.3-.082.443-.92.733-1.94 1.356-3.056 1.862a16.62 16.62 0 0 1-6.992 1.472c-2.37 0-4.536-.492-6.496-1.474a15.58 15.58 0 0 1-2.49-1.572c-.087-.073-.14-.15-.082-.28l.168-.357zM6.12 15.56c0-.256.008-.455.026-.598a3.58 3.58 0 0 1 .156-.765c.068-.226.182-.398.322-.515a7.572 7.572 0 0 1 1.752-.845c.767-.28 1.467-.42 2.1-.42.544 0 .985.086 1.324.26.338.173.566.406.685.7.118.294.184.567.198.82.014.254.022.618.022 1.092v.318c0 .47.01.828.032 1.074.021.247.078.5.17.76.092.26.13.442.112.548-.017.105-.098.2-.243.283a3.456 3.456 0 0 1-.44.22c-.348.16-.668.242-.96.242-.362 0-.63-.126-.806-.38-.176-.252-.293-.558-.35-.918-.597.843-1.42 1.265-2.47 1.265-.67 0-1.205-.193-1.604-.58-.4-.387-.6-.915-.6-1.584 0-.707.218-1.265.655-1.672.436-.407 1.017-.642 1.74-.705.35-.034.72-.06 1.108-.076.388-.017.652-.04.79-.07.14-.03.232-.067.276-.113a.405.405 0 0 0 .083-.252v-.38c0-.436-.073-.733-.22-.894-.146-.16-.466-.24-.96-.24-.468 0-.79.062-.966.187-.176.125-.312.39-.41.797a.35.35 0 0 1-.17.228c-.074.04-.18.037-.318-.006l-.972-.228c-.192-.052-.276-.156-.25-.312zm3.7.89c-.333.023-.59.074-.774.156-.378.165-.567.462-.567.89 0 .298.078.527.234.686.156.16.36.24.61.24.336 0 .642-.117.917-.35.275-.235.427-.553.457-.956v-.692a11.78 11.78 0 0 1-.877.026zM21.56 19.1c.15.2.12.352-.09.457-.84.42-1.674.628-2.504.628-1.076 0-1.894-.348-2.456-1.043-.56-.696-.842-1.725-.842-3.09v-3.76c0-.107-.054-.16-.164-.16h-1.22c-.107 0-.16-.06-.16-.18v-1.6c0-.12.053-.18.16-.18h1.22c.11 0 .164-.053.164-.16V7.66c0-.12.063-.185.19-.195l2.07-.27c.14-.015.21.04.21.165v2.655c0 .107.055.16.164.16h1.982c.107 0 .16.06.16.18v1.6c0 .12-.053.18-.16.18h-1.982c-.11 0-.164.053-.164.16v3.396c0 .665.07 1.13.21 1.394.14.264.42.396.836.396.28 0 .572-.065.876-.196.108-.043.187-.038.237.023l.442.692z" />
    </svg>
  );
}

/* ─── Dati dei metodi di pagamento ─── */
const paymentMethods = [
  {
    id: "stripe",
    name: "Carta di credito / debito",
    provider: "Stripe",
    description:
      "Paga in modo sicuro con Visa, Mastercard, American Express o qualsiasi altra carta.",
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
    description:
      "Usa il tuo account PayPal per un pagamento rapido e protetto dalla Protezione Acquisti.",
    url: PAYPAL_URL,
    icon: PaypalLogo,
    accentColor: "#003087",
    accentBg: "rgba(0, 48, 135, 0.08)",
    recommended: false,
  },
  {
    id: "amazon",
    name: "Amazon",
    provider: "Amazon",
    description:
      "Acquista direttamente su Amazon con il tuo account, spedizione Prime inclusa.",
    url: AMAZON_URL,
    icon: AmazonLogo,
    accentColor: "#ff9900",
    accentBg: "rgba(255, 153, 0, 0.08)",
    recommended: false,
  },
];

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePayment = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d1f16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Torna alla Home */}
        <div className="mb-12 flex justify-start">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2d1f16] hover:text-[#8b5a3c] transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Ritorna alla home
          </Link>
        </div>

        {/* HEADER */}
        <header className="mb-14 text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b5a3c] mb-3">
            Checkout
          </p>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#2d1f16] leading-tight mb-4">
            Scegli come
            <span className="block italic text-[#8b5a3c]">acquistare</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5c4a3d] mx-auto max-w-2xl">
            Seleziona il metodo di pagamento che preferisci. Ogni transazione è
            gestita direttamente dal provider scelto, in un ambiente sicuro e
            protetto.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#7a6555]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#8b5a3c]" />
              <span>Pagamenti sicuri e crittografati</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#8b5a3c]" />
              <span>Spedizione veloce e tracciabile</span>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* COLONNA SINISTRA: RIEPILOGO + METODI DI PAGAMENTO */}
          <section className="lg:col-span-2 space-y-8">
            {/* Riepilogo prodotto */}
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
                      €120
                    </p>
                    <p className="text-[11px] text-[#7a6555]">
                      IVA e spedizione incluse*
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 text-xs text-[#5c4a3d]">
                  <div className="space-y-1">
                    <p>• Pagamento sicuro tramite provider certificati</p>
                    <p>• Carte, PayPal e altri metodi supportati</p>
                  </div>
                  <div className="space-y-1">
                    <p>• Spedizione rapida e tracciata in tutta Italia</p>
                    <p>• Assistenza dedicata via email</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metodi di pagamento */}
            <div className="bg-white p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative">
              <div className="absolute top-0 left-0 w-8 h-px bg-[#8b5a3c]" />
              <div className="absolute top-0 left-0 w-px h-8 bg-[#8b5a3c]" />
              <div className="absolute bottom-0 right-0 w-8 h-px bg-[#8b5a3c]" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-[#8b5a3c]" />

              <h2 className="font-display text-xl mb-2">
                Metodo di pagamento
              </h2>
              <p className="text-xs text-[#7a6555] mb-6">
                Scegli il metodo che preferisci. Verrai reindirizzato alla
                piattaforma selezionata per completare il pagamento.
              </p>

              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => handlePayment(method.url)}
                    className="w-full text-left group relative border-2 rounded-sm p-5 transition-all duration-300 hover:shadow-lg"
                    style={{
                      borderColor: method.recommended
                        ? method.accentColor
                        : "#e0d4c8",
                      backgroundColor: method.recommended
                        ? method.accentBg
                        : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!method.recommended) {
                        e.currentTarget.style.borderColor = method.accentColor;
                        e.currentTarget.style.backgroundColor = method.accentBg;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!method.recommended) {
                        e.currentTarget.style.borderColor = "#e0d4c8";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {/* Badge consigliato */}
                    {method.recommended && (
                      <span
                        className="absolute -top-3 left-5 px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white rounded-sm"
                        style={{ backgroundColor: method.accentColor }}
                      >
                        Consigliato
                      </span>
                    )}

                    <div className="flex items-center gap-4">
                      {/* Icona del brand */}
                      <div
                        className="w-12 h-12 flex items-center justify-center rounded-sm flex-shrink-0"
                        style={{ backgroundColor: method.accentBg }}
                      >
                        <method.icon
                          className="w-6 h-6"
                          style={{ color: method.accentColor }}
                        />
                      </div>

                      {/* Testo */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-[#2d1f16]">
                            {method.name}
                          </p>
                          <span className="text-[10px] text-[#7a6555] uppercase tracking-wider">
                            via {method.provider}
                          </span>
                        </div>
                        <p className="text-xs text-[#7a6555] mt-0.5">
                          {method.description}
                        </p>
                      </div>

                      {/* Freccia */}
                      <ExternalLink className="w-4 h-4 text-[#7a6555] flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>

              <p className="text-[11px] text-[#7a6555] mt-5 text-center">
                Dopo il clic verrai reindirizzato alla piattaforma selezionata,
                dove potrai confermare i dettagli e completare l&apos;ordine.
              </p>
            </div>

            <p className="text-[11px] text-[#7a6555] text-center">
              *Il prezzo finale e le opzioni di spedizione sono confermati
              direttamente sulla piattaforma di pagamento al momento
              dell&apos;acquisto.
            </p>
          </section>

          {/* COLONNA DESTRA: RASSICURAZIONI */}
          <aside className="space-y-6">
            <div className="bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h3 className="font-display text-lg mb-2">Pagamento sicuro</h3>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                Non inserisci alcun dato di carta su questo sito. Il pagamento
                avviene interamente sulla piattaforma del provider scelto
                (Stripe, PayPal o Amazon), con crittografia SSL e protezione
                antifrode.
              </p>
            </div>

            <div className="bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="w-4 h-4 text-[#8b5a3c]" />
                <h3 className="font-display text-lg">Tre metodi accettati</h3>
              </div>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                Scegli tra carta di credito/debito via Stripe, il tuo account
                PayPal, oppure acquista direttamente su Amazon. Ogni metodo
                offre le proprie garanzie e protezioni per l&apos;acquirente.
              </p>
            </div>

            <div className="bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <h3 className="font-display text-lg mb-2">
                Spedizione tracciabile
              </h3>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                Una volta completato l&apos;ordine, riceverai una conferma via
                email con il codice di tracciamento per seguire la consegna in
                tempo reale. Spedizione in 3–5 giorni lavorativi in tutta
                Italia.
              </p>
            </div>

            <div className="bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2 mb-2">
                <Headphones className="w-4 h-4 text-[#8b5a3c]" />
                <h3 className="font-display text-lg">Assistenza</h3>
              </div>
              <p className="text-sm text-[#7a6555] leading-relaxed">
                Per domande sul contenuto del kit puoi contattarci a{" "}
                <span className="font-medium">danubiamacario@gmail.com</span>.
                Per questioni legate al pagamento, fai riferimento
                all&apos;assistenza del provider utilizzato.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
