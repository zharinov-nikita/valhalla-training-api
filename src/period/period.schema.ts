import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'

export type PeriodDocument = Period & Document

@Schema()
export class Period {
  @Prop({ type: String, required: true, unique: false })
  name: string

  @Prop({ type: String, required: false, unique: false })
  start: string

  @Prop({ type: String, required: false, unique: false })
  finish: string

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Plan', required: true })
  planId: ObjectId
}

export const PeriodSchema = SchemaFactory.createForClass(Period)
