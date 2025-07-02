import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
export declare class DepartamentoService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
        descricao: string;
        create: Date | null;
        update: Date | null;
    }[]>;
    findByName(nome: string): Promise<{
        id: number;
        nome: string;
        descricao: string;
        create: Date | null;
        update: Date | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nome: string;
        descricao: string;
        create: Date | null;
        update: Date | null;
    }>;
    create(createDepartamentoDto: CreateDepartamentoDto): import(".prisma/client").Prisma.Prisma__DepartamentoClient<{
        id: number;
        nome: string;
        descricao: string;
        create: Date | null;
        update: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateDepartamentoDto: UpdateDepartamentoDto): Promise<{
        id: number;
        nome: string;
        descricao: string;
        create: Date | null;
        update: Date | null;
    }>;
    remove(id: number): Promise<string>;
}
