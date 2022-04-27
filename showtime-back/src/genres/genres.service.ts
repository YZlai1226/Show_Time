import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Genres, GenresDocument } from '../schemas/genres.schema';

@Injectable()
export class GenresService {
  constructor(
    @InjectModel(Genres.name) private genresModel: Model<GenresDocument>,
  ) {}

  async create(createGenreDto: CreateGenreDto): Promise<Genres> {
    const createdGenre = new this.genresModel(createGenreDto);
    return createdGenre.save();
  }

  async findAll(): Promise<Genres[]> {
    return this.genresModel.find().exec();
  }

  findOne(_id: string) {
    return this.genresModel.findOne({ _id });
  }

  update(_id: string, updateGenreDto: UpdateGenreDto) {
    return this.genresModel.updateOne({ _id }, { $set: { ...updateGenreDto } });
  }

  remove(_id: string) {
    return this.genresModel.deleteOne({ _id });
  }
}
