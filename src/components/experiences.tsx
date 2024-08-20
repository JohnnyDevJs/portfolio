import { useTranslations } from 'next-intl'

import { Experience } from '@/components/experience'

export function Experiences() {
  const t = useTranslations('experiences')

  const experiences = [
    {
      position: t('one.position'),
      company: t('one.company'),
      description: t('one.description'),
      todos: Array.from({ length: t.raw('one.todos').length }, (_, i) =>
        t(`one.todos.${i}`),
      ),
      date: t('one.date'),
    },
    {
      position: t('two.position'),
      company: t('two.company'),
      description: t('two.description'),
      todos: Array.from({ length: t.raw('two.todos').length }, (_, i) =>
        t(`two.todos.${i}`),
      ),
      date: t('two.date'),
    },
  ]

  return (
    <section>
      <div className="container space-y-8">
        <h3 className="text-3xl font-semibold leading-none tracking-tight max-sm:text-2xl [&>span]:text-primary">
          <span>&lt;</span>
          {t('title')} <span>/&gt;</span>
        </h3>

        {experiences.map((experience, index) => (
          <Experience
            key={index}
            position={experience.position}
            company={experience.company}
            description={experience.description}
            todos={experience.todos}
            date={experience.date}
          />
        ))}
      </div>
    </section>
  )
}
