import Script from 'next/script'
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
      <head>
<link rel="canonical" href="https://ai-audit-landing-live.vercel.app/" />

<Script
  id="seo-meta"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      <meta property="og:title" content="Free AI Audit for Small Businesses – JKS Advisory" />
      <meta property="og:description" content="Get a free 30-minute AI audit and discover how to save 10+ hours/week with automation." />
      <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    `,
  }}
/>

        
  <Script
    strategy="afterInteractive"
    src="https://www.googletagmanager.com/gtag/js?id=AW-17307204764"
  />
  <Script
    id="gtag-init"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17307204764');

      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
          send_to: 'AW-17307204764/5AqcCPW16ukaEJz527xA',
          event_callback: callback
        });
        return false;
      }

        
      `,
    }}
  />
</head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
