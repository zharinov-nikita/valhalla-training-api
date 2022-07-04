import { ObjectId } from 'mongoose'

export class CreateExerciseDto {
  readonly name: string
  readonly workoutId: ObjectId
}
