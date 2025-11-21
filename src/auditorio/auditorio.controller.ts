import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuditorioService } from './auditorio.service';
import { CreateAuditorioDto } from './dto/create-auditorio.dto';

@Controller('auditorio')
export class AuditorioController {
  constructor(private readonly auditorioService: AuditorioService) {}

  @Post()
  create(@Body() createAuditorioDto: CreateAuditorioDto) {
    return this.auditorioService.crearAuditorio(createAuditorioDto);
  }

}
