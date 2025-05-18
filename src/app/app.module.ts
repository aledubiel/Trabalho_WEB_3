import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionariosModule } from 'src/funcionarios/funcionarios.module';
import { DepartamentoModule } from 'src/departamento/departamento.module';

@Module({
  imports: [FuncionariosModule, DepartamentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
