'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { Globe, Menu, X, FolderGit2, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on Escape key & lock body scroll while open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSidebarOpen(false);
      }
    };
    if (isSidebarOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  const handleNavClick = (sectionId: string) => {
    setIsSidebarOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full px-3 sm:px-6 lg:px-8 pt-3 pb-2 pointer-events-none">
        <nav
          id="navbar"
          aria-label="Main Navigation"
          className="max-w-5xl mx-auto pointer-events-auto rounded-2xl backdrop-blur-xl bg-white/85 border border-white/90 shadow-[0_4px_24px_rgba(255,92,122,0.06)] px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300"
        >
          {/* Monogram / Brand Logo */}
          <a
            href="#"
            id="nav-brand-link"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C7A] rounded-xl min-w-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-white border border-stone-200/80 shadow-xs transition-transform duration-200 group-hover:scale-105 flex items-center justify-center p-1 shrink-0">
              <Image
                src="https://ik.imagekit.io/imgy4/Images%20used%20in%20websites/p2.png"
                alt={t.nav.name}
                fill
                sizes="(max-width: 640px) 36px, 40px"
                className="object-contain p-0.5"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-xs sm:text-sm tracking-tight text-[#1A1A1A] truncate">
                {t.nav.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-stone-500 tracking-normal flex items-center gap-1 truncate">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF5C7A] shrink-0" />
                <span className="truncate">{t.nav.badge}</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <a
              href="#work"
              id="nav-work-link"
              className="px-3 py-1.5 text-xs sm:text-sm font-medium text-stone-600 hover:text-[#1A1A1A] hover:bg-stone-100/60 rounded-xl transition-colors duration-150"
            >
              {t.nav.work}
            </a>
            <a
              href="#contact"
              id="nav-contact-link"
              className="px-3 py-1.5 text-xs sm:text-sm font-medium text-stone-600 hover:text-[#1A1A1A] hover:bg-stone-100/60 rounded-xl transition-colors duration-150"
            >
              {t.nav.contact}
            </a>

            {/* Vertical Divider */}
            <div className="w-px h-5 bg-stone-200 mx-1" />

            {/* Bilingual Toggle (Desktop: Icon + Text) */}
            <button
              type="button"
              id="nav-lang-toggle"
              onClick={toggleLocale}
              aria-label={`Switch language to ${locale === 'en' ? 'Arabic' : 'English'}`}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-xl bg-stone-100/80 hover:bg-[#FF5C7A]/10 text-[#1A1A1A] hover:text-[#FF5C7A] border border-stone-200/70 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Globe className="w-3.5 h-3.5 text-[#FF5C7A]" />
              <span>{t.nav.langToggle}</span>
            </button>
          </div>

          {/* Mobile Actions: Language Icon-Only Toggle + Hamburger Button */}
          <div className="flex sm:hidden items-center gap-1.5 shrink-0">
            {/* Language toggle button - ONLY the icon on mobile */}
            <button
              type="button"
              id="nav-lang-toggle-mobile"
              onClick={toggleLocale}
              aria-label={`Switch language to ${locale === 'en' ? 'Arabic' : 'English'}`}
              className="p-2 rounded-xl bg-stone-100/80 hover:bg-[#FF5C7A]/10 text-stone-800 hover:text-[#FF5C7A] border border-stone-200/70 transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center shadow-2xs"
            >
              <Globe className="w-4 h-4 text-[#FF5C7A]" />
            </button>

            {/* Hamburger Button */}
            <button
              type="button"
              id="nav-hamburger-btn"
              onClick={() => setIsSidebarOpen(true)}
              aria-label={locale === 'ar' ? 'فتح القائمة الجانبية' : 'Open navigation menu'}
              aria-expanded={isSidebarOpen}
              className="p-2 rounded-xl bg-stone-100/80 hover:bg-[#FF5C7A]/10 text-stone-800 hover:text-[#FF5C7A] border border-stone-200/70 transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center shadow-2xs"
            >
              <Menu className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Backdrop */}
      <div
        id="mobile-sidebar-backdrop"
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity duration-300 sm:hidden ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Mobile Sidebar Panel (Smooth slide-in animation) */}
      <aside
        id="mobile-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed top-0 bottom-0 end-0 z-50 w-72 max-w-[85vw] bg-white/95 backdrop-blur-2xl border-stone-200/90 shadow-2xl flex flex-col justify-between p-5 transition-transform duration-300 ease-out sm:hidden ${
          locale === 'ar' ? 'border-r' : 'border-l'
        } ${
          isSidebarOpen
            ? 'translate-x-0'
            : locale === 'ar'
            ? '-translate-x-full'
            : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200/80">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white border border-stone-200 shadow-2xs flex items-center justify-center p-0.5 shrink-0">
              <Image
                src="https://ik.imagekit.io/imgy4/Images%20used%20in%20websites/p2.png"
                alt={t.nav.name}
                fill
                sizes="32px"
                className="object-contain p-0.5"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-xs tracking-tight text-[#1A1A1A] truncate">
                {t.nav.name}
              </span>
              <span className="text-[10px] text-stone-500 truncate">
                {t.nav.badge}
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            id="mobile-sidebar-close-btn"
            onClick={() => setIsSidebarOpen(false)}
            aria-label={locale === 'ar' ? 'إغلاق القائمة' : 'Close navigation menu'}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-black flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <div className="py-6 flex flex-col gap-2 flex-1">
          <button
            type="button"
            id="mobile-nav-work"
            onClick={() => handleNavClick('work')}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl bg-stone-50 hover:bg-[#FF5C7A]/10 text-stone-800 hover:text-[#FF5C7A] text-sm font-semibold transition-all text-start cursor-pointer border border-stone-200/60"
          >
            <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#FF5C7A] shrink-0">
              <FolderGit2 className="w-4 h-4 stroke-[2.2]" />
            </div>
            <span>{t.nav.work}</span>
          </button>

          <button
            type="button"
            id="mobile-nav-contact"
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl bg-stone-50 hover:bg-[#FF5C7A]/10 text-stone-800 hover:text-[#FF5C7A] text-sm font-semibold transition-all text-start cursor-pointer border border-stone-200/60"
          >
            <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#FF5C7A] shrink-0">
              <Mail className="w-4 h-4 stroke-[2.2]" />
            </div>
            <span>{t.nav.contact}</span>
          </button>

          {/* Language Switch Option within Sidebar */}
          <button
            type="button"
            id="mobile-nav-lang-btn"
            onClick={() => {
              toggleLocale();
              setIsSidebarOpen(false);
            }}
            className="flex items-center justify-between w-full px-4 py-3 rounded-2xl bg-stone-50 hover:bg-[#FF5C7A]/10 text-stone-800 hover:text-[#FF5C7A] text-sm font-semibold transition-all text-start cursor-pointer border border-stone-200/60 mt-1"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#FF5C7A] shrink-0">
                <Globe className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span>{locale === 'en' ? 'العربية' : 'English'}</span>
            </div>
            <span className="text-[11px] font-bold text-[#FF5C7A] bg-[#FF5C7A]/10 px-2 py-0.5 rounded-md">
              {locale === 'en' ? 'عربي' : 'EN'}
            </span>
          </button>
        </div>

        {/* Sidebar Footer Action */}
        <div className="pt-4 border-t border-stone-200/80 flex flex-col gap-3">
          <a
            href="https://wa.me/96555118899"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{locale === 'ar' ? 'محادثة واتساب مباشرة' : 'Chat on WhatsApp'}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>

          <p className="text-[10px] text-center text-stone-400">
            {locale === 'ar' ? 'جامعة الخليج للعلوم والتقنية' : 'Gulf University for Science and Technology'}
          </p>
        </div>
      </aside>
    </>
  );
}
