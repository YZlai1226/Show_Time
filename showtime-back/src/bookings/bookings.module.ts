import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bookings, BookingsSchema } from 'src/schemas/bookings.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bookings.name, schema: BookingsSchema }])],
  controllers: [BookingsController],
  providers: [BookingsService],
  exports: [BookingsService],
})
export class BookingsModule {}
