import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';

@Injectable()
export class DepartamentoService {

  constructor(private readonly prismaService: PrismaService) { }

  findAll() {
    return this.prismaService.departamento.findMany();
  }

  async findOne(id: number) {
    const departamento = await this.prismaService.departamento.findUnique({
      where: {
        id: id
      }
    })
    if (departamento) {
      return departamento
    }
    throw new HttpException("Departamento não encontrado", HttpStatus.NOT_FOUND)

  }
  create(createDepartamentoDto: CreateDepartamentoDto) {
    try {
      return this.prismaService.departamento.create({
        data: createDepartamentoDto
      })
    } catch (error) {
      throw new HttpException("Não foi possivel criar", HttpStatus.BAD_REQUEST)
    }
  }

  async update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) {
    try {
      const departamento = await this.prismaService.departamento.findUnique({
        where: { id },
      });

      if (!departamento) {
        throw new HttpException('Departamento não encontrado', HttpStatus.NOT_FOUND);
      }

      await this.prismaService.departamento.update({
        where: { id },
        data: updateDepartamentoDto,
      });

      return departamento;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error; 
      }
      throw new HttpException('Não foi possível atualizar', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    try {
      const departamento = await this.prismaService.departamento.findUnique({
        where: { id },
      });

      if (!departamento) {
        throw new HttpException('Departamento não encontrado', HttpStatus.NOT_FOUND);
      }
      const funcionarios = await this.prismaService.funcionario.findMany({
        where: { departamentoId: id },
      });

      if (funcionarios.length > 0) {
        throw new HttpException(
          'Não é possível deletar: existem funcionários associados a este departamento',
          HttpStatus.BAD_REQUEST,
        );
      }

      await this.prismaService.departamento.delete({
        where: { id },
      });

      return 'Departamento deletado com sucesso';
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Não foi possível deletar', HttpStatus.BAD_REQUEST);
    }
  }

}
