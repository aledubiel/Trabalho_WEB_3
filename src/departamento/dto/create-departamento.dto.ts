import { IsNotEmpty, IsString } from "class-validator";

export class CreateDepartamentoDto {
    @IsString({message: "O nome do departamento deve ser uma texto"})
    @IsNotEmpty({message: "O nome do departamento é obrigatório"})
    readonly nome: string;

    @IsString({message: "A descrição do departamento deve ser uma texto"})
    @IsNotEmpty({message: "A descrição do departamento é obrigatório"})
    readonly descricao: string;

}