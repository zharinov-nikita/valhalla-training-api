import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'

export type ExerciseDocument = Exercise & Document

@Schema()
export class Exercise {
  @Prop({ type: String, required: true, unique: false })
  name: string

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Workout', required: true })
  workoutId: ObjectId
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise)
