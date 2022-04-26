import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, usersDocument } from 'src/schemas/users.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(users.name) private usersModel: Model<usersDocument>,
  ) {}

  async create(CreateUserDto: CreateUserDto): Promise<Users> {
    const createUser = new this.usersModel(CreateUserDto);
    return createUser.save();
  }

  async findAll(): Promise<Users> {
    return this.usersModel.find().exec();
  }

  findOne(id: string) {
    return this.usersModel.findOne({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersModel.updateOne({ id }, { $set: { ...updateUserDto } });
  }

  remove(id: number) {
    return this.usersModel.deleteOne({ id });
  }
}
