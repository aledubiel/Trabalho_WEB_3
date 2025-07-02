import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class CargoService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Prisma.PrismaPromise<{
        id: number;
        titulo: string;
        descricao: string;
        create: Date | null;
        update: Date | null;
    }[]>;
    findByName(titulo: string): Promise<{
        id: number;
        titulo: string;
        descricao: string;
        create: Date | null;
        update: Date | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        titulo: string;
        descricao: string;
        create: Date | null;
        update: Date | null;
    }>;
    create(createCargoDto: CreateCargoDto): Promise<{
        id: number;
        titulo: string;
        descricao: string;
        create: Date | null;
        update: Date | null;
    }>;
    update(id: number, updateCargoDto: UpdateCargoDto): Promise<{
        id: number;
        titulo: string;
        descricao: string;
        create: Date | null;
        update: Date | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
