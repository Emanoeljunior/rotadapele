"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import type { AssessmentResponse } from "@/types/assessment"
import { revalidatePath } from "next/cache"

// Salvar os dados do formulário de avaliação
export async function saveAssessmentData(formData: FormData): Promise<AssessmentResponse> {
  try {
    const supabase = createServerSupabaseClient()

    // Extrair dados do formulário
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || null
    const acneSeverity = formData.get("acneSeverity") as string

    // Extrair arrays de checkboxes
    const acneLocations = []
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("location-") && value === "on") {
        acneLocations.push(key.replace("location-", ""))
      }
    }

    const acneDuration = formData.get("acneDuration") as string

    const previousTreatments = []
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("treatment-") && value === "on") {
        previousTreatments.push(key.replace("treatment-", ""))
      }
    }

    const additionalInfo = (formData.get("additionalInfo") as string) || null

    // Inserir dados na tabela assessments
    const { data, error } = await supabase
      .from("assessments")
      .insert({
        name,
        email,
        phone,
        acne_severity: acneSeverity,
        acne_locations: acneLocations,
        acne_duration: acneDuration,
        previous_treatments: previousTreatments,
        additional_info: additionalInfo,
        status: "pending",
      })
      .select("id")
      .single()

    if (error) {
      console.error("Erro ao salvar avaliação:", error)
      return {
        id: "",
        success: false,
        message: "Erro ao salvar os dados da avaliação. Por favor, tente novamente.",
      }
    }

    // Armazenar o ID da avaliação na sessão para uso posterior
    // (para associar as fotos a esta avaliação)
    return {
      id: data.id,
      success: true,
      message: "Dados da avaliação salvos com sucesso!",
    }
  } catch (error) {
    console.error("Erro ao processar avaliação:", error)
    return {
      id: "",
      success: false,
      message: "Ocorreu um erro ao processar sua avaliação. Por favor, tente novamente.",
    }
  }
}

// Upload de fotos para o Supabase Storage
export async function uploadAssessmentPhotos(assessmentId: string, photos: File[]): Promise<AssessmentResponse> {
  try {
    const supabase = createServerSupabaseClient()

    // Verificar se o ID da avaliação existe
    if (!assessmentId) {
      return {
        id: "",
        success: false,
        message: "ID da avaliação não encontrado. Por favor, preencha o formulário novamente.",
      }
    }

    // Fazer upload de cada foto
    const uploadPromises = photos.map(async (photo, index) => {
      const fileExt = photo.name.split(".").pop()
      const fileName = `${assessmentId}_${index}.${fileExt}`
      const filePath = `assessments/${assessmentId}/${fileName}`

      // Upload para o Supabase Storage
      const { error: uploadError } = await supabase.storage.from("acne-photos").upload(filePath, photo)

      if (uploadError) {
        throw new Error(`Erro ao fazer upload da foto ${index + 1}: ${uploadError.message}`)
      }

      // Registrar a referência da foto na tabela assessment_photos
      const { error: dbError } = await supabase.from("assessment_photos").insert({
        assessment_id: assessmentId,
        file_path: filePath,
        file_name: fileName,
        content_type: photo.type,
      })

      if (dbError) {
        throw new Error(`Erro ao registrar a foto ${index + 1}: ${dbError.message}`)
      }

      return filePath
    })

    // Aguardar todos os uploads
    await Promise.all(uploadPromises)

    // Atualizar o status da avaliação para 'submitted'
    const { error: updateError } = await supabase
      .from("assessments")
      .update({ status: "submitted" })
      .eq("id", assessmentId)

    if (updateError) {
      console.error("Erro ao atualizar status da avaliação:", updateError)
    }

    revalidatePath("/acne-assessment/confirmation")

    return {
      id: assessmentId,
      success: true,
      message: "Fotos enviadas com sucesso!",
    }
  } catch (error) {
    console.error("Erro ao fazer upload das fotos:", error)
    return {
      id: assessmentId || "",
      success: false,
      message: "Ocorreu um erro ao fazer upload das fotos. Por favor, tente novamente.",
    }
  }
}

