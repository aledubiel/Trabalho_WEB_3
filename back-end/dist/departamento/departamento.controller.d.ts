import { DepartamentoService } from './departamento.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
export declare class DepartamentoController {
    private readonly departamentoService;
    constructor(departamentoService: DepartamentoService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        nome: string;
        id: number;
        create: Date | null;
        update: Date | null;
        descricao: string;
    }[]>;
    findOne(id: number): Promise<{
        nome: string;
        id: number;
        create: Date | null;
        update: Date | null;
        descricao: string;
    }>;
    create(createDepartamentoDto: CreateDepartamentoDto): import(".prisma/client").Prisma.Prisma__DepartamentoClient<{
        nome: string;
        id: number;
        create: Date | null;
        update: Date | null;
        descricao: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateDepartamentoDto: UpdateDepartamentoDto): Promise<{
        nome: string;
        id: number;
        create: Date | null;
        update: Date | null;
        descricao: string;
    }>;
    remove(id: number): Promise<string>;
}
