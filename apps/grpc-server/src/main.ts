import { NestFactory } from '@nestjs/core';
import { HeroModule } from './hero.module';
import { grpcClientOptions } from './grpc.options';

async function bootstrap() {
  const app = await NestFactory.create(HeroModule);
  app.connectMicroservice(grpcClientOptions);
  await app.startAllMicroservices();
}
bootstrap();
