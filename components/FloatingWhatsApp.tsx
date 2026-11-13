'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const { t, locale } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  // Direct WhatsApp link formatted cleanly
  const whatsappUrl = 'https://wa.me/96555118899';

  // Corner positioning based on locale:
  // LTR (English): bottom-right
  // RTL (Arabic): bottom-left
  const positionClass = locale === 'ar' ? 'left-5 sm:left-7' : 'right-5 sm:right-7';

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className={`fixed bottom-5 sm:bottom-7 z-50 ${positionClass} flex items-center gap-3 transition-all duration-300`}
    >
      {/* Tooltip on hover */}
      {isHovered && (
        <div
          role="tooltip"
          className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-stone-200/90 text-xs font-bold text-[#1A1A1A] shadow-md animate-fade-in whitespace-nowrap"
        >
          <span>{t.whatsapp.hoverTooltip}</span>
        </div>
      )}

      {/* Floating Action Button with thin glass ring and confident pulse */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label={t.whatsapp.buttonLabel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-[#FF5C7A] text-white flex items-center justify-center ring-4 ring-white/80 shadow-[0_8px_24px_rgba(255,92,122,0.4)] animate-confident-pulse hover:bg-[#F24666] active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-white stroke-[2.2] group-hover:scale-110 transition-transform duration-200" />
      </a>
    </aside>
  );
}
