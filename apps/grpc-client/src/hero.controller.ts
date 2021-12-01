import { Controller, OnModuleInit, Get, Param } from '@nestjs/common';
import { ClientGrpc, Client } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { grpcClientOptions } from './grpc.options';

interface HeroService {
  findOne(data: { id: number }): Observable<any>;
}

@Controller('hero')
export class HeroController implements OnModuleInit {
  @Client(grpcClientOptions) private readonly client: ClientGrpc;
  private heroService: HeroService;

  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService');
  }

  @Get(':id')
  call(@Param() params): Observable<any> {
    return this.heroService.findOne({ id: +params.id });
  }
}
