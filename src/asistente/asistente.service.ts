import { Injectable } from '@nestjs/common';
import { CreateAsistenteDto } from './dto/create-asistente.dto';
import { UpdateAsistenteDto } from './dto/update-asistente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AsistenteEntity } from './entities/asistente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AsistenteService {
  constructor(
      @InjectRepository(AsistenteEntity)
      private readonly asistenteRepository: Repository<AsistenteEntity>
    ){}
  
  create(createAsistenteDto: CreateAsistenteDto) {
    return 'This action adds a new asistente';
  }

  findAll() {
    return `This action returns all asistente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asistente`;
  }

  update(id: number, updateAsistenteDto: UpdateAsistenteDto) {
    return `This action updates a #${id} asistente`;
  }

  remove(id: number) {
    return `This action removes a #${id} asistente`;
  }
}
