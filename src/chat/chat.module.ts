import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { UntilityModule } from 'src/shared/untility/untility.module';
import { ChatController } from './chat.controller';


@Module({
  imports: [UntilityModule],
  providers: [ChatService],
  controllers: [ChatController]
})
export class ChatModule {}
