import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @Get()
  getHello(): string {
    return 'Aplicação da Ale';
  }
}
