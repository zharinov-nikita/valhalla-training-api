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
import { CreateDayDto } from './dto/create-day.dto'
import { FindDayDto } from './dto/find-day.dto'
import { UpdateDayDto } from './dto/update-day.dto'
import { Day } from './day.schema'
import { DayService } from './day.service'

@Controller('api/day')
export class DayController {
  constructor(private dayService: DayService) {}

  @Post()
  async create(@Body() dto: CreateDayDto): Promise<Day> {
    return await this.dayService.create(dto)
  }

  @Get()
  async findByField(
    @Res() res: Response,
    @Query() query: FindDayDto
  ): Promise<Day[] | any> {
    if (query.cycleId) {
      const day = await this.dayService.findByField({ ...query })
      if (day.length) {
        return res.status(200).json(day)
      }
      return res.status(200).json([])
    }
    return res
      .status(500)
      .json({ statusCode: 500, message: 'Query param PlanID is not specified' })
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<Day> {
    return await this.dayService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdateDayDto
  ): Promise<Day> {
    return await this.dayService.findByIdAndUpdate(_id, dto)
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: ObjectId) {
    return await this.dayService.findByIdAndDelete(_id)
  }
}
