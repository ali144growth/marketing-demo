'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { CAMPAIGNS, CampaignItem } from '@/lib/content';
import { FolderGit2, X, TrendingUp, Tag } from 'lucide-react';

export function WorkSection() {
  const { t, locale } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<CampaignItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      aria-label="Work Campaigns"
      className="w-full py-16 sm:py-24 relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-center lg:text-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5C7A]/10 text-[#FF5C7A] text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{locale === 'ar' ? 'المشاريع والحملات' : 'Featured Projects'}</span>
          </div>
          <h2
            id="work-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-2"
          >
            {t.work.title}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl">
            {t.work.subtitle}
          </p>
        </div>

        {/* Projects Grid: Just Image and Title (Click to open clean details window) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CAMPAIGNS.map((item) => {
            return (
              <button
                key={item.id}
                id={`project-card-${item.id}`}
                type="button"
                onClick={() => setSelectedProject(item)}
                className="group text-start rounded-2xl bg-white/90 backdrop-blur-sm border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,92,122,0.12)] hover:border-[#FF5C7A]/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C7A]"
              >
                {/* Project Image */}
                <div className="relative w-full aspect-[4/3] bg-stone-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title[locale]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Project Title */}
                <div className="p-4 sm:p-5 flex-1 flex items-center justify-between w-full">
                  <h3
                    id={`project-title-${item.id}`}
                    className="text-base sm:text-lg font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#FF5C7A] transition-colors line-clamp-2"
                  >
                    {item.title[locale]}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal Window */}
      {selectedProject && (
        <div
          id="project-details-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-modal-backdrop"
        >
          {/* Modal Container */}
          <div
            id="project-details-window"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-stone-200 overflow-hidden animate-modal-card max-h-[90vh] flex flex-col"
          >
            {/* Modal Image Header */}
            <div className="relative w-full h-40 sm:h-48 bg-stone-100 shrink-0">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title[locale]}
                fill
                sizes="(max-width: 640px) 100vw, 512px"
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Close Button */}
              <button
                id="close-project-modal-btn"
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label={locale === 'ar' ? 'إغلاق النافذة' : 'Close window'}
                className="absolute top-3.5 end-3.5 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-stone-700 hover:text-black hover:bg-white flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Category Pill on Image */}
              <div className="absolute bottom-3 start-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#1A1A1A] text-xs font-semibold shadow-xs">
                <Tag className="w-3.5 h-3.5 text-[#FF5C7A]" />
                <span>{selectedProject.category[locale]}</span>
              </div>
            </div>

            {/* Modal Body: Scrollable with Clean Structure */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
              {/* Title */}
              <div>
                <h3
                  id="modal-project-title"
                  className="text-xl sm:text-2xl font-extrabold text-[#1A1A1A] tracking-tight"
                >
                  {selectedProject.title[locale]}
                </h3>
              </div>

              {/* Role & Platform(s) Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                  <span className="block text-[11px] uppercase font-bold tracking-wider text-stone-500 mb-0.5">
                    {locale === 'ar' ? 'الدور' : 'Role'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#1A1A1A]">
                    {selectedProject.role[locale]}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                  <span className="block text-[11px] uppercase font-bold tracking-wider text-stone-500 mb-0.5">
                    {locale === 'ar' ? 'المنصة' : 'Platform(s)'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#1A1A1A]">
                    {selectedProject.platforms[locale]}
                  </span>
                </div>
              </div>

              {/* Goal */}
              <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/80">
                <span className="block text-[11px] uppercase font-bold tracking-wider text-stone-500 mb-1">
                  {locale === 'ar' ? 'الهدف' : 'Goal'}
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {selectedProject.goal[locale]}
                </p>
              </div>

              {/* What I Did (3-4 short bullet points) */}
              <div className="space-y-2">
                <span className="block text-[11px] uppercase font-bold tracking-wider text-stone-500">
                  {locale === 'ar' ? 'ما قمت به' : 'What I Did'}
                </span>
                <ul className="space-y-1.5">
                  {selectedProject.whatIDid[locale].map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C7A] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="p-3.5 rounded-2xl bg-[#FFF6F4] border border-[#FF5C7A]/20 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-[#FF5C7A] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="flex-1">
                  <span className="block text-[11px] uppercase font-bold tracking-wider text-[#FF5C7A] mb-0.5">
                    {locale === 'ar' ? 'النتائج' : 'Results'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#1A1A1A]">
                    {selectedProject.results[locale]}
                  </span>
                </div>
              </div>

              {/* Tools Used */}
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                <span className="block text-[11px] uppercase font-bold tracking-wider text-stone-500 mb-0.5">
                  {locale === 'ar' ? 'الأدوات المستخدمة' : 'Tools Used'}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-stone-800">
                  {selectedProject.tools[locale]}
                </span>
              </div>

              {/* Dismiss Action */}
              <button
                type="button"
                id="modal-done-btn"
                onClick={() => setSelectedProject(null)}
                className="w-full py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm font-bold transition-colors cursor-pointer mt-2"
              >
                {locale === 'ar' ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
