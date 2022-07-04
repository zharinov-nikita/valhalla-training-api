import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AthleteModule } from './athlete/athlete.module'
import { CycleModule } from './cycle/cycle.module'
import { PeriodModule } from './period/period.module'
import { PlanModule } from './plan/plan.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/valhalla-training-api'),
    AthleteModule,
    PlanModule,
    PeriodModule,
    CycleModule,
  ],
})
export class AppModule {}
