/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreatePonenteDto } from './dto/create-ponente.dto';
import { PonenteEntity } from './entities/ponente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PonenteService {
  constructor(
    @InjectRepository(PonenteEntity)
    private readonly ponenteRepository = Repository<PonenteEntity>
  ){}

  async crearPonente(createPonenteDto: CreatePonenteDto) {
    if (createPonenteDto.tipoPonente === "Interno" && createPonenteDto.email.substring(-4) === ".edu") {
      await this.ponenteRepository.save(createPonenteDto);
    } else if (createPonenteDto.tipoPonente === "Invitado") {
      this.ponenteRepository.save(createPonenteDto);
    }
  }

  findPonenteById(id: string) {
    return this.ponenteRepository.findOne({where:{id}});
  }

  eliminarPonente(id: string) {
    const ponente: PonenteEntity = this.ponenteRepository.finOne({where:{id}});
    if (ponente.eventos.length != 0) {
      throw new ForbiddenException("No se pueden eliminar ponentes con eventos asociados");
    }

    this.ponenteRepository.remove(ponente)
  }
}
