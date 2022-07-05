import { ObjectId } from 'mongoose'

export class UpdateExerciseDto {
  readonly title: string
  readonly description: string
  readonly status: string
  readonly option: Array<{
    title: string
    value: string
  }>
  readonly workoutId: ObjectId
}
