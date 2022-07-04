import { ObjectId } from 'mongoose'

export class CreateWorkoutDto {
  readonly name: string
  readonly status: string
  readonly dayId: ObjectId
}
