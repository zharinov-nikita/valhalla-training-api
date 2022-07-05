import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CycleController } from './cycle.controller'
import { Cycle, CycleSchema } from './cycle.schema'
import { CycleService } from './cycle.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cycle.name, schema: CycleSchema }]),
  ],
  controllers: [CycleController],
  providers: [CycleService],
})
export class CycleModule {}
