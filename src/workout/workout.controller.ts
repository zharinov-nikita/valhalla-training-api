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
import { CreateWorkoutDto } from './dto/create-workout.dto'
import { FindWorkoutDto } from './dto/find-workout.dto'
import { UpdateWorkoutDto } from './dto/update-workout.dto'
import { Workout } from './workout.schema'
import { WorkoutService } from './workout.service'

@Controller('api/workout')
export class WorkoutController {
  constructor(private workoutService: WorkoutService) {}

  @Post()
  async create(@Body() dto: CreateWorkoutDto): Promise<Workout> {
    return await this.workoutService.create(dto)
  }

  @Get()
  async findByField(
    @Res() res: Response,
    @Query() query: FindWorkoutDto
  ): Promise<Workout[] | any> {
    if (query.dayId) {
      const workout = await this.workoutService.findByField({ ...query })
      if (workout.length) {
        return res.status(200).json(workout)
      }
      return res.status(200).json([])
    }
    return res
      .status(500)
      .json({ statusCode: 500, message: 'Query param PlanID is not specified' })
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<Workout> {
    return await this.workoutService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdateWorkoutDto
  ): Promise<Workout> {
    return await this.workoutService.findByIdAndUpdate(_id, dto)
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: ObjectId) {
    return await this.workoutService.findByIdAndDelete(_id)
  }
}
