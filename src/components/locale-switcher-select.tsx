'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { FiGlobe } from 'react-icons/fi'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Locale } from '@/config'
import { setUserLocale } from '@/services/locale'

type LocaleSwitcherSelectProps = {
  defaultValue: string
  items: Array<{ value: string; label: string }>
}

export function LocaleSwitcherSelect({
  defaultValue,
  items,
}: LocaleSwitcherSelectProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const onSelectChange = (value: string) => {
    const locale = value as Locale
    startTransition(() => {
      setUserLocale(locale)
      router.replace(`/${value}`)
    })
  }
  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-auto gap-2">
        <FiGlobe className="h-[1.2rem] w-[1.2rem] text-primary" />
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        {items.map((item, index) => (
          <SelectItem key={index} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
