import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Put('/unlike_band/:id')
  unlike_band(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.unlike_band(id, updateUserDto);
  }

  @Put('/like_band/:id')
  like_band(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.like_band(id, updateUserDto);
  }

  @Put('/unlike_concert/:id')
  unlike_concert(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.unlike_concert(id, updateUserDto);
  }

  @Put('/like_concert/:id')
  like_concert(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.like_concert(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
