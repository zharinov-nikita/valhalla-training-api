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
import { CreateAthleteDto } from './dto/create-athlete.dto'
import { UpdateAthleteDto } from './dto/update-athlete.dto'
import { Athlete } from './athlete.schema'
import { AthleteService } from './athlete.service'

@Controller('api/athlete')
export class AthleteController {
  constructor(private athleteService: AthleteService) {}

  @Post()
  async create(@Body() dto: CreateAthleteDto): Promise<Athlete> {
    return await this.athleteService.create(dto)
  }

  @Get()
  async find(): Promise<Athlete[]> {
    return await this.athleteService.find()
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<Athlete> {
    return await this.athleteService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdateAthleteDto
  ): Promise<Athlete> {
    return await this.athleteService.findByIdAndUpdate(_id, dto)
  }
}
