import type React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Henok Worku',
  description:
    'Professional portfolio showcasing modern web development skills and projects',
  keywords: ['portfolio', 'web development', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Henok Worku', url: 'https://henok.worku.dev' }],
  creator: 'Henok Worku',
  openGraph: {
    title: 'Henok Worku | Portfolio',
    description:
      'Professional portfolio showcasing modern web development skills and projects',
    url: 'https://henok.worku.dev',
    siteName: 'Henok Worku',
    images: [
      {
        url: '/og-image.jpg', // Optimized version of _DSC0319.JPG
        width: 1200,
        height: 630,
        alt: 'Henok Worku Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henok Worku | Portfolio',
    description:
      'Professional portfolio showcasing modern web development skills and projects',
    creator: '@henok_worku',
    images: ['/og-image.jpg'], // Optimized version of _DSC0319.JPG
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon-32x32.png', // Favicon from _DSC0319.JPG
    apple: '/apple-touch-icon.png', // Apple Touch Icon from _DSC0319.JPG
    shortcut: '/shortcut-icon.png', // Shortcut Icon from _DSC0319.JPG
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification=your-verification-code',
    yandex: 'yandex-verification=your-verification-code',
    other: {
      name: 'Bing',
      value: 'bing-site-verification=your-verification-code',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
