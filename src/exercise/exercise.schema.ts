import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'

export type ExerciseDocument = Exercise & Document

@Schema()
export class Exercise {
  @Prop({ type: String, required: true, unique: false })
  title: string

  @Prop({ type: String, required: true, unique: false })
  description: string

  @Prop({ type: String, required: true, unique: false })
  status: string

  @Prop({ type: Object, required: false, unique: false })
  option: object

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Workout', required: true })
  workoutId: ObjectId
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise)
