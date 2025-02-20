import { Controller, Get } from '@nestjs/common';
import { UntilityService } from 'src/shared/untility/untility.service';
import { OrderService } from './order.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';


@Controller('order')
export class OrderController {
    constructor(private readonly OrderServeice: OrderService,
                private readonly untilityService: UntilityService,
                private readonly GlobalService: GlobalHelperService){}

    @Get('/shared')
    OrderFunc(): string{
        return this.untilityService.shareFunction();
    }
    @Get('/Global')
    Global(): string{
        return this.GlobalService.globalFunc();
}
}
