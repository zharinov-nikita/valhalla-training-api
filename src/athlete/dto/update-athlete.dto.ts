import { ObjectId } from 'mongoose'

export type PulseType = {
  one: {
    lower: number
    upper: number
  }
  two: {
    lower: number
    upper: number
  }
  three: {
    lower: number
    upper: number
  }
  four: {
    lower: number
    upper: number
  }
  five: {
    lower: number
    upper: number
  }
}

export class UpdateAthleteDto {
  readonly name: string
  readonly surname: string
  readonly login: string
  readonly password: string
  readonly pulse: PulseType
  readonly planId: ObjectId[]
}
