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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentoController = void 0;
const common_1 = require("@nestjs/common");
const departamento_service_1 = require("./departamento.service");
const create_departamento_dto_1 = require("./dto/create-departamento.dto");
const update_departamento_dto_1 = require("./dto/update-departamento.dto");
let DepartamentoController = class DepartamentoController {
    departamentoService;
    constructor(departamentoService) {
        this.departamentoService = departamentoService;
    }
    findAll() {
        return this.departamentoService.findAll();
    }
    findByName(nome) {
        return this.departamentoService.findByName(nome);
    }
    findOne(id) {
        return this.departamentoService.findOne(id);
    }
    create(createDepartamentoDto) {
        return this.departamentoService.create(createDepartamentoDto);
    }
    update(id, updateDepartamentoDto) {
        return this.departamentoService.update(id, updateDepartamentoDto);
    }
    remove(id) {
        return this.departamentoService.remove(id);
    }
};
exports.DepartamentoController = DepartamentoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DepartamentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('buscar'),
    __param(0, (0, common_1.Query)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DepartamentoController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DepartamentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_departamento_dto_1.CreateDepartamentoDto]),
    __metadata("design:returntype", void 0)
], DepartamentoController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_departamento_dto_1.UpdateDepartamentoDto]),
    __metadata("design:returntype", void 0)
], DepartamentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DepartamentoController.prototype, "remove", null);
exports.DepartamentoController = DepartamentoController = __decorate([
    (0, common_1.Controller)('departamento'),
    __metadata("design:paramtypes", [departamento_service_1.DepartamentoService])
], DepartamentoController);
//# sourceMappingURL=departamento.controller.js.map