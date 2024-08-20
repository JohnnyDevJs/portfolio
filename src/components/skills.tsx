import { useTranslations } from 'next-intl'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Skills() {
  const skills = [
    { name: 'React' },
    { name: 'React Native' },
    { name: 'Next.js' },
    { name: 'Vue.js' },
    { name: 'Nuxt' },
    { name: 'PHP' },
    { name: 'WordPress' },
    { name: 'TypeScript' },
    { name: 'Javascript' },
    { name: 'Node.js' },
    { name: 'Jest' },
    { name: 'Cypress' },
    { name: 'React Testing Library' },
    { name: 'Git' },
  ]

  const t = useTranslations('skills')

  return (
    <section>
      <div className="container">
        <Card>
          <CardHeader>
            <CardTitle className="max-sm:text-2xl [&>span]:text-primary">
              <span>&lt;</span>
              {t('title')} <span>/&gt;</span>
            </CardTitle>
            <CardDescription>{t('description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid list-disc grid-cols-2 gap-3 px-4 max-sm:grid-cols-1">
              {skills.map((skill, index) => (
                <li key={index} className="font-medium marker:text-primary">
                  {skill.name}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
