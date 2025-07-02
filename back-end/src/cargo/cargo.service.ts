import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CargoService {
  constructor(private readonly prismaService: PrismaService) { }

  findAll() {
    return this.prismaService.cargo.findMany();
  }
  async findByName(titulo: string) {
    const cargos = await this.prismaService.cargo.findMany({
      where: {
        titulo: {
          contains: titulo
        }
      }
    })
    if (!cargos || cargos.length === 0) {
      throw new HttpException('Nenhum cargo encontrado com este nome', HttpStatus.NOT_FOUND);
    }
    return cargos
  }

  async findOne(id: number) {
    try {
      const cargo = await this.prismaService.cargo.findUnique({
        where: { id },
      });

      if (!cargo) {
        throw new HttpException('Cargo não encontrado', HttpStatus.NOT_FOUND);
      }

      return cargo;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Erro ao buscar o cargo', HttpStatus.BAD_REQUEST);
    }
  }

  async create(createCargoDto: CreateCargoDto) {
    try {
      const cargoExistente = await this.prismaService.cargo.findUnique({
        where: { titulo: createCargoDto.titulo },
      });

      if (cargoExistente) {
        throw new HttpException(
          'Já existe um cargo com este título',
          HttpStatus.CONFLICT,
        );
      }
      return await this.prismaService.cargo.create({
        data: createCargoDto,
      });
    } catch (error) {
      throw new HttpException('Erro ao criar o cargo', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateCargoDto: UpdateCargoDto) {
    try {
      const cargo = await this.prismaService.cargo.findUnique({
        where: { id },
      });

      if (!cargo) {
        throw new HttpException('Cargo não encontrado', HttpStatus.NOT_FOUND);
      }

      if (updateCargoDto.titulo) {
        const cargoComMesmoTitulo = await this.prismaService.cargo.findFirst({
          where: {
            titulo: updateCargoDto.titulo,
            id: { not: id }
          }
        });

        if (cargoComMesmoTitulo) {
          throw new HttpException('O novo título já está em uso por outro cargo', HttpStatus.CONFLICT);
        }
      }

      return await this.prismaService.cargo.update({
        where: { id },
        data: updateCargoDto,
      });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Erro ao atualizar o cargo', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    try {
      const cargo = await this.prismaService.cargo.findUnique({
        where: { id },
      });

      if (!cargo) {
        throw new HttpException('Cargo não encontrado', HttpStatus.NOT_FOUND);
      }

      const funcionariosVinculados = await this.prismaService.funcionario.findFirst({
        where: { cargoId: id }
      });

      if (funcionariosVinculados) {
        throw new HttpException(
          'Não é possível remover este cargo, pois existem funcionários vinculados a ele.',
          HttpStatus.FORBIDDEN,
        );
      }
      await this.prismaService.cargo.delete({
        where: { id },
      });

      return { message: 'Cargo removido com sucesso' };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Erro ao remover o cargo', HttpStatus.BAD_REQUEST);
    }
  }
}