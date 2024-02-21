import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fossmeet',
  description: 'Fosscell',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>FOSS&apos;24 – FOSSCell, NIT Calicut</title>
        <link rel="icon" href="/embed-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
