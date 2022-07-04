import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AthleteController } from './plan.controller'
import { Athlete, AthleteSchema } from './plan.schema'
import { AthleteService } from './plan.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Athlete.name, schema: AthleteSchema }]),
  ],
  controllers: [AthleteController],
  providers: [AthleteService],
})
export class AthleteModule {}
