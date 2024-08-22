'use client'

import { useTranslations } from 'next-intl'

import { SelectItem } from '@/components/ui/select'

export function ProjectSelectItem() {
  const t = useTranslations('projects')

  const categories = Array.from(
    { length: t.raw('select.options').length },
    (_, i) => ({
      name: t(`select.options.${i}`),
      value: t(`select.options.${i}`),
    }),
  )

  return categories.map((category, index) => (
    <SelectItem key={index} value={category.value}>
      {category.name}
    </SelectItem>
  ))
}
