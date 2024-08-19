import './globals.css'

import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'

import Providers from '@/app/providers'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

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
        <Providers>
          <Header />
          <main className="h-full min-h-[calc(100vh_-_466px)]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
