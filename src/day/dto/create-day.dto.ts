import { ObjectId } from 'mongoose'

export class CreateDayDto {
  readonly name: string
  readonly status: string
  readonly cycleId: ObjectId
}
