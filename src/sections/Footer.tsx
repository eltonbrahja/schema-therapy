import { BookOpen, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Prodotto', href: '#prodotto' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Prezzo', href: '#prezzo' },
  { label: 'Contatti', href: '#contatti' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a120e] text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border border-[#5c4a3d] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#a67c52]" />
              </div>
              <div>
                <span className="font-display text-xl text-[#f5f0e8]">Schema Therapy</span>
                <span className="block text-[10px] text-[#7a6555] uppercase tracking-wider">Edizione Professionale</span>
              </div>
            </div>
            <p className="text-[#7a6555] text-sm leading-relaxed max-w-md">
              Materiale didattico professionale per psicologi e professionisti 
              della salute mentale. 18 schemi, 54 immagini, qualità garantita.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-[#7a6555] uppercase tracking-wider mb-4">Navigazione</p>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group text-[#c9b8a5] hover:text-[#f5f0e8] transition-colors text-sm flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-[#7a6555] uppercase tracking-wider mb-4">Contatti</p>
            <div className="space-y-3 text-sm">
              <p>
                <a href="mailto:info@schematherapy.it" className="text-[#c9b8a5] hover:text-[#a67c52] transition-colors">
                  info@schematherapy.it
                </a>
              </p>
              <p>
                <a href="tel:+391234567890" className="text-[#c9b8a5] hover:text-[#a67c52] transition-colors">
                  +39 123 456 7890
                </a>
              </p>
              <p className="text-[#7a6555]">Spedizione in tutta Italia</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#2d1f16]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#5c4a3d] text-xs">
              {currentYear} Schema Therapy. Tutti i diritti riservati.
            </p>
            <p className="text-[#5c4a3d] text-xs">
              Design per la formazione psicologica
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
