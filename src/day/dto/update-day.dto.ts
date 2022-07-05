import { ObjectId } from 'mongoose'

export class UpdateDayDto {
  readonly title: string
  readonly description: string
  readonly status: string
  readonly cycleId: ObjectId
}
