import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PeriodController } from './period.controller'
import { Period, PeriodSchema } from './period.schema'
import { PeriodService } from './period.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Period.name, schema: PeriodSchema }]),
  ],
  controllers: [PeriodController],
  providers: [PeriodService],
})
export class PeriodModule {}
