import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common'
import { Response } from 'express'
import { ObjectId } from 'mongoose'
import { CreateExerciseDto } from './dto/create-exercise.dto'
import { FindExerciseDto } from './dto/find-exercise.dto'
import { UpdateExerciseDto } from './dto/update-exercise.dto'
import { Exercise } from './exercise.schema'
import { ExerciseService } from './exercise.service'

@Controller('api/exercise')
export class ExerciseController {
  constructor(private exerciseService: ExerciseService) {}

  @Post()
  async create(@Body() dto: CreateExerciseDto): Promise<Exercise> {
    return await this.exerciseService.create(dto)
  }

  @Get()
  async findByField(
    @Res() res: Response,
    @Query() query: FindExerciseDto
  ): Promise<Exercise[] | any> {
    if (query.workoutId) {
      const exercise = await this.exerciseService.findByField({ ...query })
      if (exercise.length) {
        return res.status(200).json(exercise)
      }
      return res.status(200).json([])
    }
    return res
      .status(500)
      .json({ statusCode: 500, message: 'Query param PlanID is not specified' })
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<Exercise> {
    return await this.exerciseService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdateExerciseDto
  ): Promise<Exercise> {
    return await this.exerciseService.findByIdAndUpdate(_id, dto)
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: ObjectId) {
    return await this.exerciseService.findByIdAndDelete(_id)
  }
}
