import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'
import { OptionType } from './dto/create-property.dto'

export type PropertyDocument = Property & Document

@Schema()
export class Property {
  @Prop({ type: Object, required: false, unique: false })
  option: OptionType[]

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Exercise', required: true })
  exerciseId: ObjectId
}

export const PropertySchema = SchemaFactory.createForClass(Property)
