import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AthleteModule } from './athlete/athlete.module'
import { PlanModule } from './plan/plan.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/valhalla-training-api'),
    AthleteModule,
    PlanModule,
  ],
})
export class AppModule {}
