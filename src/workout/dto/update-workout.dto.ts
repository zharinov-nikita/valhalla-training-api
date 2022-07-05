import { ObjectId } from 'mongoose'

export class UpdateWorkoutDto {
  readonly title: string
  readonly description: string
  readonly status: string
  readonly dayId: ObjectId
}
