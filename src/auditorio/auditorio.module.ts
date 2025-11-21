import { Module } from '@nestjs/common';
import { AuditorioService } from './auditorio.service';
import { AuditorioController } from './auditorio.controller';
import { AuditorioEntity } from './entities/auditorio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AuditorioEntity])],
  controllers: [AuditorioController],
  providers: [AuditorioService],
})
export class AuditorioModule {}
