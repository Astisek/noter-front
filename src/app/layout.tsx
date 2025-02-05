import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ClientProvider } from '@/components/CientProvider';

const font = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: 'Noter App',
  description: 'Noter App',
};

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
