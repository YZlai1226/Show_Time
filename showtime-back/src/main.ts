import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import { PassportModule } from '@nestjs/passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  app.enableCors();
=======

  app.enableCors();

>>>>>>> 97ea644f182c478b523d7d192569f7ab5719f803
  await app.listen(3000);
}
bootstrap();
