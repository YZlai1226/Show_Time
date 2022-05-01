import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
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

  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateConcertDto: UpdateConcertDto) {
    return this.concertsService.update(id, updateConcertDto);
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.concertsService.remove(id);
  }
}
