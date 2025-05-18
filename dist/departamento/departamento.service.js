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
exports.DepartamentoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DepartamentoService = class DepartamentoService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    findAll() {
        return this.prismaService.departamento.findMany();
    }
    async findOne(id) {
        const departamento = await this.prismaService.departamento.findUnique({
            where: {
                id: id
            }
        });
        if (departamento) {
            return departamento;
        }
        throw new common_1.HttpException("Departamento não encontrado", common_1.HttpStatus.NOT_FOUND);
    }
    create(createDepartamentoDto) {
        try {
            return this.prismaService.departamento.create({
                data: createDepartamentoDto
            });
        }
        catch (error) {
            throw new common_1.HttpException("Não foi possivel criar", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, updateDepartamentoDto) {
        try {
            const departamento = await this.prismaService.departamento.findUnique({
                where: { id },
            });
            if (!departamento) {
                throw new common_1.HttpException('Departamento não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            await this.prismaService.departamento.update({
                where: { id },
                data: updateDepartamentoDto,
            });
            return departamento;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Não foi possível atualizar', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        try {
            const departamento = await this.prismaService.departamento.findUnique({
                where: { id },
            });
            if (!departamento) {
                throw new common_1.HttpException('Departamento não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            const funcionarios = await this.prismaService.funcionario.findMany({
                where: { departamentoId: id },
            });
            if (funcionarios.length > 0) {
                throw new common_1.HttpException('Não é possível deletar: existem funcionários associados a este departamento', common_1.HttpStatus.BAD_REQUEST);
            }
            await this.prismaService.departamento.delete({
                where: { id },
            });
            return 'Departamento deletado com sucesso';
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Não foi possível deletar', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.DepartamentoService = DepartamentoService;
exports.DepartamentoService = DepartamentoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DepartamentoService);
//# sourceMappingURL=departamento.service.js.map