export interface AssessmentFormData {
  name: string
  email: string
  phone?: string
  acneSeverity: string
  acneLocations: string[]
  acneDuration: string
  previousTreatments: string[]
  additionalInfo?: string
}

export interface AssessmentPhoto {
  file: File
  previewUrl: string
}

export interface AssessmentResponse {
  id: string
  success: boolean
  message: string
}

