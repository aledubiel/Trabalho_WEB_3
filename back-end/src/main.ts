import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3001', 'http://127.0.0.1:3001'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: false,
  });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,

  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
