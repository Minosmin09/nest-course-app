import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UntilityModule } from './shared/untility/untility.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { ChatModule } from './chat/chat.module';
import { GlobalHelperModule } from './shared/global-helper/global-helper.module';

@Module({
  imports: [ProductModule, UntilityModule, UserModule, OrderModule, ChatModule, GlobalHelperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
