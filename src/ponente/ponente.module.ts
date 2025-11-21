import { Injectable, Module } from '@nestjs/common';
import { PonenteService } from './ponente.service';
import { PonenteController } from './ponente.controller';
import { PonenteEntity } from './entities/ponente.entity';

@Module({
  imports: [Injectable(PonenteEntity)],
  controllers: [PonenteController],
  providers: [PonenteService],
})
export class PonenteModule {}
