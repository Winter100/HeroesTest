import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './_components/layout/Header';
import Footer from './_components/layout/Footer';
import MainSection from './_components/layout/Main';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Heros',
  description: '...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${inter.className} border border-red-600`}>
        <Header />
        <MainSection>{children}</MainSection>
        <Footer />
      </body>
    </html>
  );
}
