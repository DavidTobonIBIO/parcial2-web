import { Module } from '@nestjs/common';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
import { EventoEntity } from './entities/evento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EventoEntity])],
  controllers: [EventoController],
  providers: [EventoService],
})
export class EventoModule {}
