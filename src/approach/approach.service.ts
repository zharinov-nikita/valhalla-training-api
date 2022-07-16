import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Approach, ApproachDocument } from './approach.schema'
import { CreateApproachDto } from './dto/create-approach.dto'
import { UpdateApproachDto } from './dto/update-approach.dto'

@Injectable()
export class ApproachService {
  constructor(
    @InjectModel(Approach.name) private approachModel: Model<ApproachDocument>
  ) {}

  async create(dto: CreateApproachDto): Promise<Approach> {
    return await this.approachModel.create(dto)
  }

  async find(): Promise<Approach[]> {
    return await this.approachModel.find()
  }

  async findByField(option = {}): Promise<Approach[]> {
    return await this.approachModel.find({ ...option })
  }

  async findById(_id: ObjectId): Promise<Approach> {
    return await this.approachModel.findById({ _id })
  }

  async findByIdAndUpdate(
    _id: ObjectId,
    dto: UpdateApproachDto
  ): Promise<Approach> {
    return await this.approachModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Approach> {
    return await this.approachModel.findByIdAndDelete({ _id })
  }
}
