import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from 'src/schemas/users.schema';
import { BookingsService } from '../bookings/bookings.service';
import { BookingsModule } from '../bookings/bookings.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]), BookingsModule ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
