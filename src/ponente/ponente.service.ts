import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePonenteDto } from './dto/create-ponente.dto';
import { PonenteEntity } from './entities/ponente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PonenteService {
  constructor(
    @InjectRepository(PonenteEntity)
    private readonly ponenteRepository: Repository<PonenteEntity>
  ){}

  async crearPonente(createPonenteDto: CreatePonenteDto) {
    if (createPonenteDto.tipoPonente === "Interno" && createPonenteDto.email.substring(-4) === ".edu") {
      await this.ponenteRepository.save(createPonenteDto);
    } else if (createPonenteDto.tipoPonente === "Invitado") {
      await this.ponenteRepository.save(createPonenteDto);
    } else {
      throw new ForbiddenException("No se pudo crear el ponente")
    }
  }

  findPonenteById(id: string) {
    return this.ponenteRepository.findOne({where:{id}});
  }

  async eliminarPonente(id: string) {
    const ponente: PonenteEntity | null = await this.ponenteRepository.findOne({where:{id}});
    if (ponente) {
      if (ponente?.eventos.length != 0) {
        throw new ForbiddenException("No se pueden eliminar ponentes con eventos asociados");
      }
      await this.ponenteRepository.remove(ponente)
    } else {
      throw new NotFoundException("No se encontro el ponente a eliminar")
    }

  }
}
