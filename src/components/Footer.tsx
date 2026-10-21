import React from 'react';
import { LegalDocType } from './LegalModal';

interface FooterProps {
  onOpenLegal: (doc: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#220727] text-[#e0cadc] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-9 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Wordmark & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <a href="#accueil" className="flex items-center hover:opacity-85 transition-opacity" aria-label="Accueil SHIFT">
            <img 
              src="/assets/aistudio/Logo_Principal__1__f096069a.png" 
              alt="SHIFT" 
              className="h-6 md:h-7 w-auto object-contain brightness-0 invert opacity-95" 
            />
          </a>
          <span className="hidden sm:inline text-white/30 text-xs">·</span>
          <span className="text-[13px] text-[#e0cadc]/75">
            © {currentYear} SHIFT. Tous droits réservés.
          </span>
        </div>

        {/* Center: Legal Navigation Links */}
        <nav 
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] font-medium text-[#e0cadc]/80"
          aria-label="Navigation légale"
        >
          <button
            type="button"
            onClick={() => onOpenLegal('privacy')}
            className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
          >
            Politique de confidentialité
          </button>
          <span className="text-white/20 select-none">·</span>
          <button
            type="button"
            onClick={() => onOpenLegal('terms')}
            className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
          >
            Conditions Générales
          </button>
          <span className="text-white/20 select-none">·</span>
          <button
            type="button"
            onClick={() => onOpenLegal('legal')}
            className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
          >
            Mentions Légales
          </button>
        </nav>

        {/* Right: Consumer Social Media Handles */}
        <div className="flex items-center gap-2.5" aria-label="Réseaux sociaux">
          {/* X / Twitter */}
          <a
            href="https://x.com/shift_agency"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SHIFT sur X"
            title="Suivez SHIFT sur X"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-[#e0cadc] hover:text-white flex items-center justify-center transition-all hover:scale-105"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/shift_ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SHIFT sur Instagram"
            title="Suivez SHIFT sur Instagram"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-[#e0cadc] hover:text-white flex items-center justify-center transition-all hover:scale-105"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@shift_agency"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SHIFT sur YouTube"
            title="Abonnez-vous à la chaîne YouTube SHIFT"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-[#e0cadc] hover:text-white flex items-center justify-center transition-all hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com/@shift_agency"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SHIFT sur TikTok"
            title="Retrouvez SHIFT sur TikTok"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-[#e0cadc] hover:text-white flex items-center justify-center transition-all hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.83.12V9.32a6.34 6.34 0 0 0-.83-.05A6.33 6.33 0 0 0 3.15 15.6a6.34 6.34 0 0 0 10.85 4.47 6.27 6.27 0 0 0 1.82-4.47V8.77a8.27 8.27 0 0 0 4.77 1.5V6.82a4.85 4.85 0 0 1-1-.13z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
