import { ObjectId } from 'mongoose'

export type OptionType = {
  title: string
  value: string
}

export class UpdatePropertyDto {
  readonly option: OptionType[]
  readonly exerciseId: ObjectId
}
