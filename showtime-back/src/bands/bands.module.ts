import { Module } from '@nestjs/common';
import { BandsService } from './bands.service';
import { BandsController } from './bands.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bands, BandsSchema } from 'src/schemas/bands.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bands.name, schema: BandsSchema }])],
  controllers: [BandsController],
  providers: [BandsService],
})
export class BandsModule {}
