import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { Params } from '@/app/layout'
import { Button } from '@/components/ui/button'

export async function generateMetadata({ params }: { params: Params }) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'notFound',
  })

  return {
    title: `Johnny Silva - ${t('message')}`,
  }
}

export default function PageNotFound() {
  const t = useTranslations('notFound')

  return (
    <div className="container flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-5xl font-semibold text-primary">Ooops...</h1>
      <p className="text-lg">{t('message')}!</p>
      <Button className="mt-4" asChild>
        <Link href="/" className="flex items-center gap-1">
          <ArrowLeftIcon /> {t('button')}
        </Link>
      </Button>
    </div>
  )
}
