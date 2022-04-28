import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from '../schemas/users.schema';

export type User = any;

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

  // findOne(_id: string) {
  //   return this.UsersModel.findOne({ _id });
  // }

  async findOne(_id: string): Promise<User | undefined> {
    return this.UsersModel.findOne({ _id });
  }

  update(_id: string, updateUserDto: UpdateUserDto) {
    // return this.UsersModel.updateOne(
    //   { _id },
    //   { $addToSet: { bands: updateUserDto['bands'] } },
    //   { $set: {
    //     bands: updateUserDto['bands'],
    //   } },
    // );
    return this.UsersModel.updateOne(
      { _id },
      { $set: { ...updateUserDto, updated_at: new Date() } },
      // {  },
    );
  }

  like_band(_id: string, updateUserDto: UpdateUserDto) {
    return this.UsersModel.updateOne(
      { _id },
      { $addToSet: { bands: updateUserDto['bands'] } },
      { updated_at: new Date() },
    );
  }

  unlike_band(_id: string, updateUserDto: UpdateUserDto) {
    return this.UsersModel.updateOne(
      { _id },
      { $pull: { bands: updateUserDto['bands'] } },
      { updated_at: new Date() },
    );
  }

  like_concert(_id: string, updateUserDto: UpdateUserDto) {
    return this.UsersModel.updateOne(
      { _id },
      { $addToSet: { concerts: updateUserDto['concerts'] } },
      { updated_at: new Date() },
    );
  }

  unlike_concert(_id: string, updateUserDto: UpdateUserDto) {
    return this.UsersModel.updateOne(
      { _id },
      { $pull: { concerts: updateUserDto['concerts'] } },
      { updated_at: new Date() },
    );
  }

  remove(_id: string) {
    return this.UsersModel.deleteOne({ _id });
  }
}
// import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
// export type User = any;

// @Injectable()
// export class UsersService {
//   private readonly users = [
//     {
//       userId: 1,
//       username: 'john',
//       password: 'changeme',
//     },
//     {
//       userId: 2,
//       username: 'maria',
//       password: 'guess',
//     },
//   ];

//   async findOne(username: string): Promise<User | undefined> {
//     return this.users.find(user => user.username === username);
//   }
// }
