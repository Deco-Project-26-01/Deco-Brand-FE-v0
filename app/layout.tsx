import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script' // GA 연동

import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// 1. SEO 최적화 타이틀 및 메타데이터 적용
export const metadata: Metadata = {
  title: 'Custom 18K Gold Jewelry Manufacturer in South Korea | DECO IND CO., LTD.',
  description: 'DECO IND CO., LTD. is a leading custom jewelry manufacturer in South Korea since 1986, specializing in 10K/14K/18K gold and high-quality jewelry for global export.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 2. Google Analytics (GA4) 연동 코드 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7CC6K839JT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7CC6K839JT');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}