import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ExerciseController } from './exercise.controller'
import { Exercise, ExerciseSchema } from './exercise.schema'
import { ExerciseService } from './exercise.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Exercise.name, schema: ExerciseSchema },
    ]),
  ],
  controllers: [ExerciseController],
  providers: [ExerciseService],
})
export class ExerciseModule {}
