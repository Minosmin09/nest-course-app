import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { UntilityModule } from 'src/shared/untility/untility.module';

@Module({
  imports: [UntilityModule],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
