import { Experience } from '@/components/experience'

export function Experiences() {
  const experiences = [
    {
      position: 'WordPress e React Senior Developer',
      company: 'Prodesp - Governo do Estado de São Paulo',
      description:
        'Atuo no desenvolvimento e manutenção de Portais do Governo do Estado de São Paulo, alguns Portais desenvolvidos utilizando WordPress e outros utilizando Next.js.',
      todos: [
        'Next.js',
        'WordPress',
        'Desenvolvimento sob demanda',
        'Arquitetura Limpa',
      ],
      date: 'Março de 2021 - atual',
    },
    {
      position: 'WordPress e Vue.js Senior Developer (PJ)',
      company: 'Usabit Global - Ânima Educação',
      description:
        'Atuei no desenvolvimento de uma aplicação white label que ajuda empresas de pequeno e médio porte a conseguirem investimento através de crowdfunding',
      todos: [
        'WordPress',
        'Vue.js',
        'Nuxt',
        'Desenvolvimento sob demanda',
        'Arquitetura Limpa',
      ],
      date: 'Maio de 2021 - Junho de 2024',
    },
  ]

  return (
    <section>
      <div className="container space-y-8">
        <h3 className="text-3xl font-semibold leading-none tracking-tight max-sm:text-2xl [&>span]:text-primary">
          <span>&lt;</span>Experiências <span>/&gt;</span>
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
