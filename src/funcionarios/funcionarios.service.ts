import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Injectable()
export class FuncionariosService {

  constructor(private readonly prismaService: PrismaService) { }

  findAll() {
    return this.prismaService.funcionario.findMany();
  }

  async findOne(id: number) {
    try {
      const funcionario = await this.prismaService.funcionario.findUnique({
        where: { id },
      });

      if (!funcionario) {
        throw new HttpException('Funcionário não encontrado', HttpStatus.NOT_FOUND);
      }

      return funcionario;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Erro ao buscar funcionário', HttpStatus.BAD_REQUEST);
    }
  }


  async create(createFuncionarioDto: CreateFuncionarioDto) {
    try {
      const departamento = await this.prismaService.departamento.findUnique({
        where: { id: createFuncionarioDto.departamentoId },
      });
      if (!departamento) {
        throw new HttpException(
          'Erro ao criar funcionário: Departamento não encontrado',
          HttpStatus.BAD_REQUEST,
        );
      }
      return await this.prismaService.funcionario.create({
        data: createFuncionarioDto,
      });

    } catch (error) {
      if (error instanceof HttpException) {
        throw error; 
      }
      throw new HttpException('Erro ao criar funcionário', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    try {
      const funcionario = await this.prismaService.funcionario.findUnique({
        where: { id },
      });

      if (!funcionario) {
        throw new HttpException('Funcionário não encontrado', HttpStatus.NOT_FOUND);
      }

      if (updateFuncionarioDto.departamentoId) {
        const departamento = await this.prismaService.departamento.findUnique({
          where: { id: updateFuncionarioDto.departamentoId },
        });

        if (!departamento) {
          throw new HttpException(
            'Erro ao atualizar funcionário: Departamento não encontrado',
            HttpStatus.BAD_REQUEST,
          );
        }
      }

      return await this.prismaService.funcionario.update({
        where: { id },
        data: updateFuncionarioDto,
      });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Erro ao atualizar funcionário', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    try {
      const funcionario = await this.prismaService.funcionario.findUnique({
        where: { id },
      });

      if (!funcionario) {
        throw new HttpException('Funcionário não encontrado', HttpStatus.NOT_FOUND);
      }

      await this.prismaService.funcionario.delete({
        where: { id },
      });

      return 'Funcionário removido com sucesso';
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Erro ao remover funcionário', HttpStatus.BAD_REQUEST);
    }
  }

}
