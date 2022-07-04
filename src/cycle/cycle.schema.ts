import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'

export type CycleDocument = Cycle & Document

@Schema()
export class Cycle {
  @Prop({ type: String, required: true, unique: false })
  name: string

  @Prop({ type: String, required: false, unique: false })
  start: string

  @Prop({ type: String, required: false, unique: false })
  finish: string

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Period', required: true })
  periodId: ObjectId
}

export const CycleSchema = SchemaFactory.createForClass(Cycle)
