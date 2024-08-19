import './globals.css'

import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'

import { Footer } from '@/app/components/footer'
import { Header } from '@/app/components/Header'

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Johnny Silva',
  description: 'Johnny Dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={firaCode.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
