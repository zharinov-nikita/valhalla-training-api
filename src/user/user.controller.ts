import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common'
import { Response } from 'express'
import { ObjectId } from 'mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { FindUserDto } from './dto/find-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './user.schema'
import { UserService } from './user.service'

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<User> {
    return await this.userService.create(dto)
  }

  @Get()
  async findByField(
    @Res() res: Response,
    @Headers() headers: FindUserDto
  ): Promise<User[] | any> {
    if (headers.login && headers.password) {
      const user = await this.userService.findByField({ ...headers })
      if (user.length) {
        return res.status(200).json(user)
      }
      return res.status(200).json([])
    }
    return res
      .status(500)
      .json({ statusCode: 500, message: 'Query param UserID is not specified' })
  }

  @Get(':_id')
  async findById(@Param('_id') _id: ObjectId): Promise<User> {
    return await this.userService.findById(_id)
  }

  @Patch(':_id')
  async findByIdAndUpdate(
    @Param('_id') _id: ObjectId,
    @Body() dto: UpdateUserDto
  ): Promise<User> {
    return await this.userService.findByIdAndUpdate(_id, dto)
  }

  @Delete(':_id')
  async findByIdAndDelete(@Param('_id') _id: ObjectId) {
    return await this.userService.findByIdAndDelete(_id)
  }
}
