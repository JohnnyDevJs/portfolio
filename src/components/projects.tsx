import { useTranslations } from 'next-intl'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useMediaQueryMatch } from '@/lib/use-media-query-match'
import { cn } from '@/lib/utils'

import { Project } from './project'
import { ProjectSelect } from './project-select'

type ProjectsProps = {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function Projects({
  selectedCategory,
  onSelectCategory,
}: ProjectsProps) {
  const t = useTranslations('projects')

  const projects = [
    {
      name: t('iro.name'),
      category: t('select.options.1'),
      description: t('iro.description'),
      stacks: ['HTML', 'WordPress', 'CSS'],
      url: 'https://iro.com.br/site/',
    },
    {
      name: t('locksmith.name'),
      category: t('select.options.2'),
      description: t('locksmith.description'),
      stacks: ['HTML', 'WordPress', 'CSS'],
      url: 'https://serralheriajovemprofeta.com.br/',
    },
    {
      name: t('digitalHealth.name'),
      category: t('select.options.1'),
      description: t('digitalHealth.description'),
      stacks: ['Next.js', 'React', 'TailwindCSS'],
      url: 'https://saudedigitalhml.saude.sp.gov.br/',
    },
  ]

  const filteredProjects =
    selectedCategory === t('select.options.0')
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  const isMaxLg = useMediaQueryMatch('max-lg')

  return (
    <section>
      <div className="container space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-semibold leading-none tracking-tight max-sm:text-2xl [&>span]:text-primary">
            <span>&lt;</span>
            {t('title')} <span>/&gt;</span>
          </h3>
          <ProjectSelect
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />
        </div>

        <Carousel
          opts={{
            align: 'start',
          }}
          className={cn(
            'w-full',
            isMaxLg && 'm-auto max-w-[calc(100%_-100px)]',
          )}
        >
          <CarouselContent>
            {filteredProjects.map((project, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <Project
                  category={project.category}
                  description={project.description}
                  name={project.name}
                  stacks={project.stacks}
                  url={project.url}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {filteredProjects.length > 3 ||
            (isMaxLg && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            ))}
        </Carousel>
      </div>
    </section>
  )
}
