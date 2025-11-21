import { Injectable } from '@nestjs/common';
import { CreateAuditorioDto } from './dto/create-auditorio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AuditorioEntity } from './entities/auditorio.entity';

@Injectable()
export class AuditorioService {
  constructor(
    @InjectRepository(AuditorioEntity)
    private readonly auditorioRepository = Repository<AuditorioEntity>
  ){}


  crearAuditorio(createAuditorioDto: CreateAuditorioDto) {
    if (createAuditorioDto.capacidad > 0) {
      this.auditorioRepository.save(createAuditorioDto);
    }
  }

}