import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenresSchema } from './genres.model';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Genres', schema: GenresSchema }]),
  ],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}
