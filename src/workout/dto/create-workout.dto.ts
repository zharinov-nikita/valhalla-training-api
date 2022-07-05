import { ObjectId } from 'mongoose'

export class CreateWorkoutDto {
  readonly title: string
  readonly description: string
  readonly status: string
  readonly dayId: ObjectId
}
