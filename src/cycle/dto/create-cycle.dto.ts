import { ObjectId } from 'mongoose'

export class CreateCycleDto {
  readonly title: string
  readonly description: string
  readonly start: string
  readonly finish: string
  readonly status: string
  readonly periodId: ObjectId
}
