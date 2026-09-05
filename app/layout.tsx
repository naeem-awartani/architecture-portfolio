import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import MotionSystem from './MotionSystem';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://naeem-awartani.github.io'),
  title: 'Naeem Al-Awartany — Architect / Architectural Designer',
  description: 'Personal architecture portfolio of Naeem Al-Awartany, an architectural designer based in Amman, Jordan.',
  openGraph: {
    title: 'Naeem Al-Awartany — Architecture of Belonging',
    description: 'Academic and conceptual architectural work shaped by culture, context, imagination, and human experience.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naeem Al-Awartany — Architecture of Belonging',
    description: 'Academic and conceptual architectural work shaped by culture, context, imagination, and human experience.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionSystem />
        {children}
      </body>
    </html>
  );
}
