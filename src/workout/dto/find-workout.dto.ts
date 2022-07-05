import { ObjectId } from 'mongoose'

export class FindWorkoutDto {
  readonly title?: string
  readonly description?: string
  readonly status?: string
  readonly dayId?: ObjectId
}
