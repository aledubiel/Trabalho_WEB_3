import { Module } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { FuncionariosController } from './funcionarios.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FuncionariosController],
  providers: [FuncionariosService],
  imports: [PrismaModule]
})
export class FuncionariosModule {}
