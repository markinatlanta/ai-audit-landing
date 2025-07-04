
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Free AI Audit - JKS Advisory | Save 10+ Hours Per Week',
  description: 'Get a free 30-minute AI audit from JKS Advisory. Discover how AI automation can save your small business 10+ hours per week. Book your consultation today.',
  keywords: 'AI audit, business automation, AI consulting, small business, productivity, JKS Advisory',
  openGraph: {
    title: 'Free AI Audit - Save 10+ Hours Per Week | JKS Advisory',
    description: 'Discover how AI can transform your business operations. Free 30-minute consultation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
