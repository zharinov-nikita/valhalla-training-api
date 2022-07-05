import { ObjectId } from 'mongoose'

export type OptionType = {
  title: string
  value: string
}

export class FindPropertyDto {
  readonly option?: OptionType[]
  readonly exerciseId?: ObjectId
}
