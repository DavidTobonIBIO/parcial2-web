import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EventoEntity } from './entities/evento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(EventoEntity)
    private readonly eventoRepository: Repository<EventoEntity>
  ){}
  
  async crearEvento(createEventoDto: CreateEventoDto) {
    if (createEventoDto.duracionHoras > 0) {
      await this.eventoRepository.save(createEventoDto);
    }
  }

  async aprobarEvento(id: string) {
    const evento: EventoEntity | null = await this.eventoRepository.findOne({where:{id}});
    if (evento) {
      if (evento.auditorio) {
        evento.estado = "Aprobado"
        await this.eventoRepository.save(evento)
      } else {
        throw new ForbiddenException("No se puede aprobar un evento sin auditorio")
      }
    } else {
      throw new NotFoundException("El evento no fue encontrado")
    }
  }

  async eliminarEvento(id: string) {
    const evento: EventoEntity | null = await this.eventoRepository.findOne({where:{id}});
    if (evento) {
      if (evento.estado === "Aprobado") {
        throw new ForbiddenException("El evento no se puede eliminar porque ya está aprobado");
      }
      await this.eventoRepository.remove(evento);

    } else {
      throw new NotFoundException("El evento no fue encontrado");
    }
  }

  async findEventoById(id: string) {
    return await this.eventoRepository.findOne({where:{id}});
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
  // }x
}
