'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-8 border-t border-stone-200/60 bg-white/40 backdrop-blur-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-medium text-stone-600">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
