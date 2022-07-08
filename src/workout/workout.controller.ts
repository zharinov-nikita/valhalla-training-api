import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
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
  async find(
    res: Response,
    @Query() query: FindWorkoutDto
  ): Promise<Workout[] | any> {
    if (query) {
      const isData = await this.workoutService.find({ ...query })
      if (isData.length) {
        return await this.workoutService.find({ ...query })
      }
      return await this.workoutService.find()
    }
    return await this.workoutService.find()
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
