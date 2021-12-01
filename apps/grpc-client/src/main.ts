import { NestFactory } from '@nestjs/core';
import { HeroModule } from './hero.module';

async function bootstrap() {
  const app = await NestFactory.create(HeroModule);
  app.listen(8687);
}
bootstrap();
