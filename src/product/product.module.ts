import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { UntilityModule } from 'src/shared/untility/untility.module';

@Module({
  imports: [UntilityModule],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
