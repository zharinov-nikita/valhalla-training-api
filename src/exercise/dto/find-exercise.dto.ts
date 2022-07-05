import { ObjectId } from 'mongoose'

export class FindExerciseDto {
  readonly name?: string
  readonly workoutId?: ObjectId
}
