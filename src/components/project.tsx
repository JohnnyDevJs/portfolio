import { useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

export type ProjectProps = {
  category: string
  name: string
  stacks: string[]
  description: string
  url: string
}

export function Project({
  category,
  name,
  stacks,
  description,
  url,
}: ProjectProps) {
  const t = useTranslations('projects')

  return (
    <Card
      id={category}
      className={cn(
        'h-full overflow-hidden',
        category === 'Freelance' && 'bg-muted',
      )}
    >
      <CardHeader>
        <CardTitle className="text-lg text-primary">{name}</CardTitle>
        <ul className="flex space-x-2">
          {stacks.map((stack, index) => (
            <li key={index}>
              <Badge variant={category === 'Freelance' ? 'card' : 'secondary'}>
                {stack}
              </Badge>
            </li>
          ))}
        </ul>
      </CardHeader>
      <div>
        <CardContent className="text-base">{description}</CardContent>
        <CardFooter>
          <Tooltip>
            <TooltipTrigger>
              <Button asChild>
                <a href={url} target="_blank">
                  {t('button')}
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {t('tooltip')} {name}
            </TooltipContent>
          </Tooltip>
        </CardFooter>
      </div>
    </Card>
  )
}
