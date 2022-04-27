import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BandsService } from './bands.service';
import { CreateBandDto } from './dto/create-band.dto';
import { UpdateBandDto } from './dto/update-band.dto';

@Controller('bands')
export class BandsController {
  constructor(private readonly bandsService: BandsService) {}

  @Post()
  create(@Body() createBandDto: CreateBandDto) {
    return this.bandsService.create(createBandDto);
  }

  @Get()
  findAll() {
    return this.bandsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.bandsService.findOne(name);
  }

  @Put(':name')
  update(@Param('name') name: string, @Body() updateBandDto: UpdateBandDto) {
    return this.bandsService.update(name, updateBandDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.bandsService.remove(name);
  }
}
