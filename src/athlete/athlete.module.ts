import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AthleteController } from './athlete.controller'
import { Athlete, AthleteSchema } from './athlete.schema'
import { AthleteService } from './athlete.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Athlete.name, schema: AthleteSchema }]),
  ],
  controllers: [AthleteController],
})
export class AthleteModule {}
