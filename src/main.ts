import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist:true}));
  const port = process.env.PORT ?? 5000;
  console.log(`Server is listening on port ${port}`);
  await app.listen(port);
}
bootstrap();
