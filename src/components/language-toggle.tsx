'use client'

import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useTransition } from 'react'
import { FiGlobe } from 'react-icons/fi'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function LanguageToggle() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActive = useLocale()

  const onSelectChange = (value: string) => {
    startTransition(() => {
      router.replace(`/${value}`)
    })
  }
  return (
    <Select
      defaultValue={localActive}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-auto gap-2">
        <FiGlobe className="h-[1.2rem] w-[1.2rem] text-primary" />
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt">PT</SelectItem>
        <SelectItem value="en">EN</SelectItem>
      </SelectContent>
    </Select>
  )
}
