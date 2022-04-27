import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Genres } from './genres.model';

@Injectable()
export class GenresService {
  constructor(
    @InjectModel('Genres') private readonly genresModel: Model<Genres>,
  ) {}
  async createGenres(name: string, image: string) {
    const newGenres = new this.genresModel({
      name,
      image,
    });
    const result = await newGenres.save();
    return result;
  }
  async getGenres() {
    const products = await this.genresModel.find().exec();
    return products;
  }
}
