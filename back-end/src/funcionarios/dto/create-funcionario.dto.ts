import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFuncionarioDto {
    @IsString({ message: "O nome precisa ser texto" })
    @IsNotEmpty({ message: "O campo nome não pode ser vazio" })
    readonly nome: string;

    @IsEmail()
    readonly email: string;

    @IsNotEmpty({ message: "O campo telefone não pode ser vazio" })
    readonly telefone: string;

    @IsNotEmpty({ message: "O campo CPF não pode ser vazio" })
    readonly cpf: string;

    @IsNotEmpty({ message: "O funcionario precisa estar relacionado a um Departamento" })
    @IsNumber()
    readonly departamentoId: number;

    @IsNotEmpty({ message: "O funcionario precisa estar relacionado a um Cargo" })
    @IsNumber()
    readonly cargoId: number;
}