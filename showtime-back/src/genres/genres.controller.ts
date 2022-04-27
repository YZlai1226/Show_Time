import { Controller, Post, Body, Get } from '@nestjs/common';
import { GenresService } from './genres.service';

@Controller('genres')
export class GenresController {
  constructor(private readonly GenresService: GenresService) {}

  @Post()
  async addGenre(
    @Body('name') prodName: string,
    @Body('image') prodImage: string,
  ) {
    const generatedId = await this.GenresService.createGenres(
      prodName,
      prodImage,
    );
    return generatedId;
  }
  @Get()
  async getAllProducts() {
    const genres = await this.GenresService.getGenres();
    return genres;
  }
}
