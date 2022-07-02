import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Athlete, AthleteDocument } from './athlete.schema'
import { CreateAthleteDto } from './dto/create-athlete.dto'
import { UpdateAthleteDto } from './dto/update-athlete.dto'

@Injectable()
export class AthleteService {
  constructor(
    @InjectModel(Athlete.name) private athleteModel: Model<AthleteDocument>
  ) {}
}
