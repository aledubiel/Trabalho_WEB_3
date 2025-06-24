import { CargoService } from './cargo.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
export declare class CargoController {
    private readonly cargoService;
    constructor(cargoService: CargoService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
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
