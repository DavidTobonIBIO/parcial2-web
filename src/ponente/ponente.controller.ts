import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PonenteService } from './ponente.service';
import { CreatePonenteDto } from './dto/create-ponente.dto';

@Controller('ponente')
export class PonenteController {
  constructor(private readonly ponenteService: PonenteService) {}

  @Post()
  create(@Body() createPonenteDto: CreatePonenteDto) {
    return this.ponenteService.crearPonente(createPonenteDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ponenteService.findPonenteById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ponenteService.eliminarPonente(id);
  }
}
