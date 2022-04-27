import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async create(CreateUserDto: CreateUserDto): Promise<Users> {
    const createdUser = new this.usersModel(CreateUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<Users[]> {
    return this.usersModel.find().exec();
  }

  findOne(_id: string) {
    return this.usersModel.findOne({ _id });
  }

  update(_id: string, updateUserDto: UpdateUserDto) {
    return this.usersModel.updateOne({ _id }, { $set: { ...updateUserDto } });
  }

  remove(_id: string) {
    return this.usersModel.deleteOne({ _id });
  }
}
