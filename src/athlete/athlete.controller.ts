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
}
