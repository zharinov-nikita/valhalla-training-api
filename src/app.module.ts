import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AthleteModule } from './athlete/athlete.module'
import { CycleModule } from './cycle/cycle.module'
import { PeriodModule } from './period/period.module'
import { PlanModule } from './plan/plan.module'
import { DayModule } from './day/day.module'
import { WorkoutModule } from './workout/workout.module'
import { ExerciseModule } from './exercise/exercise.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/valhalla-training-api'),
    AthleteModule,
    PlanModule,
    PeriodModule,
    CycleModule,
    DayModule,
    WorkoutModule,
    ExerciseModule,
  ],
})
export class AppModule {}
