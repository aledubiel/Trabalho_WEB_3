import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Controller('funcionarios')
export class FuncionariosController {
  constructor(private readonly funcionariosService: FuncionariosService) { }

  @Get()
  findAll() {
    return this.funcionariosService.findAll();
  }
  @Get('buscar') 
  findByName(@Query('nome') nome: string) {
    return this.funcionariosService.findByName(nome);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.funcionariosService.findOne(id);
  }

  @Post()
  create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionariosService.create(createFuncionarioDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.funcionariosService.update(id, updateFuncionarioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.funcionariosService.remove(id);
  }
}
