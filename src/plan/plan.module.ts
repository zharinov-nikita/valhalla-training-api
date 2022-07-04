import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PlanController } from './plan.controller'
import { Plan, PlanSchema } from './plan.schema'
import { PlanService } from './plan.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Plan.name, schema: PlanSchema }]),
  ],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}
