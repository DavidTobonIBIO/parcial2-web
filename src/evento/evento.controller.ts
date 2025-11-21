import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventoService } from './evento.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { CreateAsistenteDto } from 'src/asistente/dto/create-asistente.dto';
import { AsistenteEntity } from 'src/asistente/entities/asistente.entity';
import { EventoEntity } from './entities/evento.entity';

@Controller('evento')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Post()
  create(@Body() createEventoDto: CreateEventoDto) {
    return this.eventoService.crearEvento(createEventoDto);
  }

  @Post("/aprobar/:id")
  aprobarEvento(@Param('id') id: string) {
    return this.eventoService.aprobarEvento(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventoService.findEventoById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventoService.eliminarEvento(id);
  }

  // @Post(':id/asistente')
  // registrarAsistente(@Param('id') id: string, @Body() createAsistenteDto: CreateAsistenteDto){
  //   return this.eventoService.registrarAsistente(id, createAsistenteDto)

  // }
}
