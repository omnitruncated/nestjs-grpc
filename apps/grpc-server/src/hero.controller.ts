import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { observable } from 'rxjs';
import { HeroService } from './hero.service';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';

@Controller()
export class HeroController {
  constructor(private readonly heroService: HeroService) {}
  @GrpcMethod('HeroService')
  findOne(data: HeroById): Hero {
    return this.heroService.findOne(data);
  }
}
