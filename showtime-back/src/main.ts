import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as passport from 'passport';
// import { PassportModule } from '@nestjs/passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.enableCors({
  //   allowedHeaders: ['content-type'],
  //   origin: 'http://localhost:3001',
  //   credentials: true,
  // });
  await app.listen(3000);
}
bootstrap();
