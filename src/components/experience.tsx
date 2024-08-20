import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type ExperienceProps = {
  position: string
  company: string
  description: string
  todos: string[]
  date: string
}

export function Experience({
  position,
  company,
  description,
  todos,
  date,
}: ExperienceProps) {
  const highlightedNames = ['Next.js', 'React', 'WordPress', 'Vue.js', 'Nuxt']

  return (
    <div className="border-b border-muted pb-8">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-primary">{position}</h3>
        <span className="text-lg font-medium">{company}</span>
      </div>
      <p className="text-base">{description}</p>
      <Card className="my-4">
        <CardContent className="pt-6">
          <ul className="list-disc space-y-3 px-4 max-sm:grid-cols-1">
            {todos.map((todo, index) => {
              const isHighlighted = highlightedNames.some((name) =>
                todo.includes(name),
              )
              return (
                <li
                  key={index}
                  className={cn(
                    'font-medium marker:text-primary',
                    isHighlighted && 'text-primary',
                  )}
                >
                  {todo}
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Card>
      <p className="text-end font-semibold">{date}</p>
    </div>
  )
}
