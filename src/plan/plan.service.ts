import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Plan, PlanDocument } from './plan.schema'
import { CreatePlanDto } from './dto/create-plan.dto'
import { UpdatePlanDto } from './dto/update-plan.dto'

@Injectable()
export class PlanService {
  constructor(@InjectModel(Plan.name) private planModel: Model<PlanDocument>) {}

  async create(dto: CreatePlanDto): Promise<Plan> {
    return await this.planModel.create(dto)
  }

  async find(): Promise<Plan[]> {
    return await this.planModel.find()
  }

  async findByField(option = {}): Promise<Plan[]> {
    return await this.planModel.find({ ...option })
  }

  async findById(_id: ObjectId): Promise<Plan> {
    return await this.planModel.findById({ _id })
  }

  async findByIdAndUpdate(_id: ObjectId, dto: UpdatePlanDto): Promise<Plan> {
    return await this.planModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Plan> {
    return await this.planModel.findByIdAndDelete({ _id })
  }
}
