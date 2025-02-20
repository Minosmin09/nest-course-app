import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UntilityService } from 'src/shared/untility/untility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('user')
export class UserController {
    constructor(private readonly utilityServeice: UntilityService,
                private readonly userServeice: UserService,
                private readonly GlobalService: GlobalHelperService){}
    
    @Get('/shared')
        UserFunc(): string{
            return this.utilityServeice.shareFunction();
        }
        @Get('/Global')
        Global(): string{
            return this.GlobalService.globalFunc();

}
}
