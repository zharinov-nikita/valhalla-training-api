import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'
import { OptionType } from './dto/create-approach.dto'

export type ApproachDocument = Approach & Document

@Schema()
export class Approach {
  @Prop({ type: Object, required: false, unique: false })
  option: OptionType[]

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Exercise', required: true })
  exerciseId: ObjectId
}

export const ApproachSchema = SchemaFactory.createForClass(Approach)
