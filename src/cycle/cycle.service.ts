import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Cycle, CycleDocument } from './cycle.schema'
import { CreateCycleDto } from './dto/create-cycle.dto'
import { UpdateCycleDto } from './dto/update-cycle.dto'

@Injectable()
export class CycleService {
  constructor(
    @InjectModel(Cycle.name) private cycleModel: Model<CycleDocument>
  ) {}

  async create(dto: CreateCycleDto): Promise<Cycle> {
    return await this.cycleModel.create(dto)
  }

  async find(): Promise<Cycle[]> {
    return await this.cycleModel.find()
  }

  async findByField(option = {}): Promise<Cycle[]> {
    return await this.cycleModel.find({ ...option })
  }

  async findById(_id: ObjectId): Promise<Cycle> {
    return await this.cycleModel.findById({ _id })
  }

  async findByIdAndUpdate(_id: ObjectId, dto: UpdateCycleDto): Promise<Cycle> {
    return await this.cycleModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Cycle> {
    return await this.cycleModel.findByIdAndDelete({ _id })
  }
}
