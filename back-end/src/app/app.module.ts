import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionariosModule } from 'src/funcionarios/funcionarios.module';
import { DepartamentoModule } from 'src/departamento/departamento.module';
import { CargoModule } from 'src/cargo/cargo.module';

@Module({
  imports: [FuncionariosModule, DepartamentoModule, CargoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
