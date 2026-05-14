import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const WHATSAPP_NUMBER = "393519989647";
const WHATSAPP_TEXT = encodeURIComponent(
  "Ciao, vorrei ulteriori informazioni riguardo al kit di Schema Therapy"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Messaggio inviato con successo!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      ref={sectionRef}
      id="contatti"
      className="py-32 lg:py-40 bg-[#2d1f16] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #c9b8a5 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div>
            <span
              className={`text-xs font-medium text-[#a67c52] tracking-[0.3em] uppercase block mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              Contatti
            </span>
            <h2
              className={`font-display text-5xl sm:text-6xl lg:text-7xl text-[#f5f0e8] leading-[0.95] transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              Ordina o
              <span className="block italic text-[#a67c52]">Richiedi Info</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className={`text-[#c9b8a5] leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              Compila il modulo per ordinare il raccoglitore o per qualsiasi informazione.
              Ti risponderemo entro 24 ore lavorative.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
          >
            <div className="bg-[#3d2b1f] p-8 lg:p-10 relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-px bg-[#a67c52]" />
              <div className="absolute top-0 left-0 w-px h-6 bg-[#a67c52]" />

              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-[#a67c52]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-[#a67c52]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#f5f0e8] mb-3">
                    Messaggio Inviato!
                  </h3>
                  <p className="text-[#c9b8a5]">
                    Grazie per averci contattato. Ti risponderemo al più presto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-[#c9b8a5] text-xs uppercase tracking-wider">
                        Nome *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 bg-transparent border-0 border-b border-[#5c4a3d] rounded-none text-[#f5f0e8] placeholder:text-[#7a6555] focus:border-[#a67c52] focus:ring-0 px-0"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#c9b8a5] text-xs uppercase tracking-wider">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 bg-transparent border-0 border-b border-[#5c4a3d] rounded-none text-[#f5f0e8] placeholder:text-[#7a6555] focus:border-[#a67c52] focus:ring-0 px-0"
                        placeholder="la.tua@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#c9b8a5] text-xs uppercase tracking-wider">
                      Telefono
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 bg-transparent border-0 border-b border-[#5c4a3d] rounded-none text-[#f5f0e8] placeholder:text-[#7a6555] focus:border-[#a67c52] focus:ring-0 px-0"
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#c9b8a5] text-xs uppercase tracking-wider">
                      Messaggio *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="mt-2 bg-transparent border-0 border-b border-[#5c4a3d] rounded-none text-[#f5f0e8] placeholder:text-[#7a6555] focus:border-[#a67c52] focus:ring-0 px-0 resize-none"
                      placeholder="Scrivi il tuo messaggio..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#a67c52] hover:bg-[#8b5a3c] text-white py-6 px-8 text-sm font-medium tracking-wide uppercase rounded-none transition-all duration-500 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Invio...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Invia Richiesta
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
          >
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'danubiamacario@gmail.com', href: 'mailto:danubiamacario+kit1@gmail.com' },
                { icon: Phone, label: 'Telefono', value: '+39 351 998 9647', href: 'tel:+393519989647' },
                { icon: MapPin, label: 'Spedizione', value: 'In tutta Italia', href: null },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#5c4a3d] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#a67c52]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7a6555] uppercase tracking-wider mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[#f5f0e8] hover:text-[#a67c52] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#f5f0e8]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response time & WhatsApp */}
            <div className="space-y-4 w-full max-w-[340px]">
              {/* Response time */}
              <div className="border border-[#5c4a3d] py-4 px-6">
                <p className="text-[#a67c52] text-xs uppercase tracking-[0.15em] text-center">
                  Rispondiamo entro 24 ore
                </p>
              </div>

              {/* WhatsApp Button */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#22c25c] text-white py-4 px-6 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-500 shadow-lg shadow-black/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.73.72 5.29 2.09 7.59L.5 31.5l8.19-2.06A15.3 15.3 0 0 0 16 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zm0 27.6c-2.47 0-4.87-.66-6.98-1.92l-.5-.29-4.86 1.22 1.3-4.73-.32-.49A12.44 12.44 0 0 1 3.5 16C3.5 9.3 9.3 3.5 16 3.5S28.5 9.3 28.5 16 22.7 28.1 16 28.1z" />
                  <path d="M23.22 18.63c-.37-.18-2.19-1.08-2.53-1.2-.34-.13-.59-.19-.84.19-.25.37-.96 1.19-1.17 1.43-.22.25-.43.28-.8.1-.37-.18-1.55-.57-2.95-1.83-1.09-.97-1.83-2.17-2.04-2.54-.21-.37-.02-.57.16-.75.17-.17.37-.43.55-.64.18-.21.24-.36.36-.6.12-.25.06-.46-.03-.64-.1-.18-.84-2.01-1.15-2.76-.3-.72-.6-.62-.84-.63h-.72c-.25 0-.64.09-.97.43-.34.34-1.27 1.24-1.27 3.02 0 1.78 1.3 3.5 1.48 3.74.18.25 2.56 3.9 6.2 5.45 3.64 1.55 3.64 1.04 4.29.98.65-.06 2.19-.89 2.5-1.75.31-.86.31-1.6.22-1.75-.09-.15-.34-.24-.71-.42z" />
                </svg>
                Contattaci su WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
