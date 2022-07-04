import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'

export type PropertyDocument = Property & Document

@Schema()
export class Property {
  @Prop({ type: String, required: false, unique: false })
  intensity: string

  @Prop({ type: String, required: false, unique: false })
  duration: string

  @Prop({ type: String, required: false, unique: false })
  instruction: string

  @Prop({ type: String, required: false, unique: false })
  quantity: string

  @Prop({ type: String, required: false, unique: false })
  approach: string

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Exercise', required: true })
  exerciseId: ObjectId
}

export const PropertySchema = SchemaFactory.createForClass(Property)
