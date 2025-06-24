"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CargoService = class CargoService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        return this.prismaService.cargo.findMany();
    }
    async findOne(id) {
        try {
            const cargo = await this.prismaService.cargo.findUnique({
                where: { id },
            });
            if (!cargo) {
                throw new common_1.HttpException('Cargo não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            return cargo;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Erro ao buscar o cargo', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(createCargoDto) {
        try {
            const cargoExistente = await this.prismaService.cargo.findUnique({
                where: { titulo: createCargoDto.titulo },
            });
            if (cargoExistente) {
                throw new common_1.HttpException('Já existe um cargo com este título', common_1.HttpStatus.CONFLICT);
            }
            return await this.prismaService.cargo.create({
                data: createCargoDto,
            });
        }
        catch (error) {
            throw new common_1.HttpException('Erro ao criar o cargo', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, updateCargoDto) {
        try {
            const cargo = await this.prismaService.cargo.findUnique({
                where: { id },
            });
            if (!cargo) {
                throw new common_1.HttpException('Cargo não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            if (updateCargoDto.titulo) {
                const cargoComMesmoTitulo = await this.prismaService.cargo.findFirst({
                    where: {
                        titulo: updateCargoDto.titulo,
                        id: { not: id }
                    }
                });
                if (cargoComMesmoTitulo) {
                    throw new common_1.HttpException('O novo título já está em uso por outro cargo', common_1.HttpStatus.CONFLICT);
                }
            }
            return await this.prismaService.cargo.update({
                where: { id },
                data: updateCargoDto,
            });
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Erro ao atualizar o cargo', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        try {
            const cargo = await this.prismaService.cargo.findUnique({
                where: { id },
            });
            if (!cargo) {
                throw new common_1.HttpException('Cargo não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            const funcionariosVinculados = await this.prismaService.funcionario.findFirst({
                where: { cargoId: id }
            });
            if (funcionariosVinculados) {
                throw new common_1.HttpException('Não é possível remover este cargo, pois existem funcionários vinculados a ele.', common_1.HttpStatus.FORBIDDEN);
            }
            await this.prismaService.cargo.delete({
                where: { id },
            });
            return { message: 'Cargo removido com sucesso' };
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Erro ao remover o cargo', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.CargoService = CargoService;
exports.CargoService = CargoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CargoService);
//# sourceMappingURL=cargo.service.js.map