import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/Toaster';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Wondwossen Hailu - Software Engineer & AWS Solutions Architect',
    template: '%s | Wondwossen Hailu'
  },
  description: 'Experienced Software Engineer and AWS Solutions Architect specializing in cloud-native applications, microservices architecture, and scalable solutions. Portfolio showcasing full-stack development and AWS expertise.',
  keywords: [
    'software engineer',
    'AWS solutions architect',
    'cloud architecture',
    'full-stack development',
    'microservices',
    'serverless',
    'DevOps',
    'portfolio',
    'React',
    'Node.js',
    'TypeScript',
    'AWS',
    'cloud computing'
  ],
  authors: [{ name: 'Wondwossen Hailu' }],
  creator: 'Wondwossen Hailu',
  publisher: 'Wondwossen Hailu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://wondwossen.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'es-ES': '/es',
      'fr-FR': '/fr',
      'de-DE': '/de',
      'zh-CN': '/zh',
      'ja-JP': '/ja',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wondwossen.com',
    title: 'Wondwossen Hailu - Software Engineer & AWS Solutions Architect',
    description: 'Experienced Software Engineer and AWS Solutions Architect specializing in cloud-native applications, microservices architecture, and scalable solutions.',
    siteName: 'Wondwossen Hailu Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wondwossen Hailu - Software Engineer & AWS Solutions Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wondwossen Hailu - Software Engineer & AWS Solutions Architect',
    description: 'Experienced Software Engineer and AWS Solutions Architect specializing in cloud-native applications, microservices architecture, and scalable solutions.',
    images: ['/og-image.jpg'],
    creator: '@wondwossen',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Wondwossen Hailu Portfolio" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
} 