import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Bookings, BookingsDocument } from '../schemas/bookings.schema';
import { userInfo } from 'os';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Bookings.name) private BookingsModel: Model<BookingsDocument>,
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Bookings> {
    // console.log('+++++++++++createBookingDto++++++++++++');
    // console.log(createBookingDto);
    // console.log('+++++++++++createBookingDto++++++++++++');
    const createdBooking = new this.BookingsModel(createBookingDto);
    return createdBooking.save();
  }

  async findAll(): Promise<Bookings[]> {
    return this.BookingsModel.find().exec();
  }

  // async findAllBookingsByUser(user_id: string): Promise<Bookings> {
  //   return this.BookingsModel.find({ user_id: user_id }).exec();
  // }

  async findAllBookingsByUser(user_id: string) {
    // console.log(user_id)
    const booking = await this.BookingsModel.find({user_id}).select('concert_id').exec();
    // console.log(booking)
    return booking
      // .select('concert_id')
      // .exec();
  }

  findOne(_id: string) {
    return this.BookingsModel.findOne({ _id });
  }

  deleteOne(user_id: string, concert_id: string) {
    return this.BookingsModel.deleteOne({ user_id, concert_id });
  }
}
