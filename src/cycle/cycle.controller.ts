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
import { CreateCycleDto } from './dto/create-cycle.dto'
import { FindCycleDto } from './dto/find-cycle.dto'
import { UpdateCycleDto } from './dto/update-cycle.dto'
import { Cycle } from './cycle.schema'
import { CycleService } from './cycle.service'
import { Response } from 'express'

@Controller('api/cycle')
export class CycleController {
  constructor(private cycleService: CycleService) {}

  @Post()
  async create(@Body() dto: CreateCycleDto): Promise<Cycle> {
    return await this.cycleService.create(dto)
  }

  @Get()
  async find(
    res: Response,
    @Query() query: FindCycleDto
  ): Promise<Cycle[] | any> {
    if (query) {
      const isData = await this.cycleService.find({ ...query })
      if (isData.length) {
        return await this.cycleService.find({ ...query })
      }
      return await this.cycleService.find()
    }
    return await this.cycleService.find()
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<Cycle> {
    return await this.cycleService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdateCycleDto
  ): Promise<Cycle> {
    return await this.cycleService.findByIdAndUpdate(_id, dto)
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: ObjectId) {
    return await this.cycleService.findByIdAndDelete(_id)
  }
}
