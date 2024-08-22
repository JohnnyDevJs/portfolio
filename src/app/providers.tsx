import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { ThemeProvider } from '@/app/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'

export default async function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
