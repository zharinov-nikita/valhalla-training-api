import { ObjectId } from 'mongoose'

export type OptionType = {
  id: number | string
  comleted: boolean
  quality: number | string
  rest: number | string
}

export class UpdateApproachDto {
  readonly option: OptionType[]
  readonly exerciseId: ObjectId
}
