import { useTranslations } from 'next-intl'
import { FaWhatsapp } from 'react-icons/fa'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function WhatsAppButton() {
  const t = useTranslations('whatsapp')

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="https://api.whatsapp.com/send/?phone=19993035607&text=Ol%C3%A1!+Quero+falar+sobre+desenvolvimento+de+aplica%C3%A7%C3%B5es.&app_absent=0"
          target="_blank"
          className="fixed bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary transition-all duration-300 hover:-translate-y-1"
        >
          <FaWhatsapp className="h-6 w-6 text-white" />
        </a>
      </TooltipTrigger>
      <TooltipContent>{t('message')}</TooltipContent>
    </Tooltip>
  )
}
