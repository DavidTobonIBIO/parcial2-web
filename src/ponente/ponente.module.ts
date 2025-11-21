import { Module } from '@nestjs/common';
import { PonenteService } from './ponente.service';
import { PonenteController } from './ponente.controller';
import { PonenteEntity } from './entities/ponente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PonenteEntity])],
  controllers: [PonenteController],
  providers: [PonenteService],
})
export class PonenteModule {}
