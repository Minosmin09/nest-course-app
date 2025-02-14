import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/showJSON')//localhost:3000/showJSON
  getJSON(){
    return this.appService.getJSON();
  }
  getJSON2(){
    return this.appService.getJSON2();
  }



}
