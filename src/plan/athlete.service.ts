import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Athlete, AthleteDocument } from './athlete.schema'
import { CreateAthleteDto } from './dto/create-plan.dto'
import { UpdateAthleteDto } from './dto/update-athlete.dto'

@Injectable()
export class AthleteService {
  constructor(
    @InjectModel(Athlete.name) private athleteModel: Model<AthleteDocument>
  ) {}

  async create(dto: CreateAthleteDto): Promise<Athlete> {
    return await this.athleteModel.create(dto)
  }

  async find(): Promise<Athlete[]> {
    return await this.athleteModel.find()
  }

  async findById(_id: ObjectId): Promise<Athlete> {
    return await this.athleteModel.findById({ _id })
  }

  async findByIdAndUpdate(
    _id: ObjectId,
    dto: UpdateAthleteDto
  ): Promise<Athlete> {
    return await this.athleteModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Athlete> {
    return await this.athleteModel.findByIdAndDelete({ _id })
  }
}
