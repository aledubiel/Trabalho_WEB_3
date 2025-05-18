import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
export declare class FuncionariosController {
    private readonly funcionariosService;
    constructor(funcionariosService: FuncionariosService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
        email: string;
        cpf: string;
        telefone: string;
        departamentoId: number;
        create: Date | null;
        update: Date | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nome: string;
        email: string;
        cpf: string;
        telefone: string;
        departamentoId: number;
        create: Date | null;
        update: Date | null;
    }>;
    create(createFuncionarioDto: CreateFuncionarioDto): Promise<{
        id: number;
        nome: string;
        email: string;
        cpf: string;
        telefone: string;
        departamentoId: number;
        create: Date | null;
        update: Date | null;
    }>;
    update(id: number, updateFuncionarioDto: UpdateFuncionarioDto): Promise<{
        id: number;
        nome: string;
        email: string;
        cpf: string;
        telefone: string;
        departamentoId: number;
        create: Date | null;
        update: Date | null;
    }>;
    remove(id: number): Promise<string>;
}
