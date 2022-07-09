import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CycleModule } from './cycle/cycle.module'
import { PeriodModule } from './period/period.module'
import { PlanModule } from './plan/plan.module'
import { DayModule } from './day/day.module'
import { WorkoutModule } from './workout/workout.module'
import { ExerciseModule } from './exercise/exercise.module'
import { PropertyModule } from './property/property.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
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
