import { Toaster } from '@/components/ui/sonner';
import { Hero } from './sections/Hero';
import { Product } from './sections/Product';
import { Gallery } from './sections/Gallery';
import { Pricing } from './sections/Pricing';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

// costanti WhatsApp
const WHATSAPP_NUMBER = '393401234567'; // metti il tuo numero
const WHATSAPP_TEXT = encodeURIComponent(
  'Ciao, ho visto il raccoglitore Schema Therapy dal sito'
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

function App() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Hero />
      <Product />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="
          fixed bottom-6 right-6 z-50
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#25D366] text-white
          shadow-lg shadow-black/30
          hover:bg-[#22c25c] transition
        "
        aria-label="Chatta su WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-current"
        >
          <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.73.72 5.29 2.09 7.59L.5 31.5l8.19-2.06A15.3 15.3 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zm0 27.6c-2.47 0-4.87-.66-6.98-1.92l-.5-.29-4.86 1.22 1.3-4.73-.32-.49A12.44 12.44 0 0 1 3.5 16C3.5 9.3 9.3 3.5 16 3.5S28.5 9.3 28.5 16 22.7 28.1 16 28.1z" />
          <path d="M23.22 18.63c-.37-.18-2.19-1.08-2.53-1.2-.34-.13-.59-.19-.84.19-.25.37-.96 1.19-1.17 1.43-.22.25-.43.28-.8.1-.37-.18-1.55-.57-2.95-1.83-1.09-.97-1.83-2.17-2.04-2.54-.21-.37-.02-.57.16-.75.17-.17.37-.43.55-.64.18-.21.24-.36.36-.6.12-.25.06-.46-.03-.64-.1-.18-.84-2.01-1.15-2.76-.3-.72-.6-.62-.84-.63h-.72c-.25 0-.64.09-.97.43-.34.34-1.27 1.24-1.27 3.02 0 1.78 1.3 3.5 1.48 3.74.18.25 2.56 3.9 6.2 5.45 3.64 1.55 3.64 1.04 4.29.98.65-.06 2.19-.89 2.5-1.75.31-.86.31-1.6.22-1.75-.09-.15-.34-.24-.71-.42z" />
        </svg>
      </a>

      <Toaster position="top-center" />
    </div>
  );
}

export default App;
