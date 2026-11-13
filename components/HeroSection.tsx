'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { TrendingUp, ArrowDown, Mail, ArrowUpRight, Check } from 'lucide-react';

export function HeroSection() {
  const { t, locale } = useLanguage();

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative w-full pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden"
    >
      {/* Soft warm gradient mesh background accent (Coral-pink to soft orange) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 start-1/2 -translate-x-1/2 w-[520px] sm:w-[720px] h-[340px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#FF5C7A]/18 via-[#FFB36B]/20 to-[#FFFBF7] blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 end-4 sm:end-20 w-[240px] sm:w-[360px] h-[240px] sm:h-[360px] rounded-full bg-gradient-to-bl from-[#FFB36B]/15 to-[#FF5C7A]/12 blur-2xl -z-10"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-start flex flex-col items-center lg:items-start max-w-xl">
            {/* Status Badge */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-stone-200/80 shadow-xs mb-6 text-xs sm:text-sm font-medium text-stone-700 hover:border-[#FF5C7A]/40 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5C7A] animate-ping opacity-75" />
              <span>{t.hero.statusBadge}</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.25] sm:leading-[1.2] mb-5"
            >
              {t.hero.headline}
            </h1>

            {/* Minimal Sub-Callout with upward trend-line tick */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-500 mb-8 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-stone-200/50">
              <span className="p-1 rounded-md bg-[#FF5C7A]/10 text-[#FF5C7A]">
                <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
              <span>{t.hero.universityTag}</span>
            </div>

            {/* 2 CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#work"
                id="hero-primary-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF5C7A] hover:bg-[#F24666] text-white font-semibold text-sm shadow-[0_8px_20px_rgba(255,92,122,0.28)] hover:shadow-[0_10px_24px_rgba(255,92,122,0.38)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                id="hero-secondary-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl backdrop-blur-md bg-white/80 hover:bg-white text-[#1A1A1A] font-medium text-sm border border-stone-200/80 shadow-xs hover:border-[#FF5C7A]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-[#FF5C7A]" />
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Personal Image / Circular Frame with Coral-to-Orange Gradient Ring */}
          <div className="relative flex-shrink-0">
            {/* Outer gradient glow behind portrait frame */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-[#FF5C7A]/30 to-[#FFB36B]/30 blur-2xl animate-float-subtle -z-10"
            />

            {/* Coral-to-orange gradient ring container */}
            <div className="relative p-1.5 sm:p-2 rounded-full bg-gradient-to-tr from-[#FF5C7A] via-[#FF8E72] to-[#FFB36B] shadow-[0_12px_36px_rgba(255,92,122,0.22)]">
              {/* Inner frosted glass border */}
              <div className="p-1 rounded-full bg-white/80 backdrop-blur-md">
                {/* Circular image frame */}
                <div
                  id="hero-portrait-frame"
                  className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-gradient-to-b from-[#FFF5EE] to-[#FFEFEA] flex items-center justify-center border border-white/60"
                >
                  <Image
                    src="https://ik.imagekit.io/imgy4/Images%20used%20in%20websites/p3.png"
                    alt={locale === 'ar' ? 'نورة العجمي' : 'Noura Al-Ajmi'}
                    fill
                    sizes="(max-width: 640px) 224px, 256px"
                    className="object-cover"
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
