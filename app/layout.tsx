import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Algo Traders Club | Master Algorithmic Trading on Solana',
  description: 'Learn algorithmic trading on Solana with the #1 community. Deploy autonomous trading agents and master the hottest skill of 2025.',
  keywords: ['algorithmic trading', 'solana', 'crypto trading', 'trading bots', 'defi', 'liquidity pools'],
  authors: [{ name: 'Algo Traders Club Team' }],
  creator: 'Algo Traders Club',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://algotradersclub.com',
    title: 'Algo Traders Club | Master Algorithmic Trading on Solana',
    description: 'Learn algorithmic trading on Solana with the #1 community. Deploy autonomous trading agents and master the hottest skill of 2025.',
    siteName: 'Algo Traders Club',
    images: [{
      url: '/atc-share-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Algo Traders Club - Algorithmic Trading on Solana',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algo Traders Club | Master Algorithmic Trading on Solana',
    description: 'Learn algorithmic trading on Solana with the #1 community. Deploy autonomous trading agents and master the hottest skill of 2025.',
    creator: '@algotradersclub',
    images: ['/atc-share-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
