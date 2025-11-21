import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreatePonenteDto } from './dto/create-ponente.dto';
import { UpdatePonenteDto } from './dto/update-ponente.dto';
import { PonenteEntity } from './entities/ponente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PonenteService {
  constructor(
    @Injectable(PonenteEntity)
    private readonly ponenteRepository = Repository<PonenteEntity>
  ){}

  crearPonente(createPonenteDto: CreatePonenteDto) {
    if (createPonenteDto.tipoPonente === "Interno" && createPonenteDto.email.substring(-4) === ".edu") {
      const ponente: PonenteEntity = this.ponenteRepository.create(createPonenteDto);
      return ponente;
    } else if (createPonenteDto.tipoPonente === "Invitado") {
      const ponente: PonenteEntity = this.ponenteRepository.create(createPonenteDto);
      return ponente;
    }
  }

  findAll() {
    return `This action returns all ponente`;
  }

  findPonenteById(id: string) {
    return this.ponenteRepository.findOne({where:{id}});
  }

  update(id: number, updatePonenteDto: UpdatePonenteDto) {
    return `This action updates a #${id} ponente`;
  }

  remove(id: number) {
    const ponente: PonenteEntity = this.ponenteRepository.finOne({where:{id}});
    if (ponente.eventos.length != 0) {
      throw new ForbiddenException("No se pueden eliminar ponentes con eventos asociados");
    }

    this.ponenteRepository.remove(ponente)
  }
}
