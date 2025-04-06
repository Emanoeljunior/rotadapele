import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Rota da Pele</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Início
            </Link>
            <Link href="#solution" className="text-sm font-medium hover:underline underline-offset-4">
              Nossa Solução
            </Link>
            <Link href="#results" className="text-sm font-medium hover:underline underline-offset-4">
              Resultados
            </Link>
            <Link href="/acne-assessment" className="text-sm font-medium hover:underline underline-offset-4">
              Avaliação de Acne
            </Link>
          </nav>
          <Button asChild className="hidden md:flex">
            <Link href="/acne-assessment">Avaliação Gratuita</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Alternar menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-sky-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Tratamento Revolucionário para Acne e Pele Saudável
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa solução clinicamente comprovada ataca as causas da acne, proporcionando resultados duradouros
                  onde outros tratamentos falharam.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="px-8">
                    <Link href="/acne-assessment">
                      Faça Sua Avaliação Gratuita <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#solution">Saiba Mais</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] relative">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="Resultados antes e depois do tratamento de acne"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-sm font-medium">4,9/5 de mais de 2.000 usuários</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solution" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossa Solução</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A fórmula exclusiva da Rota da Pele combina ciência avançada com ingredientes naturais para oferecer
                  resultados excepcionais.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Produto Rota da Pele"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Fórmula Multi-Ação</h3>
                      <p className="text-gray-500">
                        Nosso tratamento atua em múltiplos níveis - reduzindo inflamação, eliminando bactérias
                        causadoras de acne e regulando a produção de oleosidade.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Desenvolvido por Dermatologistas</h3>
                      <p className="text-gray-500">
                        Criado por dermatologistas líderes com décadas de experiência tratando até os casos mais graves
                        de acne.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Não Irritante</h3>
                      <p className="text-gray-500">
                        Diferente de tratamentos agressivos que ressecam a pele, nossa fórmula suave fortalece a
                        barreira natural da sua pele.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="w-full py-12 md:py-24 lg:py-32 bg-sky-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Eficácia Comprovada</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossos estudos clínicos mostram resultados notáveis em todos os níveis de gravidade da acne.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center space-y-2 border bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-sky-600">93%</div>
                <p className="text-center text-gray-500">dos usuários viram melhora significativa em 4 semanas</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-sky-600">87%</div>
                <p className="text-center text-gray-500">de redução nas lesões inflamatórias de acne</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-sky-600">96%</div>
                <p className="text-center text-gray-500">dos usuários recomendariam para amigos e familiares</p>
              </div>
            </div>
            <div className="mx-auto max-w-6xl py-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4 border bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Depoimento de usuário"
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Sara T.</h4>
                      <div className="flex">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <p className="italic text-gray-600">
                    "Depois de tentar inúmeros produtos por 10 anos, a Rota da Pele finalmente me deu os resultados que
                    eu estava procurando. Minha pele está limpa pela primeira vez desde que eu era adolescente!"
                  </p>
                </div>
                <div className="space-y-4 border bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      width={60}
                      height={60}
                      alt="Depoimento de usuário"
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Miguel R.</h4>
                      <div className="flex">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <p className="italic text-gray-600">
                    "Eu tinha acne cística grave que nada parecia ajudar. Em 6 semanas usando a Rota da Pele, minha pele
                    estava quase completamente limpa. A confiança que ganhei não tem preço."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Descubra o Nível de Gravidade da Sua Acne
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
              Faça nossa avaliação rápida para obter recomendações de tratamento personalizadas com base na condição
              única da sua pele.
            </p>
            <Button asChild size="lg" className="px-8">
              <Link href="/acne-assessment">
                Iniciar Avaliação Gratuita <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 px-4 md:px-6">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Rota da Pele</span>
            </div>
            <p className="text-sm text-gray-500">
              Soluções inovadoras para peles com tendência à acne. Respaldado pela ciência, confiado por
              dermatologistas.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Produtos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Tratamento
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Limpeza
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Hidratante
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Termos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm text-gray-500">
          <div className="container px-4 md:px-6">
            &copy; {new Date().getFullYear()} Rota da Pele. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

