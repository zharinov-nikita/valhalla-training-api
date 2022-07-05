import { ObjectId } from 'mongoose'

export class CreateDayDto {
  readonly title: string
  readonly description: string
  readonly status: string
  readonly cycleId: ObjectId
}
