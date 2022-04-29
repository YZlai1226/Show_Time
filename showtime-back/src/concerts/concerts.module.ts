import { Module } from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { ConcertsController } from './concerts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Concerts, ConcertsSchema } from 'src/schemas/concerts.schema';
import { BookingsModule } from '../bookings/bookings.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Concerts.name, schema: ConcertsSchema }]), BookingsModule ],
  controllers: [ConcertsController],
  providers: [ConcertsService],
})
export class ConcertsModule {}
