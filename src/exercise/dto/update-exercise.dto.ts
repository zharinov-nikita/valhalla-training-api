import { ObjectId } from 'mongoose'

export class UpdateExerciseDto {
  readonly name: string
  readonly workoutId: ObjectId
}
