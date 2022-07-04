import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type PlanDocument = Plan & Document

@Schema()
export class Plan {
  @Prop({ type: String, required: true, unique: false })
  name: string

  @Prop({ type: String, required: false, unique: false })
  start: string

  @Prop({ type: String, required: false, unique: false })
  finish: string
}

export const PlanSchema = SchemaFactory.createForClass(Plan)
