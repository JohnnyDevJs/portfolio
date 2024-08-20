import { Experiences } from '@/components/experiences'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full min-h-[calc(100vh_-_29.125rem)] space-y-10">
        <Skills />
        <Experiences />
      </main>
      <Footer />
    </>
  )
}
