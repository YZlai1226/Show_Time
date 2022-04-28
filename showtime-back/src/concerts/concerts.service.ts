import { Injectable } from '@nestjs/common';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Concerts, ConcertsDocument } from '../schemas/concerts.schema';

@Injectable()
export class ConcertsService {
  constructor(
    @InjectModel(Concerts.name) private concertsModel: Model<ConcertsDocument>,
  ) {}

  async create(createConcertDto: CreateConcertDto): Promise<Concerts> {
    const createdConcert = new this.concertsModel(createConcertDto);
    return createdConcert.save();
  }

  async findAll(): Promise<Concerts[]> {
    return this.concertsModel.find().exec();
  }

  findOne(_id: string) {
    return this.concertsModel.findOne({ _id });
  }

  update(_id: string, updateConcertDto: UpdateConcertDto) {
    return this.concertsModel.updateOne(
      { _id },
      { $set: { ...updateConcertDto } },
    );
  }

  remove(_id: string) {
    return this.concertsModel.deleteOne({ _id });
  }
}
