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
import { CreatePlanDto } from './dto/create-plan.dto'
import { FindPlanDto } from './dto/find-plan.dto'
import { UpdatePlanDto } from './dto/update-plan.dto'
import { Plan } from './plan.schema'
import { PlanService } from './plan.service'

@Controller('api/plan')
export class PlanController {
  constructor(private planService: PlanService) {}

  @Post()
  async create(@Body() dto: CreatePlanDto): Promise<Plan> {
    return await this.planService.create(dto)
  }

  @Get()
  async find(
    res: Response,
    @Query() query: FindPlanDto
  ): Promise<Plan[] | any> {
    if (query) {
      const isData = await this.planService.find({ ...query })
      if (isData.length) {
        return await this.planService.find({ ...query })
      }
      return await this.planService.find()
    }
    return await this.planService.find()
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<Plan> {
    return await this.planService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdatePlanDto
  ): Promise<Plan> {
    return await this.planService.findByIdAndUpdate(_id, dto)
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: ObjectId) {
    return await this.planService.findByIdAndDelete(_id)
  }
}
