import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class CargoService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Prisma.PrismaPromise<{
        id: number;
        create: Date | null;
        update: Date | null;
        descricao: string;
        titulo: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        create: Date | null;
        update: Date | null;
        descricao: string;
        titulo: string;
    }>;
    create(createCargoDto: CreateCargoDto): Promise<{
        id: number;
        create: Date | null;
        update: Date | null;
        descricao: string;
        titulo: string;
    }>;
    update(id: number, updateCargoDto: UpdateCargoDto): Promise<{
        id: number;
        create: Date | null;
        update: Date | null;
        descricao: string;
        titulo: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
