"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, Upload, Camera, Shield, Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { uploadAssessmentPhotos } from "@/app/actions/assessment"
import { toast } from "@/components/ui/use-toast"

export default function PhotoUpload() {
  const router = useRouter()
  const [assessmentId, setAssessmentId] = useState<string>("")
  const [photos, setPhotos] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [isUploading, setIsUploading] = useState(false)

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
    }
  }, [router])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files)

      // Limitar a 3 fotos
      const filesToAdd = selectedFiles.slice(0, 3 - photos.length)

      if (photos.length + filesToAdd.length > 3) {
        toast({
          title: "Limite de fotos",
          description: "Você pode enviar no máximo 3 fotos.",
          variant: "default",
        })
      }

      // Criar URLs de preview para as fotos selecionadas
      const newPreviews = filesToAdd.map((file) => URL.createObjectURL(file))

      setPhotos((prev) => [...prev, ...filesToAdd])
      setPreviews((prev) => [...prev, ...newPreviews])
    }
  }

  const removePhoto = (index: number) => {
    // Revogar a URL do objeto para liberar memória
    URL.revokeObjectURL(previews[index])

    setPhotos((prev) => prev.filter((_, i) => i !== index))
    setPreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (photos.length === 0) {
      toast({
        title: "Nenhuma foto selecionada",
        description: "Por favor, selecione pelo menos uma foto para continuar.",
        variant: "default",
      })
      return
    }

    setIsUploading(true)

    try {
      const response = await uploadAssessmentPhotos(assessmentId, photos)

      if (response.success) {
        // Limpar as URLs de preview
        previews.forEach((url) => URL.revokeObjectURL(url))

        // Redirecionar para a página de confirmação
        router.push("/acne-assessment/confirmation")
      } else {
        toast({
          title: "Erro",
          description: response.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Erro ao fazer upload das fotos:", error)
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao fazer upload das fotos. Por favor, tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
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
          <Link
            href="/acne-assessment"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Formulário
          </Link>

          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Envie uma Foto da sua Pele
              </h1>
              <p className="text-gray-500 md:text-xl">
                Para uma avaliação mais precisa, nossos dermatologistas precisam ver sua condição atual.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sky-600">
                      <Camera className="h-5 w-5" />
                      <h3 className="text-lg font-semibold">Como tirar a melhor foto</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="bg-sky-100 text-sky-600 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          1
                        </span>
                        <span>Use iluminação natural, próximo a uma janela durante o dia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-sky-100 text-sky-600 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          2
                        </span>
                        <span>Remova maquiagem e limpe o rosto antes de tirar a foto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-sky-100 text-sky-600 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          3
                        </span>
                        <span>Tire fotos de frente e dos dois perfis do rosto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-sky-100 text-sky-600 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          4
                        </span>
                        <span>Certifique-se que a área com acne esteja claramente visível</span>
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        width={300}
                        height={200}
                        alt="Exemplo de foto ideal para avaliação"
                        className="rounded-lg w-full object-cover"
                      />
                      <p className="text-xs text-gray-500 mt-2 text-center">Exemplo de foto ideal para avaliação</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="photo-upload"
                      className="hidden"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <div className="space-y-4">
                        <div className="mx-auto bg-sky-100 rounded-full w-12 h-12 flex items-center justify-center">
                          <Upload className="h-6 w-6 text-sky-600" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Arraste suas fotos ou clique para selecionar</h3>
                          <p className="text-sm text-gray-500">Envie até 3 fotos diferentes (frente e perfis)</p>
                          <p className="text-xs text-gray-400">Formatos aceitos: JPG, PNG - Tamanho máximo: 10MB</p>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* Previews das fotos */}
                  {previews.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="font-medium">Fotos selecionadas ({previews.length}/3)</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {previews.map((preview, index) => (
                          <div key={index} className="relative rounded-lg overflow-hidden border">
                            <Image
                              src={preview || "/placeholder.svg"}
                              alt={`Foto ${index + 1}`}
                              width={150}
                              height={150}
                              className="w-full h-32 object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removePhoto(index)}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                              aria-label="Remover foto"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 p-6 border rounded-lg bg-sky-50">
                    <div className="flex items-center gap-2 text-sky-600">
                      <Shield className="h-5 w-5" />
                      <h3 className="text-lg font-semibold">Sua privacidade é importante</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Suas fotos são confidenciais e serão analisadas apenas por nossos dermatologistas certificados.
                      Não compartilhamos suas imagens com terceiros sem seu consentimento explícito.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isUploading}>
                    {isUploading ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                        Enviando fotos...
                      </span>
                    ) : (
                      "Enviar Fotos para Avaliação"
                    )}
                  </Button>
                </form>

                <div className="flex items-center gap-2 text-sm text-gray-500 justify-center">
                  <Clock className="h-4 w-4" />
                  <span>Seu diagnóstico ficará pronto em até 24 horas</span>
                </div>
              </div>
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

