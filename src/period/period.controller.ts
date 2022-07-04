import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { CreatePeriodDto } from './dto/create-period.dto'
import { UpdatePeriodDto } from './dto/update-period.dto'
import { Period } from './period.schema'
import { PeriodService } from './period.service'

@Controller('api/period')
export class PeriodController {
  constructor(private periodService: PeriodService) {}

  @Post()
  async create(@Body() dto: CreatePeriodDto): Promise<Period> {
    return await this.periodService.create(dto)
  }

  @Get()
  async find(): Promise<Period[]> {
    return await this.periodService.find()
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<Period> {
    return await this.periodService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdatePeriodDto
  ): Promise<Period> {
    return await this.periodService.findByIdAndUpdate(_id, dto)
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: ObjectId) {
    return await this.periodService.findByIdAndDelete(_id)
  }
}