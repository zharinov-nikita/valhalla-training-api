import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ApproachController } from './approach.controller'
import { Approach, ApproachSchema } from './approach.schema'
import { ApproachService } from './approach.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Approach.name, schema: ApproachSchema },
    ]),
  ],
  controllers: [ApproachController],
  providers: [ApproachService],
})
export class ApproachModule {}
