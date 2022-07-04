import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'

export type WorkoutDocument = Workout & Document

@Schema()
export class Workout {
  @Prop({ type: String, required: true, unique: false })
  name: string

  @Prop({ type: String, required: true, unique: false })
  status: string

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Day', required: true })
  dayId: ObjectId
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout)
