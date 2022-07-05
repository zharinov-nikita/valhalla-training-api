import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PropertyController } from './property.controller'
import { Property, PropertySchema } from './property.schema'
import { PropertyService } from './property.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Property.name, schema: PropertySchema },
    ]),
  ],
  controllers: [PropertyController],
  providers: [PropertyService],
})
export class PropertyModule {}
