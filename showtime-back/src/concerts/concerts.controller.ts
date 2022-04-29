import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import { BookingsService } from '../bookings/bookings.service';

@Controller('concerts')
export class ConcertsController {
  constructor(
    private readonly concertsService: ConcertsService,
    private readonly bookingsService: BookingsService,
  ) {}

  @Post()
  create(@Body() createConcertDto: CreateConcertDto) {
    return this.concertsService.create(createConcertDto);
  }

  @Get()
  findAll() {
    return this.concertsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let concert: any = await this.concertsService.findOne(id);
    concert = concert._doc;
    const bookings = await this.bookingsService.findAllBookingsByConcert(id);
    return { ...concert, bookings };
    // return this.concertsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateConcertDto: UpdateConcertDto) {
    return this.concertsService.update(id, updateConcertDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.concertsService.remove(id);
  }
}
