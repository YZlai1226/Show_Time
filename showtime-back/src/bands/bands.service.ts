import { Injectable } from '@nestjs/common';
import { CreateBandDto } from './dto/create-band.dto';
import { UpdateBandDto } from './dto/update-band.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Bands, BandsDocument } from '../schemas/bands.schema';

@Injectable()
export class BandsService {
  constructor(
    @InjectModel(Bands.name) private bandsModel: Model<BandsDocument>,
  ) {}

  async create(createBandDto: CreateBandDto): Promise<Bands> {
    const createdBand = new this.bandsModel(createBandDto);
    return createdBand.save();
  }

  async findAll(): Promise<Bands[]> {
    return this.bandsModel.find().exec();
  }

  findOne(name: string) {
    return this.bandsModel.findOne({ name });
  }

  update(name: string, updateBandDto: UpdateBandDto) {
    return this.bandsModel.updateOne({ name }, { $set: { ...updateBandDto } });
  }

  remove(name: string) {
    return this.bandsModel.deleteOne({ name });
  }
}
