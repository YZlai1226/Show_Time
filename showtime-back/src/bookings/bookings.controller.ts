import { Controller, Get, Post, Body, Param, Delete, Req } from '@nestjs/common';
import { Request } from 'express';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingsService.create(createBookingDto);
  }

  @Get()
  findAll() {
    return this.bookingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingsService.findOne(id);
  }

  // @Get('/user/:id')
  // findAllBookingsByUser(@Param('id') id: string) {
  //   return this.bookingsService.findAllBookingsByUser(id);
  // }

  @Delete()
  remove(@Req() request: Request) {
    const user_id = request.body['user_id'];
    const concert_id = request.body['concert_id'];
    return this.bookingsService.deleteOne(user_id, concert_id);
  }
}
