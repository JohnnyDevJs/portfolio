'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Experiences } from '@/components/experiences'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function HomePage() {
  const t = useTranslations('projects')

  const [selectedCategory, setSelectedCategory] = useState<string>(
    t('select.options.0'),
  )

  return (
    <>
      <Header />
      <main className="h-full min-h-[calc(100vh_-_29.125rem)] space-y-12">
        <Skills />
        <Experiences />
        <Projects
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </main>
      <Footer />
    </>
  )
}
