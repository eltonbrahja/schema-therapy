import { Toaster } from '@/components/ui/sonner';
import { Hero } from './sections/Hero';
import { Product } from './sections/Product';
import { Gallery } from './sections/Gallery';
import { Pricing } from './sections/Pricing';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Hero />
      <Product />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
