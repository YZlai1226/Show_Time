import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Bookings, BookingsDocument } from '../schemas/bookings.schema';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Bookings.name) private BookingsModel: Model<BookingsDocument>,
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Bookings> {
    const createdBooking = new this.BookingsModel(createBookingDto);
    return createdBooking.save();
  }

  async findAll(): Promise<Bookings[]> {
    return this.BookingsModel.find().exec();
  }

  findOne(_id: string) {
    return this.BookingsModel.findOne({ _id });
  }

  remove(_id: string) {
    return this.BookingsModel.deleteOne({ _id });
  }
}
