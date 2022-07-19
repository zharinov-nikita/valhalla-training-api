import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppMiddleware } from './app.middleware'
import { CycleModule } from './cycle/cycle.module'
import { PeriodModule } from './period/period.module'
import { PlanModule } from './plan/plan.module'
import { DayModule } from './day/day.module'
import { WorkoutModule } from './workout/workout.module'
import { ExerciseModule } from './exercise/exercise.module'
import { PropertyModule } from './property/property.module'
import { ConfigModule } from '@nestjs/config'
import { ApproachModule } from './approach/approach.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(String(process.env.MONGO_URL), {
      dbName: String(process.env.MONGO_DB),
    }),
    UserModule,
    PlanModule,
    PeriodModule,
    CycleModule,
    DayModule,
    WorkoutModule,
    ExerciseModule,
    PropertyModule,
    ApproachModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AppMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
