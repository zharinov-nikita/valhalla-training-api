import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common'
import { Response } from 'express'
import { ObjectId } from 'mongoose'
import { CreatePropertyDto } from './dto/create-property.dto'
import { FindPropertyDto } from './dto/find-property.dto'
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
  async findByField(
    @Res() res: Response,
    @Query() query: FindPropertyDto
  ): Promise<Property[] | any> {
    if (query.exerciseId) {
      const property = await this.propertyService.findByField({ ...query })
      if (property.length) {
        return res.status(200).json(property)
      }
      return res.status(404).json({
        statusCode: 404,
        message: 'No property was found for this PlanID',
      })
    }
    return res
      .status(500)
      .json({ statusCode: 500, message: 'Query param PlanID is not specified' })
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
