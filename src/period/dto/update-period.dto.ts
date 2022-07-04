import { ObjectId } from 'mongoose'

export class UpdatePeriodDto {
  readonly name: string
  readonly start: string
  readonly finish: string
  readonly planId: ObjectId
}
