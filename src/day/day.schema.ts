import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'

export type DayDocument = Day & Document

@Schema()
export class Day {
  @Prop({ type: String, required: true, unique: false })
  title: string

  @Prop({ type: String, required: true, unique: false })
  description: string

  @Prop({ type: String, required: true, unique: false })
  status: string

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Cycle', required: true })
  cycleId: ObjectId
}

export const DaySchema = SchemaFactory.createForClass(Day)
