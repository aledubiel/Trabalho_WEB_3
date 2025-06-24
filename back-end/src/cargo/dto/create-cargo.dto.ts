import { IsNotEmpty } from "class-validator";

export class CreateCargoDto {
     @IsNotEmpty({ message: "O campo nome não pode ser vazio" })
    readonly titulo: string;

    @IsNotEmpty({ message: "O campo nome não pode ser vazio" })
    readonly descricao: string;
}
