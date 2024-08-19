import { FaHeart } from 'react-icons/fa'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Footer() {
  return (
    <footer className="my-4 flex flex-col items-center text-center">
      <div className="container">
        <p className="text-center text-sm">
          © Copyright 2024 - Johnny Silva (Johnny Dev){' '}
          <code className="font-bold text-primary">&lt;JS/&gt;</code>
        </p>
        <p className="flex items-center justify-center gap-2 text-sm">
          Feito com <FaHeart className="text-primary" /> por Johnny Silva,
          utilizando{' '}
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="font-medium text-primary underline"
              >
                Next.js
              </a>
            </TooltipTrigger>
            <TooltipContent>Ir para Next.js</TooltipContent>
          </Tooltip>{' '}
          e{' '}
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://ui.shadcn.com/"
                target="_blank"
                className="font-medium text-primary underline"
              >
                shadcn/ui
              </a>
            </TooltipTrigger>
            <TooltipContent>Ir para shadcn/ui</TooltipContent>
          </Tooltip>
        </p>
      </div>
    </footer>
  )
}
