'use client'

import { ReactNode, useState } from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type CopyToClipboardProps = {
  link: string
  initialMessage: string
  message: string
  children: ReactNode
}

export function CopyToClipboard({
  link,
  children,
  initialMessage,
  message,
}: CopyToClipboardProps) {
  const [showMessage, setShowMessage] = useState<string>(initialMessage)
  const [showTooltip, setShowTooltip] = useState<boolean>(false)

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(link).then(
      () => {
        setShowMessage(message)
        setShowTooltip(true)
        setTimeout(() => {
          setShowTooltip(false)
          setShowMessage(initialMessage)
        }, 2000)
      },
      () => {
        setShowMessage('Falha ao copiar o link.')
        setShowTooltip(true)
        setTimeout(() => {
          setShowTooltip(false)
          setShowMessage(initialMessage)
        }, 2000)
      },
    )
  }

  return (
    <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
      <TooltipTrigger asChild>
        <button onClick={handleCopyToClipboard}>{children}</button>
      </TooltipTrigger>
      <TooltipContent>{showMessage}</TooltipContent>
    </Tooltip>
  )
}
