import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Day, DayDocument } from './day.schema'
import { CreateDayDto } from './dto/create-day.dto'
import { UpdateDayDto } from './dto/update-day.dto'

@Injectable()
export class DayService {
  constructor(@InjectModel(Day.name) private dayModel: Model<DayDocument>) {}

  async create(dto: CreateDayDto): Promise<Day> {
    return await this.dayModel.create(dto)
  }

  async find(): Promise<Day[]> {
    return await this.dayModel.find()
  }

  async findById(_id: ObjectId): Promise<Day> {
    return await this.dayModel.findById({ _id })
  }

  async findByIdAndUpdate(_id: ObjectId, dto: UpdateDayDto): Promise<Day> {
    return await this.dayModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Day> {
    return await this.dayModel.findByIdAndDelete({ _id })
  }
}
