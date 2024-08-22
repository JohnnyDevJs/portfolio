import '@/app/globals.css'

import { Fira_Code } from 'next/font/google'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

import Providers from '@/app/providers'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Locale, locales } from '@/config'

const firaCode = Fira_Code({ subsets: ['latin'] })

export type Params = {
  locale: string
}
export const dynamic = 'force-dynamic'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Params }) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'homePage',
  })

  return {
    title: `Johnny Silva - ${t('message')}`,
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body className={firaCode.className}>
        <Providers>
          {children}
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  )
}
