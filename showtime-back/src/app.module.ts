import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BandsModule } from './bands/bands.module';
import { UsersModule } from './users/users.module';
import { GenresModule } from './genres/genres.module';
import { ConcertsModule } from './concerts/concerts.module';
import { BookingsModule } from './bookings/bookings.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Tanguy:zyKzbvOrLV9u4qjj@cluster0.odb5h.mongodb.net/Show_Time?retryWrites=true&w=majority'),
    BandsModule,
    UsersModule,
    GenresModule,
    ConcertsModule,
    BookingsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
