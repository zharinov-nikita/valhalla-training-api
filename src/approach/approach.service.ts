import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Property, PropertyDocument } from './property.schema'
import { CreatePropertyDto } from './dto/create-approach.dto'
import { UpdatePropertyDto } from './dto/update-approach.dto'

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<PropertyDocument>
  ) {}

  async create(dto: CreatePropertyDto): Promise<Property> {
    return await this.propertyModel.create(dto)
  }

  async find(): Promise<Property[]> {
    return await this.propertyModel.find()
  }

  async findByField(option = {}): Promise<Property[]> {
    return await this.propertyModel.find({ ...option })
  }

  async findById(_id: ObjectId): Promise<Property> {
    return await this.propertyModel.findById({ _id })
  }

  async findByIdAndUpdate(
    _id: ObjectId,
    dto: UpdatePropertyDto
  ): Promise<Property> {
    return await this.propertyModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Property> {
    return await this.propertyModel.findByIdAndDelete({ _id })
  }
}
