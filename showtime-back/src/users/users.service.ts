import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private UsersModel: Model<UsersDocument>,
  ) {}

  async create(CreateUserDto: CreateUserDto): Promise<Users> {
    const createdUser = new this.UsersModel(CreateUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<Users[]> {
    return this.UsersModel.find().exec();
  }

  findOne(name: string) {
    return this.UsersModel.findOne({ name });
  }

  update(name: string, updateUserDto: UpdateUserDto) {
    return this.UsersModel.updateOne({ name }, { $set: { ...updateUserDto } });
  }

  remove(name: string) {
    return this.UsersModel.deleteOne({ name });

  }
}
