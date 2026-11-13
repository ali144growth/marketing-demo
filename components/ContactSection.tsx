'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Copy,
  Check,
} from 'lucide-react';

export function ContactSection() {
  const { t, locale } = useLanguage();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="w-full py-16 sm:py-24 relative"
    >
      {/* Background warm glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 start-1/2 -translate-x-1/2 w-[480px] h-[260px] rounded-full bg-gradient-to-t from-[#FF5C7A]/12 via-[#FFB36B]/15 to-transparent blur-3xl -z-10"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2
            id="contact-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-2"
          >
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-md mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Single Glass Panel containing all contact methods */}
        <div
          id="contact-glass-panel"
          className="relative rounded-3xl backdrop-blur-xl bg-white/85 border border-white/95 shadow-[0_12px_40px_rgba(255,92,122,0.08)] p-6 sm:p-10 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(255,92,122,0.12)]"
        >
          {/* Subtle top decorative coral-to-orange accent bar */}
          <div className="absolute top-0 inset-x-8 h-1 rounded-b-full bg-gradient-to-r from-[#FF5C7A] to-[#FFB36B] opacity-80" />

          {/* Contact Items Grid: Icons over labels, minimal text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Phone (Tap-to-call) */}
            <a
              href={`tel:${t.contact.phoneValue.replace(/\s+/g, '')}`}
              id="contact-phone-link"
              className="group flex flex-col items-center text-center p-5 rounded-2xl bg-stone-50/70 hover:bg-white hover:border-[#FF5C7A]/30 border border-stone-200/60 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF5C7A]/10 text-[#FF5C7A] group-hover:bg-[#FF5C7A] group-hover:text-white flex items-center justify-center transition-colors duration-200 mb-3">
                <Phone className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                {t.contact.phoneLabel}
              </span>
              <span className="text-sm font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#FF5C7A] transition-colors" dir="ltr">
                {t.contact.phoneValue}
              </span>
              <span className="text-[11px] text-stone-600 mt-1 flex items-center gap-1">
                {locale === 'ar' ? 'اتصال مباشر' : 'Tap to call'}
                <ArrowUpRight className="w-3 h-3 rtl:rotate-[-90deg]" />
              </span>
            </a>

            {/* WhatsApp (Direct Link) */}
            <a
              href={`https://wa.me/${t.contact.whatsappValue.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-link"
              className="group flex flex-col items-center text-center p-5 rounded-2xl bg-stone-50/70 hover:bg-white hover:border-[#25D366]/40 border border-stone-200/60 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center transition-colors duration-200 mb-3">
                <MessageCircle className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                {t.contact.whatsappLabel}
              </span>
              <span className="text-sm font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#25D366] transition-colors" dir="ltr">
                {t.contact.whatsappValue}
              </span>
              <span className="text-[11px] text-stone-600 mt-1 flex items-center gap-1">
                {locale === 'ar' ? 'محادثة مباشرة' : 'Direct chat'}
                <ArrowUpRight className="w-3 h-3 rtl:rotate-[-90deg]" />
              </span>
            </a>

            {/* Email (Tap-to-mail & copy) */}
            <a
              href={`mailto:${t.contact.emailValue}`}
              id="contact-email-link"
              className="group flex flex-col items-center text-center p-5 rounded-2xl bg-stone-50/70 hover:bg-white hover:border-[#FF5C7A]/30 border border-stone-200/60 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 relative"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FF5C7A]/10 text-[#FF5C7A] group-hover:bg-[#FF5C7A] group-hover:text-white flex items-center justify-center transition-colors duration-200 mb-3">
                <Mail className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                {t.contact.emailLabel}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#FF5C7A] transition-colors break-all">
                {t.contact.emailValue}
              </span>
              <div className="mt-1.5 flex items-center gap-2">
                <span className="text-[11px] text-stone-600 flex items-center gap-1">
                  {locale === 'ar' ? 'إرسال بريد' : 'Send email'}
                  <ArrowUpRight className="w-3 h-3 rtl:rotate-[-90deg]" />
                </span>
                <button
                  type="button"
                  title="Copy email"
                  aria-label="Copy email address"
                  onClick={(e) => copyToClipboard(t.contact.emailValue, 'email', e)}
                  className="p-1 rounded-md text-stone-600 hover:text-[#1A1A1A] hover:bg-stone-200/60 transition-colors"
                >
                  {copiedKey === 'email' ? (
                    <Check className="w-3 h-3 text-emerald-600" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            </a>

            {/* Location (Display only) */}
            <div
              id="contact-location-display"
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-stone-50/70 border border-stone-200/60 shadow-xs"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FFB36B]/20 text-[#FF9544] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                {t.contact.locationLabel}
              </span>
              <span className="text-sm font-bold text-[#1A1A1A] tracking-tight">
                {t.contact.locationValue}
              </span>
              <span className="text-[11px] text-stone-600 mt-1">
                {locale === 'ar' ? 'جامعة الخليج (GUST)' : 'Gulf University (GUST)'}
              </span>
            </div>

            {/* LinkedIn */}
            <a
              href={t.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin-link"
              className="group flex flex-col items-center text-center p-5 rounded-2xl bg-stone-50/70 hover:bg-white hover:border-[#0A66C2]/40 border border-stone-200/60 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0A66C2]/10 text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white flex items-center justify-center transition-colors duration-200 mb-3">
                <Linkedin className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                {t.contact.linkedinLabel}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#0A66C2] transition-colors" dir="ltr">
                {t.contact.linkedinDisplay.replace('https://', '')}
              </span>
              <span className="text-[11px] text-stone-600 mt-1 flex items-center gap-1">
                {locale === 'ar' ? 'الملف المهني' : 'Professional Profile'}
                <ArrowUpRight className="w-3 h-3 rtl:rotate-[-90deg]" />
              </span>
            </a>

            {/* Instagram */}
            <a
              href={t.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-instagram-link"
              className="group flex flex-col items-center text-center p-5 rounded-2xl bg-stone-50/70 hover:bg-white hover:border-[#E1306C]/40 border border-stone-200/60 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E1306C]/10 text-[#E1306C] group-hover:bg-gradient-to-tr group-hover:from-[#FD1D1D] group-hover:to-[#E1306C] group-hover:text-white flex items-center justify-center transition-all duration-200 mb-3">
                <Instagram className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                {t.contact.instagramLabel}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#E1306C] transition-colors" dir="ltr">
                @{t.contact.instagramDisplay.split('/').pop()}
              </span>
              <span className="text-[11px] text-stone-600 mt-1 flex items-center gap-1">
                {locale === 'ar' ? 'محتوى التسويق' : 'Marketing Insights'}
                <ArrowUpRight className="w-3 h-3 rtl:rotate-[-90deg]" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
