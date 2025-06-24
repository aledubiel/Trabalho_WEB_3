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
exports.CreateFuncionarioDto = void 0;
const class_validator_1 = require("class-validator");
class CreateFuncionarioDto {
    nome;
    email;
    telefone;
    cpf;
    departamentoId;
    cargoId;
}
exports.CreateFuncionarioDto = CreateFuncionarioDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "O nome precisa ser texto" }),
    (0, class_validator_1.IsNotEmpty)({ message: "O campo nome não pode ser vazio" }),
    __metadata("design:type", String)
], CreateFuncionarioDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateFuncionarioDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "O campo telefone não pode ser vazio" }),
    __metadata("design:type", String)
], CreateFuncionarioDto.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "O campo CPF não pode ser vazio" }),
    __metadata("design:type", String)
], CreateFuncionarioDto.prototype, "cpf", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "O funcionario precisa estar relacionado a um Departamento" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFuncionarioDto.prototype, "departamentoId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "O funcionario precisa estar relacionado a um Cargo" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFuncionarioDto.prototype, "cargoId", void 0);
//# sourceMappingURL=create-funcionario.dto.js.map