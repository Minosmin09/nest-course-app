import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UntilityService } from 'src/shared/untility/untility.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productServeice: ProductService,
                private readonly untilityService: UntilityService){}

        @Get() // localhost:3000/product
        productFunc(): string{
            return this.productServeice.productFunc();
        }

        @Get('/function2')//localhost:3000/product/function2
        productFunc2(): string{
            return this.productServeice.productFunc2();
        }
        @Get('/json')//localhost:3000/product/json
        productJSON(){
            return this.productServeice.productJSON();
        }
}
