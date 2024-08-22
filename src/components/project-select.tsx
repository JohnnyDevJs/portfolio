'use client'

import { useTranslations } from 'next-intl'

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { ProjectSelectItem } from './project-select-item'

type ProjectSelectProps = {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function ProjectSelect({
  selectedCategory,
  onSelectCategory,
}: ProjectSelectProps) {
  function handleSelectChange(value: string) {
    onSelectCategory(value)
  }

  const t = useTranslations('projects')

  return (
    <Select value={selectedCategory} onValueChange={handleSelectChange}>
      <SelectTrigger className="w-32">
        <SelectValue placeholder={t('select.options.0')} />
      </SelectTrigger>
      <SelectContent>
        <ProjectSelectItem />
      </SelectContent>
    </Select>
  )
}
