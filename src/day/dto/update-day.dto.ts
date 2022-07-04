import { ObjectId } from 'mongoose'

export class UpdateDayDto {
  readonly name: string
  readonly status: string
  readonly cycleId: ObjectId
}
