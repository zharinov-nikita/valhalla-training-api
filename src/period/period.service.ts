import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Period, PeriodDocument } from './period.schema'
import { CreatePeriodDto } from './dto/create-period.dto'
import { UpdatePeriodDto } from './dto/update-period.dto'

@Injectable()
export class PeriodService {
  constructor(
    @InjectModel(Period.name) private periodModel: Model<PeriodDocument>
  ) {}

  async create(dto: CreatePeriodDto): Promise<Period> {
    return await this.periodModel.create(dto)
  }

  async find(): Promise<Period[]> {
    return await this.periodModel.find()
  }

  async findByField(option = {}): Promise<Period[]> {
    return await this.periodModel.find({ ...option })
  }

  async findById(_id: ObjectId): Promise<Period> {
    return await this.periodModel.findById({ _id })
  }

  async findByIdAndUpdate(
    _id: ObjectId,
    dto: UpdatePeriodDto
  ): Promise<Period> {
    return await this.periodModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Period> {
    return await this.periodModel.findByIdAndDelete({ _id })
  }
}
