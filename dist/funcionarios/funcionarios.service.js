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
exports.FuncionariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FuncionariosService = class FuncionariosService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        return this.prismaService.funcionario.findMany();
    }
    async findOne(id) {
        try {
            const funcionario = await this.prismaService.funcionario.findUnique({
                where: { id },
            });
            if (!funcionario) {
                throw new common_1.HttpException('Funcionário não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            return funcionario;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Erro ao buscar funcionário', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(createFuncionarioDto) {
        try {
            const departamento = await this.prismaService.departamento.findUnique({
                where: { id: createFuncionarioDto.departamentoId },
            });
            if (!departamento) {
                throw new common_1.HttpException('Erro ao criar funcionário: Departamento não encontrado', common_1.HttpStatus.BAD_REQUEST);
            }
            return await this.prismaService.funcionario.create({
                data: createFuncionarioDto,
            });
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Erro ao criar funcionário', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, updateFuncionarioDto) {
        try {
            const funcionario = await this.prismaService.funcionario.findUnique({
                where: { id },
            });
            if (!funcionario) {
                throw new common_1.HttpException('Funcionário não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            if (updateFuncionarioDto.departamentoId) {
                const departamento = await this.prismaService.departamento.findUnique({
                    where: { id: updateFuncionarioDto.departamentoId },
                });
                if (!departamento) {
                    throw new common_1.HttpException('Erro ao atualizar funcionário: Departamento não encontrado', common_1.HttpStatus.BAD_REQUEST);
                }
            }
            return await this.prismaService.funcionario.update({
                where: { id },
                data: updateFuncionarioDto,
            });
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Erro ao atualizar funcionário', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        try {
            const funcionario = await this.prismaService.funcionario.findUnique({
                where: { id },
            });
            if (!funcionario) {
                throw new common_1.HttpException('Funcionário não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            await this.prismaService.funcionario.delete({
                where: { id },
            });
            return 'Funcionário removido com sucesso';
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Erro ao remover funcionário', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.FuncionariosService = FuncionariosService;
exports.FuncionariosService = FuncionariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FuncionariosService);
//# sourceMappingURL=funcionarios.service.js.map