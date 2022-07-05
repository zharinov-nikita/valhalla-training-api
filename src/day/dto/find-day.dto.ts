import { ObjectId } from 'mongoose'

export class FindDayDto {
  readonly title?: string
  readonly description?: string
  readonly status?: string
  readonly cycleId?: ObjectId
}
