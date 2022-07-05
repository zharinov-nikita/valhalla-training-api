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
import { CreatePropertyDto } from './dto/create-property.dto'
import { UpdatePropertyDto } from './dto/update-property.dto'
import { Property } from './property.schema'
import { PropertyService } from './property.service'

@Controller('api/property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Post()
  async create(@Body() dto: CreatePropertyDto): Promise<Property> {
    return await this.propertyService.create(dto)
  }

  @Get()
  async find(): Promise<Property[]> {
    return await this.propertyService.find()
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<Property> {
    return await this.propertyService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdatePropertyDto
  ): Promise<Property> {
    return await this.propertyService.findByIdAndUpdate(_id, dto)
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: ObjectId) {
    return await this.propertyService.findByIdAndDelete(_id)
  }
}