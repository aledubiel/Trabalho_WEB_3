import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoController } from './departamento.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
  imports: [PrismaModule]
})
export class DepartamentoModule {}
