"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { saveAssessmentData } from "../actions/assessment"
import { toast } from "@/components/ui/use-toast"

export default function AcneAssessment() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      // const response = await saveAssessmentData(formData)

      // if (response.success) {
      //   // Armazenar o ID da avaliação no localStorage para uso na página de upload de fotos
      //   localStorage.setItem("assessmentId", response.id)
    router.push("/acne-assessment/photo-upload")
    // } else {
    //   toast({
    //     title: "Erro",
    //     description: response.message,
    //     variant: "destructive",
    //   })
    // }
    // } catch (error) {
    //   console.error("Erro ao enviar formulário:", error)
    //   toast({
    //     title: "Erro",
    //     description: "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.",
    //     variant: "destructive",
    //   })
    // } finally {
    //   setIsSubmitting(false)
    // }
  }

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
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Voltar para Início
          </Link>

          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Avaliação de Gravidade da Acne
              </h1>
              <p className="text-gray-500 md:text-xl">
                Responda algumas perguntas para nos ajudar a entender sua condição de acne e fornecer recomendações de
                tratamento personalizadas.
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-4 p-6 border rounded-lg bg-sky-50">
                <h2 className="text-xl font-semibold">1. Como você descreveria sua acne?</h2>
                <RadioGroup name="acneSeverity" defaultValue="leve" required>
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="leve" id="leve" className="mt-1" />
                    <div className="grid gap-1.5">
                      <Label htmlFor="leve" className="font-medium">
                        Leve
                      </Label>
                      <p className="text-sm text-gray-500">Poucas espinhas ou cravos, principalmente no rosto</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="moderada" id="moderada" className="mt-1" />
                    <div className="grid gap-1.5">
                      <Label htmlFor="moderada" className="font-medium">
                        Moderada
                      </Label>
                      <p className="text-sm text-gray-500">Espinhas mais perceptíveis, alguma inflamação</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="grave" id="grave" className="mt-1" />
                    <div className="grid gap-1.5">
                      <Label htmlFor="grave" className="font-medium">
                        Grave
                      </Label>
                      <p className="text-sm text-gray-500">Muitas espinhas, inflamação e possivelmente acne cística</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="muito-grave" id="muito-grave" className="mt-1" />
                    <div className="grid gap-1.5">
                      <Label htmlFor="muito-grave" className="font-medium">
                        Muito Grave
                      </Label>
                      <p className="text-sm text-gray-500">Acne cística generalizada e dolorosa com cicatrizes</p>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4 p-6 border rounded-lg bg-sky-50">
                <h2 className="text-xl font-semibold">2. Onde você tem acne?</h2>
                <div className="grid gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location-rosto" name="location-rosto" />
                    <Label htmlFor="location-rosto">Rosto</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location-costas" name="location-costas" />
                    <Label htmlFor="location-costas">Costas</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location-peito" name="location-peito" />
                    <Label htmlFor="location-peito">Peito</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location-ombros" name="location-ombros" />
                    <Label htmlFor="location-ombros">Ombros</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="location-outro" name="location-outro" />
                    <Label htmlFor="location-outro">Outro</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-6 border rounded-lg bg-sky-50">
                <h2 className="text-xl font-semibold">3. Há quanto tempo você tem acne?</h2>
                <RadioGroup name="acneDuration" defaultValue="menos-de-um-ano" required>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="menos-de-um-ano" id="menos-de-um-ano" />
                    <Label htmlFor="menos-de-um-ano">Menos de 1 ano</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-5-anos" id="1-5-anos" />
                    <Label htmlFor="1-5-anos">1-5 anos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5-10-anos" id="5-10-anos" />
                    <Label htmlFor="5-10-anos">5-10 anos</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mais-de-10" id="mais-de-10" />
                    <Label htmlFor="mais-de-10">Mais de 10 anos</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4 p-6 border rounded-lg bg-sky-50">
                <h2 className="text-xl font-semibold">4. Quais tratamentos você já tentou antes?</h2>
                <div className="grid gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="treatment-produtos-otc" name="treatment-produtos-otc" />
                    <Label htmlFor="treatment-produtos-otc">Produtos sem receita médica</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="treatment-prescricao" name="treatment-prescricao" />
                    <Label htmlFor="treatment-prescricao">Medicamentos com receita</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="treatment-antibioticos" name="treatment-antibioticos" />
                    <Label htmlFor="treatment-antibioticos">Antibióticos orais</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="treatment-retinoides" name="treatment-retinoides" />
                    <Label htmlFor="treatment-retinoides">Retinoides</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="treatment-profissional" name="treatment-profissional" />
                    <Label htmlFor="treatment-profissional">Tratamentos profissionais (peelings químicos, etc.)</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-6 border rounded-lg bg-sky-50">
                <h2 className="text-xl font-semibold">5. Alguma informação adicional sobre sua pele?</h2>
                <Textarea
                  name="additionalInfo"
                  placeholder="Por favor, compartilhe outros detalhes sobre suas preocupações ou objetivos com a pele"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-4 p-6 border rounded-lg">
                <h2 className="text-xl font-semibold">Suas Informações</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" name="name" placeholder="Digite seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Digite seu email" required />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="phone">Número de Telefone (opcional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Digite seu número de telefone" />
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Continuar para Envio de Fotos"}
              </Button>
            </form>
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

