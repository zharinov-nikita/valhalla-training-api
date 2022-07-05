import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Exercise, ExerciseDocument } from './exercise.schema'
import { CreateExerciseDto } from './dto/create-exercise.dto'
import { UpdateExerciseDto } from './dto/update-exercise.dto'

@Injectable()
export class ExerciseService {
  constructor(
    @InjectModel(Exercise.name) private exerciseModel: Model<ExerciseDocument>
  ) {}

  async create(dto: CreateExerciseDto): Promise<Exercise> {
    return await this.exerciseModel.create(dto)
  }

  async find(option = {}): Promise<Exercise[]> {
    return await this.exerciseModel.find({ ...option })
  }

  async findById(_id: ObjectId): Promise<Exercise> {
    return await this.exerciseModel.findById({ _id })
  }

  async findByIdAndUpdate(
    _id: ObjectId,
    dto: UpdateExerciseDto
  ): Promise<Exercise> {
    return await this.exerciseModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Exercise> {
    return await this.exerciseModel.findByIdAndDelete({ _id })
  }
}
