import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AthleteModule } from './athlete/athlete.module'
import { CycleModule } from './cycle/cycle.module'
import { PeriodModule } from './period/period.module'
import { PlanModule } from './plan/plan.module'
import { DayModule } from './day/day.module'
import { WorkoutModule } from './workout/workout.module'
import { ExerciseModule } from './exercise/exercise.module'
import { PropertyModule } from './property/property.module'

const DB_URL =
  process.env.DB_URL || 'mongodb://localhost:27017/valhalla-training-api'

@Module({
  imports: [
    MongooseModule.forRoot(DB_URL),
    AthleteModule,
    PlanModule,
    PeriodModule,
    CycleModule,
    DayModule,
    WorkoutModule,
    ExerciseModule,
    PropertyModule,
  ],
})
export class AppModule {}
