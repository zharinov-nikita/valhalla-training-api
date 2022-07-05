import { ObjectId } from 'mongoose'

export class UpdatePeriodDto {
  readonly title: string
  readonly description: string
  readonly start: string
  readonly finish: string
  readonly status: string
  readonly planId: ObjectId
}
