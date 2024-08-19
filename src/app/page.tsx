import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full min-h-[calc(100vh_-_466px)]">
        <div className="container">
          <h1>Conteúdo aqui</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}
