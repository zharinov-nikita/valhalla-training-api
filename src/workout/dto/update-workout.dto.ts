import { ObjectId } from 'mongoose'

export class UpdateWorkoutDto {
  readonly name: string
  readonly status: string
  readonly dayId: ObjectId
}
