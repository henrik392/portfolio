import type { Metadata } from 'next';
import { Geist_Mono, JetBrains_Mono, Mona_Sans } from 'next/font/google';
import '../index.css';
import Header from '@/components/header';
import Providers from '@/components/providers';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const monaSans = Mona_Sans({
  variable: '--font-mona-sans',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

const monoFont = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
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
        className={`${geistMono.variable} ${monaSans.variable} ${monoFont.variable} overflow-x-hidden antialiased`}
      >
        <Providers>
          <div className="relative h-svh bg-black">
            {/* Overlay header */}
            <div className="absolute top-0 right-0 left-0 z-50 mx-auto w-full max-w-7xl">
              <Header />
            </div>

            <main className="h-full overflow-auto">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
