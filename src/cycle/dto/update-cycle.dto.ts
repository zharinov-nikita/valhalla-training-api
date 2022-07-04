import { ObjectId } from 'mongoose'

export class UpdateCycleDto {
  readonly name: string
  readonly start: string
  readonly finish: string
  readonly periodId: ObjectId
}
