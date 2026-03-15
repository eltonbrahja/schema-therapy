import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

type Section = {
  id: string;
  label: string;
  offset?: number;
};

const sections: Section[] = [
  { id: 'prodotto', label: 'Prodotto', offset: 20 },
  { id: 'galleria', label: 'Galleria', offset: 20 },
  { id: 'prezzo',   label: 'Prezzo',   offset: 40 },
  { id: 'contatti', label: 'Contatti', offset: 20 },
];


const DEFAULT_OFFSET = 10; // distanza dal bordo alto al titolo, puoi regolare

function scrollToId(id: string, offset = DEFAULT_OFFSET) {
  const el = document.getElementById(id);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const top = rect.top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: 'smooth',
  });
}


export function FloatingNav() {
  const [active, setActive] = useState<string | null>('prodotto');
  const [mobileOpen, setMobileOpen] = useState(false);

  // evidenzia sezione attiva mentre scrolli
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) setActive(id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -60% 0px',
      }
    );

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (sec: Section) => {
    setActive(sec.id); // feedback immediato
    scrollToId(sec.id, sec.offset ?? DEFAULT_OFFSET);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop / tablet pill laterale */}
      <div className="hidden md:flex fixed top-1/2 right-6 -translate-y-1/2 z-40 flex-col gap-3">
        {sections.map(sec => {
          const isActive = active === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => handleClick(sec)}
              className={`
                group flex items-center gap-2 px-3 py-2 rounded-full
                border transition-all duration-300 ease-out
                ${
                  isActive
                    ? 'bg-[#2d1f16] border-[#2d1f16] text-[#f5f0e8] shadow-lg shadow-black/20'
                    : 'bg-[#f8f5f0]/90 border-[#cbb8a3] text-[#7a6555] hover:bg-white'
                }
              `}
            >
              <span
                className={`
                  w-2 h-2 rounded-full transition-colors
                  ${
                    isActive
                      ? 'bg-[#f5f0e8]'
                      : 'bg-[#cbb8a3] group-hover:bg-[#8b5a3c]'
                  }
                `}
              />
              <span className="text-[11px] font-medium tracking-[0.16em] uppercase">
                {sec.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile: pulsante espandibile, più in alto per non toccare WhatsApp */}
      <div className="md:hidden fixed bottom-24 right-6 z-40">
        <div className="flex flex-col items-end gap-2">
          {mobileOpen && (
            <div className="mb-3 rounded-2xl bg-[#f8f5f0] border border-[#cbb8a3] shadow-lg shadow-black/20 py-3 px-4">
              {sections.map(sec => {
                const isActive = active === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleClick(sec)}
                    className={`
                      block w-full text-right py-2 text-[12px] uppercase tracking-[0.18em]
                      ${isActive ? 'text-[#2d1f16] font-semibold' : 'text-[#7a6555]'}
                    `}
                  >
                    {sec.label}
                  </button>
                );
              })}
            </div>
          )}

          <button
            onClick={() => setMobileOpen(o => !o)}
            className="
              w-11 h-11 rounded-full flex items-center justify-center
              bg-[#2d1f16] text-[#f5f0e8] shadow-lg shadow-black/30
              active:scale-95 transition
            "
            aria-label="Apri il menu di navigazione"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
