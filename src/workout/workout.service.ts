import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Workout, WorkoutDocument } from './workout.schema'
import { CreateWorkoutDto } from './dto/create-workout.dto'
import { UpdateWorkoutDto } from './dto/update-workout.dto'

@Injectable()
export class WorkoutService {
  constructor(
    @InjectModel(Workout.name) private workoutModel: Model<WorkoutDocument>
  ) {}

  async create(dto: CreateWorkoutDto): Promise<Workout> {
    return await this.workoutModel.create(dto)
  }

  async find(option = {}): Promise<Workout[]> {
    return await this.workoutModel.find({ ...option })
  }

  async findById(_id: ObjectId): Promise<Workout> {
    return await this.workoutModel.findById({ _id })
  }

  async findByIdAndUpdate(
    _id: ObjectId,
    dto: UpdateWorkoutDto
  ): Promise<Workout> {
    return await this.workoutModel.findByIdAndUpdate(_id, dto, { new: true })
  }

  async findByIdAndDelete(_id: ObjectId): Promise<Workout> {
    return await this.workoutModel.findByIdAndDelete({ _id })
  }
}
