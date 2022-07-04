import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { DayController } from './day.controller'
import { Day, DaySchema } from './day.schema'
import { DayService } from './day.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: Day.name, schema: DaySchema }])],
  controllers: [DayController],
  providers: [DayService],
})
export class DayModule {}
