import { CargoService } from './cargo.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
export declare class CargoController {
    private readonly cargoService;
    constructor(cargoService: CargoService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
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
