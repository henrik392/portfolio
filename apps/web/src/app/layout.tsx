import type { Metadata } from 'next';
import { JetBrains_Mono, Mona_Sans, Uncial_Antiqua } from 'next/font/google';
import '../index.css';
import Header from '@/components/header';
import Providers from '@/components/providers';

const monaSans = Mona_Sans({
  variable: '--font-mona-sans',
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

const monoFont = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

const uncialAntiqua = Uncial_Antiqua({
  variable: '--font-uncial-antiqua',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'portfolio',
  description: 'portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${monaSans.variable} ${monoFont.variable} ${uncialAntiqua.variable} overflow-x-hidden antialiased`}
      >
        <Providers>
          <div className="relative h-svh bg-black">
            {/* Overlay header */}
            <div className="absolute top-0 right-0 left-0 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <Header />
            </div>

            <main className="h-full overflow-auto">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
