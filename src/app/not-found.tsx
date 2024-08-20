import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Johnny Silva - Página não encontrada',
}

export default function PageNotFound() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-5xl font-semibold text-primary">Ooops!!!</h1>
      <p className="text-lg">Página não encontrada!</p>
      <Button className="mt-4" asChild>
        <Link href="/" className="flex items-center gap-1">
          <ArrowLeftIcon /> Voltar para página inicial
        </Link>
      </Button>
    </div>
  )
}
