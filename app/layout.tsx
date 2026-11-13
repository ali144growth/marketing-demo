import type {Metadata} from 'next';
import { Outfit, Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic-font',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Noura Al-Ajmi — Marketing Student Portfolio',
  description: 'Bilingual portfolio of Noura Al-Ajmi, marketing student at Gulf University for Science and Technology featuring coursework campaigns and growth strategy projects.',
  openGraph: {
    title: 'Noura Al-Ajmi — Marketing Student Portfolio',
    description: 'Bilingual portfolio of Noura Al-Ajmi, marketing student at Gulf University for Science and Technology featuring coursework campaigns and growth strategy projects.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noura Al-Ajmi — Marketing Student Portfolio',
    description: 'Bilingual portfolio of Noura Al-Ajmi, marketing student at Gulf University for Science and Technology featuring coursework campaigns and growth strategy projects.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" dir="ltr" className={`scroll-smooth ${outfit.variable} ${plusJakarta.variable} ${ibmPlexArabic.variable}`}>
      <body className="min-h-screen bg-[#FFFBF7] text-[#1A1A1A] antialiased selection:bg-[#FF5C7A]/20 selection:text-[#FF5C7A]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
