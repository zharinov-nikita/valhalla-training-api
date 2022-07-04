import { ObjectId } from 'mongoose'

export class CreatePeriodDto {
  readonly name: string
  readonly start: string
  readonly finish: string
  readonly planId: ObjectId
}
