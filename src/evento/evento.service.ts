import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EventoEntity } from './entities/evento.entity';
import { Repository } from 'typeorm';
import { CreateAsistenteDto } from 'src/asistente/dto/create-asistente.dto';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(EventoEntity)
    private readonly eventoRepository = Repository<EventoEntity>
  ){}
  
  crearEvento(createEventoDto: CreateEventoDto) {
    return 'This action adds a new evento';
  }

  aprobarEvento(id: string) {
    const evento: EventoEntity | null = this.eventoRepository.findOne({where:{id}});
    if (evento) {
      if (evento.auditorio) {
        evento.estado = "Aprobado"
        this.eventoRepository.save(evento)
      } else {
        throw new ForbiddenException("No se puede aprobar un evento sin auditorio")
      }
    } else {
      throw new NotFoundException("El evento no fue encontrado")
    }
  }

  eliminarEvento(id: string) {
    const evento: EventoEntity | null = this.eventoRepository.findOne({where:{id}});
    if (evento) {
      if (evento.estado === "Aprobado") {
        throw new ForbiddenException("El evento no se puede eliminar porque ya está aprobado");
      }
      this.eventoRepository.remove(evento);

    } else {
      throw new NotFoundException("El evento no fue encontrado");
    }
  }

  // agregarAsistente(id: string, asistente: CreateAsistenteDto) {
  //   const evento: EventoEntity | null = this.eventoRepository.findOne({where:{id}});
  //   if (evento) {
  //     const email: string = createAsistenteDto.email;
  //     for(let i = 0; i < evento.asistentes, i++) {
  //       if (evento.asistentes[i].email === email) {
  //         throw new ForbiddenException("No pueden haber dos asistentes con el mismo email")
  //       }
  //     }

  //     evento.asistentes.push(asistente)
  //   }
  // }
}
