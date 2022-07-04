import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document, ObjectId } from 'mongoose'

export type AthleteDocument = Athlete & Document

@Schema()
export class Athlete {
  @Prop({ type: String, required: true, unique: false })
  name: string

  @Prop({ type: String, required: true, unique: false })
  surname: string

  @Prop({ type: String, required: true, unique: true })
  login: string

  @Prop({ type: String, required: true, unique: false })
  password: string

  @Prop({
    type: Object,
    required: true,
    unique: false,
    default: {
      one: {
        lower: 80,
        upper: 90,
      },
      two: {
        lower: 90,
        upper: 100,
      },
      three: {
        lower: 100,
        upper: 110,
      },
      four: {
        lower: 100,
        upper: 110,
      },
      five: {
        lower: 120,
        upper: 130,
      },
    },
  })
  pulse: object

  @Prop([{ type: mongoose.Types.ObjectId, ref: 'Plan', required: false }])
  planId: ObjectId
}

export const AthleteSchema = SchemaFactory.createForClass(Athlete)
