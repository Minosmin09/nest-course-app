import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Min!';
  }
  getJSON(){
    return {
      name: 'Asmin',
      lastname: 'Dueloh', 
      age: 20,
    };
  }
  getJSON2(){
    return{
    name: 'Minosmin',
    lastname: 'Min',
    age: 20,

  }
}
}
