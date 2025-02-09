import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ClientProvider } from '@/components/ClientProvider';
import { defaultMetadata, defaultViewport } from '@/data/app';

const font = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = defaultMetadata;
export const viewport: Viewport = defaultViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-background-100`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
