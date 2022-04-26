import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BandsModule } from './bands/bands.module';
import { GenresModule } from './genres/genres.module';
// import { GenresController } from './genres/genres.controller';
// import { GenresService } from './genres/genres.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Tanguy:zyKzbvOrLV9u4qjj@cluster0.odb5h.mongodb.net/Show_Time?retryWrites=true&w=majority'),
    BandsModule,
    GenresModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
