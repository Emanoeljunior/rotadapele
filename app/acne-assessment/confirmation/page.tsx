"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckCircle, Clock, Mail, ArrowRight, CalendarClock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

export default function Confirmation() {
  const router = useRouter()
  const [assessmentId, setAssessmentId] = useState<string>("")

  useEffect(() => {
    // Recuperar o ID da avaliação do localStorage
    const id = localStorage.getItem("assessmentId")
    if (!id) {
      toast({
        title: "Erro",
        description: "Informações da avaliação não encontradas. Por favor, preencha o formulário novamente.",
        variant: "destructive",
      })
      router.push("/acne-assessment")
    } else {
      setAssessmentId(id)

      // Limpar o ID da avaliação do localStorage após a confirmação
      // para evitar que o usuário acesse esta página novamente sem preencher o formulário
      localStorage.removeItem("assessmentId")
    }
  }, [router])

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
            <Link href="/#solution" className="text-sm font-medium hover:underline underline-offset-4">
              Nossa Solução
            </Link>
            <Link href="/#results" className="text-sm font-medium hover:underline underline-offset-4">
              Resultados
            </Link>
            <Link href="/acne-assessment" className="text-sm font-medium hover:underline underline-offset-4">
              Avaliação de Acne
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container max-w-4xl px-4 py-12 md:px-6 md:py-24">
          <div className="text-center space-y-4 mb-12">
            <div className="mx-auto bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recebemos suas informações!</h1>
            <p className="text-gray-500 md:text-xl max-w-2xl mx-auto">
              Obrigado por compartilhar os detalhes sobre sua condição de pele. Nossos dermatologistas já começaram a
              trabalhar no seu diagnóstico personalizado.
            </p>
            {assessmentId && (
              <p className="text-sm text-gray-500">
                ID da sua avaliação: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{assessmentId}</span>
              </p>
            )}
          </div>

          <Card className="mb-12 border-green-100 bg-green-50">
            <CardContent className="p-6 sm:p-8">
              <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-green-600">
                    <Clock className="h-5 w-5" />
                    <h2 className="text-xl font-semibold">Seu diagnóstico está a caminho</h2>
                  </div>
                  <p className="text-gray-600">
                    Nossos especialistas estão analisando cuidadosamente suas fotos e informações para criar um plano de
                    tratamento personalizado para você.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <div className="flex items-center gap-3">
                      <CalendarClock className="h-10 w-10 text-green-600" />
                      <div>
                        <p className="font-medium">Prazo para seu diagnóstico:</p>
                        <p className="text-lg font-bold text-green-600">24 horas</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-green-600">
                    <Mail className="h-5 w-5" />
                    <h2 className="text-xl font-semibold">Como você receberá o diagnóstico</h2>
                  </div>
                  <p className="text-gray-600">
                    Enviaremos seu diagnóstico completo e recomendações de tratamento para o e-mail que você forneceu.
                    Verifique também sua pasta de spam.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Análise detalhada da sua condição de pele</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Plano de tratamento personalizado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Recomendações de produtos específicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Dicas de cuidados diários para sua pele</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold">Enquanto isso...</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Conheça mais sobre nossa abordagem única para o tratamento de acne e descubra histórias de sucesso de
              pessoas que transformaram sua pele com a Rota da Pele.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="outline">
                <Link href="/#solution">Conheça Nossa Solução</Link>
              </Button>
              <Button asChild>
                <Link href="/#results">
                  Ver Histórias de Sucesso <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container py-6 text-center text-sm text-gray-500 px-4 md:px-6">
          &copy; {new Date().getFullYear()} Rota da Pele. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

