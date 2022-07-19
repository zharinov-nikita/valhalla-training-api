import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CycleController } from 'src/cycle/cycle.controller'
import { DayController } from 'src/day/day.controller'
import { ExerciseController } from 'src/exercise/exercise.controller'
import { PeriodController } from 'src/period/period.controller'
import { PlanController } from 'src/plan/plan.controller'
import { WorkoutController } from 'src/workout/workout.controller'
import { UserController } from './user.controller'
import { UserMiddleware } from './user.middleware'
import { User, UserSchema } from './user.schema'
import { UserService } from './user.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .forRoutes(
        PlanController,
        PeriodController,
        CycleController,
        DayController,
        WorkoutController,
        ExerciseController
      )
  }
}
