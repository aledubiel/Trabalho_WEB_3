import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
export declare class FuncionariosService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        departamento: {
            id: number;
            nome: string;
            create: Date | null;
            update: Date | null;
            descricao: string;
        };
        cargo: {
            id: number;
            create: Date | null;
            update: Date | null;
            descricao: string;
            titulo: string;
        } | null;
    } & {
        id: number;
        nome: string;
        email: string;
        cpf: string;
        telefone: string;
        departamentoId: number;
        cargoId: number | null;
        create: Date | null;
        update: Date | null;
    })[]>;
    findOne(id: number): Promise<{
        departamento: {
            id: number;
            nome: string;
            create: Date | null;
            update: Date | null;
            descricao: string;
        };
        cargo: {
            id: number;
            create: Date | null;
            update: Date | null;
            descricao: string;
            titulo: string;
        } | null;
    } & {
        id: number;
        nome: string;
        email: string;
        cpf: string;
        telefone: string;
        departamentoId: number;
        cargoId: number | null;
        create: Date | null;
        update: Date | null;
    }>;
    findByName(nome: string): Promise<({
        departamento: {
            id: number;
            nome: string;
            create: Date | null;
            update: Date | null;
            descricao: string;
        };
        cargo: {
            id: number;
            create: Date | null;
            update: Date | null;
            descricao: string;
            titulo: string;
        } | null;
    } & {
        id: number;
        nome: string;
        email: string;
        cpf: string;
        telefone: string;
        departamentoId: number;
        cargoId: number | null;
        create: Date | null;
        update: Date | null;
    })[]>;
    create(createFuncionarioDto: CreateFuncionarioDto): Promise<{
        id: number;
        nome: string;
        email: string;
        cpf: string;
        telefone: string;
        departamentoId: number;
        cargoId: number | null;
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
        cargoId: number | null;
        create: Date | null;
        update: Date | null;
    }>;
    remove(id: number): Promise<string>;
}
