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
import { CreatePlanDto } from './dto/create-plan.dto'
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
  async find(): Promise<Plan[]> {
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
}
