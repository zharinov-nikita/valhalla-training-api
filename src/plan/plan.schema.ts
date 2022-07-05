import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type PlanDocument = Plan & Document

@Schema()
export class Plan {
  @Prop({ type: String, required: true, unique: false })
  title: string

  @Prop({ type: String, required: true, unique: false })
  description: string

  @Prop({ type: String, required: false, unique: false })
  start: string

  @Prop({ type: String, required: false, unique: false })
  finish: string

  @Prop({ type: String, required: true, unique: false })
  status: string
}

export const PlanSchema = SchemaFactory.createForClass(Plan)
