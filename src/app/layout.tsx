import './globals.css'

import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'

import Providers from '@/app/providers'

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Johnny Silva - Página inicial',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={firaCode.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
