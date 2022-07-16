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
import { CreateApproachDto } from './dto/create-approach.dto'
import { FindApproachDto } from './dto/find-approach.dto'
import { UpdateApproachDto } from './dto/update-approach.dto'
import { Approach } from './approach.schema'
import { ApproachService } from './approach.service'

@Controller('api/approach')
export class ApproachController {
  constructor(private approachService: ApproachService) {}

  @Post()
  async create(@Body() dto: CreateApproachDto): Promise<Approach> {
    return await this.approachService.create(dto)
  }

  @Get()
  async findByField(
    @Res() res: Response,
    @Query() query: FindApproachDto
  ): Promise<Approach[] | any> {
    if (query.exerciseId) {
      const approach = await this.approachService.findByField({ ...query })
      if (approach.length) {
        return res.status(200).json(approach)
      }
      return res.status(200).json([])
    }
    return res
      .status(500)
      .json({ statusCode: 500, message: 'Query param PlanID is not specified' })
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<Approach> {
    return await this.approachService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdateApproachDto
  ): Promise<Approach> {
    return await this.approachService.findByIdAndUpdate(_id, dto)
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: ObjectId) {
    return await this.approachService.findByIdAndDelete(_id)
  }
}
