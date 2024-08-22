'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Experiences } from '@/components/experiences'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export function Sections() {
  const t = useTranslations('projects')

  const [selectedCategory, setSelectedCategory] = useState<string>(
    t('select.options.0'),
  )
  return (
    <>
      <Skills />
      <Experiences />
      <Projects
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
    </>
  )
}
