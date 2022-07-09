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
import { CreatePeriodDto } from './dto/create-period.dto'
import { FindPeriodDto } from './dto/find-period.dto'
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
  async findByField(
    @Res() res: Response,
    @Query() query: FindPeriodDto
  ): Promise<Period[] | any> {
    if (query.planId) {
      const period = await this.periodService.findByField({ ...query })
      if (period.length) {
        return res.status(200).json(period)
      }
      return res.status(200).json([])
    }
    return res
      .status(500)
      .json({ statusCode: 500, message: 'Query param PlanID is not specified' })
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
