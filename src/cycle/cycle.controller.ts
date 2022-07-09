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
import { CreateCycleDto } from './dto/create-cycle.dto'
import { FindCycleDto } from './dto/find-cycle.dto'
import { UpdateCycleDto } from './dto/update-cycle.dto'
import { Cycle } from './cycle.schema'
import { CycleService } from './cycle.service'

@Controller('api/cycle')
export class CycleController {
  constructor(private cycleService: CycleService) {}

  @Post()
  async create(@Body() dto: CreateCycleDto): Promise<Cycle> {
    return await this.cycleService.create(dto)
  }

  @Get()
  async findByField(
    @Res() res: Response,
    @Query() query: FindCycleDto
  ): Promise<Cycle[] | any> {
    if (query.periodId) {
      const cycle = await this.cycleService.findByField({ ...query })
      if (cycle.length) {
        return res.status(200).json(cycle)
      }
      return res.status(404).json({
        statusCode: 404,
        message: 'No cycle was found for this PeriodID',
      })
    }
    return res
      .status(500)
      .json({ statusCode: 500, message: 'Query param PlanID is not specified' })
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
