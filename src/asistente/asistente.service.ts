import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AsistenteEntity } from './entities/asistente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AsistenteService {
  constructor(
      @InjectRepository(AsistenteEntity)
      private readonly asistenteRepository: Repository<AsistenteEntity>
    ){}
  
}
