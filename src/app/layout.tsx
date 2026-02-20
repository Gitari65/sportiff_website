import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Kerugoya Sportiff - Community Football Club',
  description: 'Building champions, discipline, and community pride in Kerugoya, Kenya.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  metadataBase: new URL('https://kerugoyasportiff.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
