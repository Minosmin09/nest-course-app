import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';
import { UntilityService } from 'src/shared/untility/untility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('chat')
export class ChatController {
    constructor(private readonly utilityServeice: UntilityService,
                private readonly chatServeice: ChatService,
                private readonly GlobalService: GlobalHelperService){}
    @Get('/shared') // localhost:3000/chat/shared
    shareFunc(): string{
        return this.utilityServeice.shareFunction();
    }
    @Get('/Global')
    Global(): string{
        return this.GlobalService.globalFunc();
    }
    
    

}
