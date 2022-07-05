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
  async find(@Query() query: FindDayDto): Promise<Day[]> {
    if (query) {
      const isData = await this.dayService.find({ ...query })
      if (isData.length) {
        return await this.dayService.find({ ...query })
      }
      return await this.dayService.find()
    }
    return await this.dayService.find()
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
