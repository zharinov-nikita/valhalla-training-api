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
}
