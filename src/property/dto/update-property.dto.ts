import { ObjectId } from 'mongoose'

export class UpdatePropertyDto {
  readonly intensity: string | null = null // интенсивность
  readonly duration: string | number | null = null // длительность
  readonly instruction: string | null = null // инструкция
  readonly quantity: string | null = null // количество
  readonly approach: string | null = null // подход
  readonly exerciseId: ObjectId
}
