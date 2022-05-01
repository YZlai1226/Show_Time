import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BookingsService } from '../bookings/bookings.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly bookingsService: BookingsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOneWithEmail(email);
  }
  @UseGuards(JwtAuthGuard)
  @Get('/userdetails/:id')
  async findOneUser(@Param('id') id: string) {
    let user: any = await this.usersService.findOneUser(id);
    // console.log('test')
    user = user._doc;
    const bookings = await this.bookingsService.findAllBookingsByUser(id);
    return { ...user, bookings };
  }

  // @Get('/mybookings/:id')
  // async findAllBookingsByUser(@Param('id') id: string) {
  //   console.log('coucou')
  //   return await this.bookingsService.findAllBookingsByUser(id);
  // }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/unlike_band/:id')
  unlike_band(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.unlike_band(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/like_band/:id')
  like_band(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.like_band(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/unlike_concert/:id')
  unlike_concert(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.unlike_concert(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/like_concert/:id')
  like_concert(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.like_concert(id, updateUserDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
