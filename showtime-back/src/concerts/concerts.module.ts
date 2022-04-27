import { Module } from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { ConcertsController } from './concerts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Concerts, ConcertsSchema } from 'src/schemas/concerts.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Concerts.name, schema: ConcertsSchema }])],
  controllers: [ConcertsController],
  providers: [ConcertsService],
})
export class ConcertsModule {}
